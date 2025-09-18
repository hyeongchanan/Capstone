import styled from "styled-components";
import { colors } from "../style/themes";

export const OnboardingWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: white;
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
  padding: 20px 0;
  overflow: hidden;
  position: relative;
`;

export const FlowingRow = styled.div<{ direction: 'left' | 'right' }>`
  display: flex;
  gap: 24px;
  width: 200vw; /* 화면 너비의 2배로 설정 */
  animation: ${props => props.direction === 'right' ? 'flowRight' : 'flowLeft'} 60s linear infinite;
  margin-bottom: 20px;
  
  @keyframes flowRight {
    0% {
      transform: translateX(-100vw);
    }
    100% {
      transform: translateX(0vw);
    }
  }
  
  @keyframes flowLeft {
    0% {
      transform: translateX(0vw);
    }
    100% {
      transform: translateX(-100vw);
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

// 검색 섹션 스타일
export const SearchSection = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 20px;
  border: 2px solid #e2e8f0;
`;

export const SearchTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.mainBlue};
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const SearchBoxWrapper = styled.div`
  display: flex;
  gap: 12px;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${colors.mainBlue};
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

export const SearchButton = styled.button`
  padding: 12px 24px;
  background-color: ${colors.mainBlue};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3b3b9e;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const SearchResults = styled.div`
  margin-top: 2rem;
`;

export const SearchResultsTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  text-align: center;
`;

export const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
`;

export const NoResults = styled.div`
  text-align: center;
  color: #6b7280;
  font-size: 1.1rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  border: 2px dashed #e5e7eb;
`;