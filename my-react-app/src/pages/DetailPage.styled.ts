import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
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

export const Price = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #111;
`;

export const Mall = styled.span`
  font-size: 14px;
  color: #555;
`;

export const Meta = styled.div`
  font-size: 14px;
  color: #444;
  line-height: 1.5;
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

export const TopSection = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 2px;
  align-items: stretch;
`;

export const ImageContainer = styled.div`
  width: 600px;
  padding: 20px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Section = styled.section`
  margin-top: 2px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

/* 📌 상세정보 표 */
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;

  th {
    width: 120px;
    text-align: left;
    padding: 8px;
    background-color: #f5f5f5;
    font-weight: 600;
    font-size: 14px;
    border: 1px solid #ddd;
  }

  td {
    padding: 8px;
    border: 1px solid #ddd;
    font-size: 14px;
  }
`;

/* 📌 리뷰 작성 Form */
export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export const RatingSelect = styled.select`
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const ReviewInput = styled.textarea`
  resize: none;
  min-height: 80px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #1d4ed8;
  }
`;
