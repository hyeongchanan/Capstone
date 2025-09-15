import styled from "styled-components";

export const CardSection = styled.div`
  margin: 10px;
`;

export const Card = styled.div`
  padding 10px;
  width 10px;
  display: flex;
  align-items: flex-start;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
  padding: 10px;

  &:hover {
    background: #fafafa;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
    cursor: pointer;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 120px;
  height: 160px;
  margin-right: 16px;
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid #eee;

  @media (max-width: 768px) {
    flex: 0 0 100px;
    height: 140px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Describe = styled.div`
  font-size: 14px;
  color: #555;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #111;
`;

export const Aside = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 100%;
  border-left: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: center;
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
