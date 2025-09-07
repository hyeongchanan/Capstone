import styled from "styled-components";

export const Card = styled.div`
  border-radius: 2px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.08);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 100%; /* 1:1 비율 */
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 두 줄만 */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
`;

export const Discount = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #ef4444; /* 빨강 */
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #111;
`;

export const OriginalPrice = styled.span`
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
  margin-bottom: 6px;
`;

export const Mall = styled.span`
  font-size: 12px;
  color: #666;
`;
