import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import * as S from "./Onboarding.styled";
import { useListSales, useSearchSale } from "../hook/useSales";
import { useNavigate } from "react-router-dom";
import OnboardingCard from "../components/OnboardingCard";
import ProductCard from "../components/ProductCard";
import { NoMenuBar } from "../style/common.styled";
import { Product } from "../type/product";
import searchIcon from "../resource/img/search.svg";

export default function Onboarding() {
  const { data: products } = useListSales(20);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  // 검색 관련 상태
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedSearchKeyword, setDebouncedSearchKeyword] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  // 디바운싱을 위한 useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchKeyword(searchKeyword);
    }, 500); // 500ms 디바운싱

    return () => clearTimeout(timer);
  }, [searchKeyword]);

  // 검색어가 있을 때만 검색 실행
  const { data: searchResults } = useSearchSale(
    debouncedSearchKeyword && isSearching ? debouncedSearchKeyword : ''
  );

  // 카드를 6개씩 그룹으로 나누고 화면을 꽉 채우도록 무한 순환
  const flowingProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    
    // 6개씩 그룹으로 나누기
    const groups: Product[][] = [];
    for (let i = 0; i < products.length; i += 6) {
      groups.push(products.slice(i, i + 6));
    }
    
    // 각 그룹을 충분히 반복해서 화면을 꽉 채우도록 (8번 반복)
    return groups.map((group, groupIndex) => ({
      products: [...group, ...group, ...group, ...group, ...group, ...group, ...group, ...group], // 8번 반복
      direction: (groupIndex % 2 === 0 ? 'right' : 'left') as 'right' | 'left' // 짝수 줄은 오->왼, 홀수 줄은 왼->오
    }));
  }, [products]);

  const toggleSelect = useCallback((id: number) => {
    setSelectedIds(
      (prev) =>
        prev.includes(id)
          ? prev.filter((pid) => pid !== id)
          : prev.length < 5
          ? [...prev, id]
          : prev // 5개까지만 선택 가능
    );
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "right" ? width : -width,
        behavior: "smooth",
      });
    }
  };

  // 마우스 이벤트 제거 - 계속 순환하도록

  // 검색 핸들러
  const handleSearch = useCallback(() => {
    if (!searchKeyword.trim()) {
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
  }, [searchKeyword]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    // 입력이 비어있으면 검색 상태 해제
    if (!e.target.value.trim()) {
      setIsSearching(false);
    }
  }, []);

  const handleComplete = () => {
    console.log("선택 완료:", selectedIds);
    // 여기서 API 호출 또는 상태 저장 후 다음 페이지 이동
    navigate("/");
  };

  return (
    <NoMenuBar>
      <S.OnboardingWrapper>

      <S.Title>좋아하는 영화를 선택해주세요 (최대 5개)</S.Title>
      <S.SelectedCount>
        {selectedIds.length}/5 선택됨
      </S.SelectedCount>
      
      <S.FlowingContainer>
        {flowingProducts.map((group, groupIndex) => (
          <S.FlowingRow 
            key={groupIndex}
            direction={group.direction}
          >
            {group.products.map((p, index) => (
              <OnboardingCard
                key={`${p.id}-${index}`}
                product={p}
                isSelected={selectedIds.includes(p.id)}
                onClick={() => toggleSelect(p.id)}
              />
            ))}
          </S.FlowingRow>
        ))}
      </S.FlowingContainer>

      {/* 검색 섹션 */}
      <S.SearchContainer>
        <S.SearchSection>
          <S.SearchTitle>원하는 영화를 직접 검색해보세요</S.SearchTitle>
          <S.SearchSubtitle>당신의 인생영화를 찾아보세요!</S.SearchSubtitle>
          <S.SearchBoxWrapper>
            <S.SearchInput
              type="text"
              value={searchKeyword}
              onChange={handleInputChange}
              placeholder="영화 제목을 입력하세요"
              onKeyDown={handleKeyPress}
            />
            <S.SearchButton onClick={handleSearch}>
              <S.SearchIcon src={searchIcon} alt="search" />
            </S.SearchButton>
          </S.SearchBoxWrapper>
        </S.SearchSection>
        
        {isSearching && (
          <S.SearchResults>
            <S.SearchResultsTitle>검색 결과</S.SearchResultsTitle>
            {!searchResults ? (
              <S.NoResults>검색 중...</S.NoResults>
            ) : (searchResults as Product[]).length === 0 ? (
              <S.NoResults>검색 결과가 없습니다</S.NoResults>
            ) : (
              <S.SearchGrid>
                {(searchResults as Product[]).map((product) => (
                  <OnboardingCard
                    key={product.id}
                    product={product}
                    isSelected={selectedIds.includes(product.id)}
                    onClick={() => toggleSelect(product.id)}
                  />
                ))}
              </S.SearchGrid>
            )}
          </S.SearchResults>
        )}
      </S.SearchContainer>

      <S.CompleteButton
        disabled={selectedIds.length === 0}
        onClick={handleComplete}
      >
        완료 ({selectedIds.length}/5)
      </S.CompleteButton>
      </S.OnboardingWrapper>
    </NoMenuBar>
  );
}