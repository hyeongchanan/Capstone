import styled from "styled-components";
import { colors } from "../style/themes";

export const Card = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: 200px;
  height: 320px;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: ${props => props.isSelected ? `3px solid ${colors.mainBlue}` : "2px solid #e5e7eb"};
  box-shadow: ${props => 
    props.isSelected 
      ? "0 8px 25px rgba(79, 70, 229, 0.3)" 
      : "0 2px 8px rgba(0, 0, 0, 0.1)"
  };
  overflow: visible;
  flex-shrink: 0;
  z-index: 1;
  transform: ${props => props.isSelected ? "scale(0.95)" : "scale(1)"};

  &:hover {
    transform: ${props => 
      props.isSelected 
        ? "translateY(-6px) scale(0.95)" 
        : "translateY(-8px) scale(1.05)"
    };
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    border-color: ${colors.mainBlue};
    z-index: 10;
  }

  &:active {
    transform: ${props => 
      props.isSelected 
        ? "translateY(-4px) scale(0.9)" 
        : "translateY(-4px) scale(0.95)"
    };
    transition: all 0.1s ease;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const SelectedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(79, 70, 229, 0.1);
  z-index: 1;
`;

export const Info = styled.div`
  padding: 16px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  background: transparent;

  ${Card}:hover & {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.mainBlue};
  padding: 2px 6px;
  border-radius: 4px;
  transition: all 0.3s ease;
  background: transparent;

  ${Card}:hover & {
    background: rgba(79, 70, 229, 0.1);
    backdrop-filter: blur(2px);
  }
`;

export const Quality = styled.span`
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 4px;
  transition: all 0.3s ease;
  background: transparent;

  ${Card}:hover & {
    background: rgba(107, 114, 128, 0.1);
    backdrop-filter: blur(2px);
  }
`;

export const OriginalPrice = styled.span`
  font-size: 12px;
  color: #ef4444;
  font-weight: 600;
  background: #fef2f2;
  padding: 2px 6px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 8px;
`;

export const Mall = styled.span`
  font-size: 12px;
  color: #9ca3af;
  font-weight: 500;
  margin-top: auto;
  padding: 2px 6px;
  border-radius: 4px;
  transition: all 0.3s ease;
  background: transparent;

  ${Card}:hover & {
    background: rgba(156, 163, 175, 0.1);
    backdrop-filter: blur(2px);
  }
`;

export const Checkmark = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${colors.mainBlue};
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  animation: checkmarkAppear 0.3s ease-out;
  
  @keyframes checkmarkAppear {
    0% {
      transform: scale(0) rotate(180deg);
      opacity: 0;
    }
    50% {
      transform: scale(1.2) rotate(90deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }
`;
