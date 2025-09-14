import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width : 100%;
  margin: 0 auto;
  padding: 20px;
`;

export const BackButton = styled.button`
  border: none;
  background: none;
  color: #2563eb;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
    width: 700px;
    padding: 30px;
    background-color: white;
    height: auto;
    display: flex;              /* flex 컨테이너 */
    justify-content: center;    /* 가로 가운데 정렬 */
    align-items: center;        /* 세로 가운데 정렬 */
`;

export const Info = styled.div`
  margin-top: 16px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Prices = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Discount = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #ef4444;
`;

export const Price = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #111;
`;

export const OriginalPrice = styled.span`
  font-size: 16px;
  color: #999;
  text-decoration: line-through;
`;

export const Mall = styled.span`
  font-size: 14px;
  color: #555;
`;

// DetailPage.styled.ts 계속 이어서 작성

export const Section = styled.section`
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid #eee;

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

export const Meta = styled.div`
  font-size: 14px;
  color: #444;
  line-height: 1.5;
`;

export const RatingGroup = styled.div`
  display: flex;
  gap: 12px;

  label {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    font-size: 14px;

    input {
      cursor: pointer;
    }
  }
`;

export const RatingHelp = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 4px;
`;

export const Grid = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 120px;
  height: 160px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #555;
`;

