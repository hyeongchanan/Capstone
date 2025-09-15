// DetailPage.styled.ts
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;

`;

export const BackButton = styled.button`
  border: none;
  background: none;
  color: #2563eb;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 32px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const TopSection = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
`;

export const ImageContainer = styled.div`
  width: 480px;
  flex-shrink: 0;
  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    border: 1px solid #eee;
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #111;
`;

export const Prices = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 16px;
`;

export const Price = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #111;
`;

export const Mall = styled.span`
  font-size: 14px;
  color: #777;
`;

export const Section = styled.section`
  padding: 32px 0;
  border-top: 1px solid #e5e5e5;

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #111;
  }
`;

export const Meta = styled.div`
  font-size: 14px;
  color: #444;
  line-height: 1.6;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    width: 140px;
    text-align: left;
    padding: 10px 0;
    font-weight: 500;
    font-size: 14px;
    color: #555;
    border-bottom: 1px solid #f0f0f0;
  }

  td {
    padding: 10px 0;
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #f0f0f0;
  }
`;

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

export const ReviewInput = styled.textarea`
  resize: none;
  min-height: 80px;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 14px;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

export const SubmitButton = styled.button`
  background-color: #111;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  align-self: flex-start;

  &:hover {
    background-color: #333;
  }
`;

export const StarsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 22px;
  cursor: pointer;

  span {
    color: #ddd;
    transition: color 0.2s;
  }

  .full {
    color: #facc15;
  }

  .half {
    position: relative;
    display: inline-block;
    color: #ddd;
  }

  .half::before {
    content: "★";
    position: absolute;
    left: 0;
    width: 50%;
    overflow: hidden;
    color: #facc15;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #555;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`;
