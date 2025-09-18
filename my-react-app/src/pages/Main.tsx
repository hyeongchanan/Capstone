
import { Suspense, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSimpleList from '../components/ProductSimpleList';
import { BasicBase, EmptyBox, Spacer } from '../style/common.styled';
import { ProductsSection, SubTitle } from './Main.styled';
import MenuBar from '../components/MenuBar';
import MainTopBar from '../components/main/MainTopBar';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from '../components/Loading';


type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  mall: string;
};



const Main = () => {


  return (
    <>
      <MainTopBar />
      <Spacer h={48} />
      <BasicBase>
        <div style={{ width: "100%" }}>
          <SubTitle>내 취향 맞춤 추천 아이템</SubTitle>
        </div>
          <ErrorBoundary fallback={<div>상품을 불러오는중 오류가 발생했습니다</div>}>
            <Suspense fallback={<Loading />}>
              <ProductSimpleList />
            </Suspense>
          </ErrorBoundary>
        <Spacer h={50} />
        <div style={{ width: "100%" }}>
          <SubTitle>인기순</SubTitle>
        </div>
          <ErrorBoundary fallback={<div>상품을 불러오는중 오류가 발생했습니다</div>}>
            <Suspense fallback={<Loading />}>
              <ProductSimpleList />
            </Suspense>
          </ErrorBoundary>

      </BasicBase>

    </>
  )
}

export default Main