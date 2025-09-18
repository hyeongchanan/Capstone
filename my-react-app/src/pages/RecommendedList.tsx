import React, { useEffect, useState } from "react";
import { RecommendedItem } from "../type/user";
import { getRecommendedItem } from "../api/recommandAPI";


const USER= "user";

const RecommendedList: React.FC<{ topN?: number }> = ({ topN = 5 }) => {
  const [recommendation, setRecommendation] = useState<RecommendedItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // localStorage에서 userId 가져오기
  const token = localStorage.getItem(USER);
  const userId = 612;
  console.log(token);
  useEffect(() => {
    if (!userId) {
      setError("사용자 정보가 없습니다.");
      return;
    }

    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getRecommendedItem(userId, topN);
        console.log("??")
        console.log(data)
        if (data) setRecommendation(data);
        else setError("추천 데이터를 불러올 수 없습니다.");
      } catch (err) {
        setError("추천 데이터 요청 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [userId, topN]);

  if (loading) return <div>추천 아이템 로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (!recommendation) return <div>추천 데이터가 없습니다.</div>;

  return (
    <div>
      <h2>추천 아이템 ({recommendation.results.length})</h2>
      <ul>
        {recommendation.results.map((item, index) => (
          <li key={index}>
            <strong>{item.movieTitle ?? "제목 없음"}</strong>
            {item.reason && <span> - {item.reason}</span>}
          </li>
        ))}
      </ul>
      <RecommendedList/>
    </div>
  );
};

// 예: 토큰에서 userId를 꺼내는 함수 (토큰 구조에 따라 구현)


export default RecommendedList;
