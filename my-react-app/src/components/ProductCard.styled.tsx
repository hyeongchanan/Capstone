import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;

  padding: 12px 16px;
  background: #fff;
  transition: background 0.2s;

  &:hover {
    background: #fafafa;
  }

  position: relative;
`;


export const InfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 위쪽부터 배치 */
  gap: 8px;
`;


export const CardSection = styled.div`
  padding: 40px 10px;
  border-bottom: 10px solid #fafafa;
  background-color : white;
  border-radius : 5px
`

export const ImageWrapper = styled.div`
  flex: 0 0 240px;
  margin-right: 16px;
  overflow: hidden;
  border-radius: 2px;
  border: 1px solid #eee;
  padding-top: 0;

`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Areas = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 두 줄 제한 */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Describe = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #333333;
  overflow: hidden;
`;

export const Prices = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Discount = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: #ef4444;
`;

export const Price = styled.span`
  font-size: 17px;
  font-weight: bold;
  color: #111;

  span {
    font-size: 13px;
    margin-left: 2px;
  }
`;

export const OriginalPrice = styled.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
`;

export const Aside = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 186px;
    border-left: 2px solid #e4e4e4;
    padding-top: 1px;
    max-height: inherit;
    padding-left: 24px;
    height: auto;
    margin-top: 0;
    pointer-events: none;
`;


export const Aside2 = styled.div`
    position: flex;
    top: 0;
    right: 0;
    bottom: 0;
    width: 186px;
    padding-top: 1px;
    max-height: inherit;
    padding-left: 42px;
    height: auto;
    margin-top: 0;
    pointer-events: none;
`;

export const Mall = styled.span`
  font-size: 13px;
  color: #555;
`;

export const Ad = styled.span`
  font-size: 11px;
  color: #fff;
  background: #ef4444;
  padding: 2px 6px;
  border-radius: 4px;
`;

export const EasyPay = styled.span`
  img {
    height: 16px;
  }
`;
