export interface UserToken {
    accessToken: string
}


type RecommandRes = {
  userId: number;
  results: Array<{
    movieId: number | null;
    movieTitle: string | null;
    saleId: number | null;
    similarityScore: number | null;
    reason: string;                // 예: "4K, Blu-ray, 3D, 35,000원"
  }>;
};