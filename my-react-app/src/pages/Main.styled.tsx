import styled from "styled-components";
import { colors } from "../style/themes";

export const ProductsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); 
  gap: 24px; /* 카드 사이 간격 */
  width: 100%;
  max-width: 1200px; /* 가운데 정렬 시 안정감 */
  margin: 0 auto; /* 가운데 정렬 */
  padding: 20px 16px; /* 양 옆 패딩 */

  /* 반응형 간격 조정 */
  @media (max-width: 768px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: 480px) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`;

export const SubTitle = styled.p`
  font-size: 24px;            /* 메인보다는 살짝 작은 크기 */
  font-weight: 500;            /* 적당히 강조 */
  color: ${colors.mainDeepBlue};                 /* 부드러운 다크 그레이 */
  text-align: left;            /* 왼쪽 정렬 */
  margin: 0 0 16px 0;          /* 아래 여백으로 카드와 분리 */
  line-height: 1.5;            /* 읽기 좋은 줄 높이 */
  letter-spacing: 0.2px;       /* 서브 타이틀 느낌 강조 */
  padding-left : 20px
`;
