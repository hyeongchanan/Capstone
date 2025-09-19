import styled from "styled-components";
import { colors } from "../style/themes";

export const OnboardingWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${colors.mainBlue};
  font-weight: 600;
`;

export const SelectedCount = styled.div`
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`;

export const FlowingContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  overflow: hidden;
  position: relative;
  background-color: white;
  border-radius: 5px;
`;

export const FlowingRow = styled.div<{ direction: 'left' | 'right' }>`
  display: flex;
  gap: 24px;
  width: 200vw; /* 화면 너비의 2배로 설정 */
  animation: ${props => props.direction === 'right' ? 'flowRight' : 'flowLeft'} 60s linear infinite;
  margin-bottom: 20px;
  will-change: transform; /* GPU 가속을 위한 최적화 */
  
  @keyframes flowRight {
    0% {
      transform: translate3d(-100vw, 0, 0);
    }
    100% {
      transform: translate3d(0vw, 0, 0);
    }
  }
  
  @keyframes flowLeft {
    0% {
      transform: translate3d(0vw, 0, 0);
    }
    100% {
      transform: translate3d(-100vw, 0, 0);
    }
  }
`;


export const CompleteButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 3rem;
  background-color: ${colors.mainBlue};
  color: white;
  border: none;
  border-radius: 25px 30% 24px 52%;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.25s ease;
  min-width: 200px;
  
  &:hover:not(:disabled) {
    background-color: #3b3b9e;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

// 검색 컨테이너
export const SearchContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
`;

// 검색 섹션 스타일
export const SearchSection = styled.div`
  padding: 3rem 2rem;
  background-color: ${colors.mainBlue};
  width: 100%;
  position: relative;
`;

export const SearchTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.1;
`;

export const SearchSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2rem 0;
  text-align: center;
`;

export const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 48px;
  padding: 0 20px;
  border-radius: 24px;
  border: none;
  outline: none;
  font-size: 1rem;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1);
  
  &::placeholder {
    color: #9ca3af;
  }
`;

export const SearchButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const SearchResults = styled.div`
  padding: 2rem;
  background: white;
  width: 100%;
`;

export const SearchResultsTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
  justify-items: center;
  max-width: 900px;
  margin: 0 auto;
`;

export const NoResults = styled.div`
  text-align: center;
  color: #6b7280;
  font-size: 1.2rem;
  padding: 3rem 2rem;
  background: #f9fafb;
  border-radius: 12px;
  border: 2px dashed #e5e7eb;
  font-weight: 500;
`;