// OnboardingPage.tsx
import React, { useState } from "react";
import styled from "styled-components";

// Mock 데이터
const bluRays = [
  { id: 1, title: "Inception", img: "/img/inception.jpg" },
  { id: 2, title: "Avatar", img: "/img/avatar.jpg" },
  { id: 3, title: "The Matrix", img: "/img/matrix.jpg" },
  { id: 4, title: "Interstellar", img: "/img/interstellar.jpg" },
  { id: 5, title: "Avengers", img: "/img/avengers.jpg" },
  { id: 6, title: "Titanic", img: "/img/titanic.jpg" },
  { id: 7, title: "Jurassic Park", img: "/img/jurassic.jpg" },
];

export default function OnboardingPage() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (id: number) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      } else if (prev.length < 10) { // 최대 10개
        return [...prev, id];
      }
      return prev;
    });
  };

  const isValidSelection = selected.length >= 5;

  return (
    <Container>
      <Title>블루레이를 선택해주세요 (5~10개)</Title>
      <Grid>
        {bluRays.map((b) => (
          <Card
            key={b.id}
            selected={selected.includes(b.id)}
            onClick={() => toggleSelect(b.id)}
          >
            <img src={b.img} alt={b.title} />
            <p>{b.title}</p>
          </Card>
        ))}
      </Grid>
      <Button disabled={!isValidSelection}>
        선택 완료 ({selected.length})
      </Button>
    </Container>
  );
}

// Styled-components
const Container = styled.div`
  padding: 32px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const Card = styled.div<{ selected: boolean }>`
  width: 150px;
  cursor: pointer;
  border: 2px solid ${(props) => (props.selected ? "#0484FF" : "#ccc")};
  border-radius: 8px;
  padding: 8px;
  transition: all 0.2s;

  img {
    width: 100%;
    border-radius: 4px;
  }

  p {
    margin-top: 8px;
    font-size: 14px;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #0484ff;
  }
`;

const Button = styled.button`
  margin-top: 24px;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background-color: #0484ff;
  color: white;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
