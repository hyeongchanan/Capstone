
import ProductCard from '../components/ui/Card';
import { BasicBase, EmptyBox } from '../style/common.styled';
import { ProductsSection } from './Main.styled';

const products = [
  { id: 1, name: "모모노케 히메", price: 129000, imageUrl: "/모모노케히메.jpg" },
  { id: 2, name: "센과 치히로", price: 89000, imageUrl: "/센과치히로.jpg" },
  { id: 3, name: "모모노케 히메", price: 129000, imageUrl: "/모모노케히메.jpg" },
  { id: 4, name: "센과 치히로", price: 89000, imageUrl: "/센과치히로.jpg" },
  { id: 5, name: "모모노케 히메", price: 129000, imageUrl: "/모모노케히메.jpg" },
  { id: 6, name: "센과 치히로", price: 89000, imageUrl: "/센과치히로.jpg" },
  { id: 7, name: "모모노케 히메", price: 129000, imageUrl: "/모모노케히메.jpg" },
  { id: 8, name: "센과 치히로", price: 89000, imageUrl: "/센과치히로.jpg" },
];

const Main = () => {
  const handleAddToCart = (id) => {
    console.log(`${id} 상품 장바구니 추가!`);
  };

  
  return (
    <BasicBase>
      <ProductsSection>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} onAddToCart={handleAddToCart} />
        ))}
      </ProductsSection>
    </BasicBase>
  )
}

export default Main