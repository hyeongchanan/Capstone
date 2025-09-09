
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSimpleList from '../components/ProductSimpleList';
import { BasicBase, EmptyBox } from '../style/common.styled';
import { ProductsSection } from './Main.styled';
import MenuBar from '../components/MenuBar';
import MainTopBar from '../components/main/MainTopBar';


type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  mall: string;
};

const dummyProducts: Product[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: `테스트 상품 ${i + 1}`,
  price: 10000 + i * 500,
  image: `https://picsum.photos/200/200?random=${i}`,
  mall: i % 2 === 0 ? "쿠팡" : "네이버스토어",
}));

const Main = () => {
  const [products, setProducts] = useState<Product[]>(dummyProducts);
    const [query, setQuery] = useState("");
  
    const handleSearch = (keyword: string) => {
      setQuery(keyword);
      // 실제 API 연동 시 fetch/axios로 호출하는 자리
      const filtered = dummyProducts.filter((p) =>
        p.title.includes(keyword)
      );
      setProducts(filtered);
    };

  
  return (
    <>
      <MainTopBar/>
      <BasicBase>
          <ProductSimpleList products={products}/>
      </BasicBase>
    </>
  )
}

export default Main