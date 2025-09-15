import styled from "styled-components";
import { colors } from "../style/themes";



export const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(19, 39, 75, 0.6);
  color: #fff;
  padding: 12px;
  box-sizing: border-box;
  transform: translateY(100%); /* 처음엔 화면 밖으로 숨김 */
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;


export const Card = styled.div`
  flex: 0 0 220px;            /* 기본 너비 */
  height: 300px;              /* 기본 높이 */
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    flex: 0 0 300px;          /* hover 시 너비 증가 */
    height: 390px;            /* hover 시 높이 증가 */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }

  &:hover ${Info} {
    transform: translateY(0);
    opacity: 1;
  }
`;


export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 150%; /* 1:1 비율 */
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s ease;

`;


export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const Qualty = styled.span`
  font-size: 12px;
  color: #fff;
`;

export const Mall = styled.span`
  font-size: 12px;
  color: #ddd;
`;



export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const OriginalPrice = styled.span`
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
`;


