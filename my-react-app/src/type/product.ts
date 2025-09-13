export type Product = {
  id: number;
  movieId: number | null;
  siteName: string | null;          // yes24 | aladin | kyobo
  siteUrl: string | null;           // 외부 구매 링크
  price: number | null;             // 원화 정수
  quality: string | null;           // 한 글자 등급(ex. A/B 등)
  regionCode: number | null;        // 리전 코드
  isLimitedEdition: boolean | null; // 한정판 여부
  imageLink: string | null;         // 상품 이미지 URL
  blurayTitle: string | null;       // 판매 타이틀(노출용)
};

export type Movie = {
  id: number;
  title: string;
  director: string;
  releaseDate: string;           // ISO LocalDateTime
  productionCompany: string;
  distributionCompany: string;
  runningTime: string;           // ISO LocalTime (e.g., "01:45:00")
};