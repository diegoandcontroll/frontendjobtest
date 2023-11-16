"use client";

import Footer from "src/components/Footer";
import { Header } from "src/components/Header";
import ProductCard from "src/components/ProductCard";
import styled from "styled-components";
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 15%;
`;
export default function Home() {
  return (
    <>
      <Header />
      <Content>
        <ProductCard />
      </Content>
      <Footer />
    </>
  );
}
