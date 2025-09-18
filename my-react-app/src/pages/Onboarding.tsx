import React, { useState, useRef, useEffect, useMemo } from "react";
import * as S from "./Onboarding.styled";
import { useListSales, useSearchSale } from "../hook/useSales";
import { useNavigate } from "react-router-dom";
import OnboardingCard from "../components/OnboardingCard";
import ProductCard from "../components/ProductCard";

export default function Onboarding() {
  const { data: products } = useListSales(20);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  // 검색 관련 상태
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { data: searchResults } = useSearchSale(searchKeyword);

  // 카드를 6개씩 그룹으로 나누고 화면을 꽉 채우도록 무한 순환
  const flowingProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    
    // 6개씩 그룹으로 나누기
    const groups = [];
    for (let i = 0; i < products.length; i += 6) {
      groups.push(products.slice(i, i + 6));
    }
    
    // 각 그룹을 충분히 반복해서 화면을 꽉 채우도록 (8번 반복)
    return groups.map((group, groupIndex) => ({
      products: [...group, ...group, ...group, ...group, ...group, ...group, ...group, ...group], // 8번 반복
      direction: groupIndex % 2 === 0 ? 'right' : 'left' // 짝수 줄은 오->왼, 홀수 줄은 왼->오
    }));
  }, [products]);

  const toggleSelect = (id: number) => {
    setSelectedIds(
      (prev) =>
        prev.includes(id)
          ? prev.filter((pid) => pid !== id)
          : prev.length < 5
          ? [...prev, id]
          : prev // 5개까지만 선택 가능
    );
  };

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
  const handleSearch = () => {
    if (!searchKeyword.trim()) return;
    setIsSearching(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleComplete = () => {
    console.log("선택 완료:", selectedIds);
    // 여기서 API 호출 또는 상태 저장 후 다음 페이지 이동
    navigate("/");
  };

  return (
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

      <S.CompleteButton
        disabled={selectedIds.length === 0}
        onClick={handleComplete}
      >
        완료 ({selectedIds.length}/5)
      </S.CompleteButton>

      {/* 검색 섹션 */}
      <S.SearchSection>
        <S.SearchTitle>원하는 영화를 직접 검색해보세요</S.SearchTitle>
        <S.SearchBoxWrapper>
          <S.SearchInput
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="영화 제목을 입력하세요"
            onKeyDown={handleKeyPress}
          />
          <S.SearchButton onClick={handleSearch}>
            검색
          </S.SearchButton>
        </S.SearchBoxWrapper>
        
        {isSearching && searchResults && (
          <S.SearchResults>
            <S.SearchResultsTitle>검색 결과</S.SearchResultsTitle>
            {searchResults.length === 0 ? (
              <S.NoResults>검색 결과가 없습니다</S.NoResults>
            ) : (
              <S.SearchGrid>
                {searchResults.map((product) => (
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
      </S.SearchSection>
    </S.OnboardingWrapper>
  );
}