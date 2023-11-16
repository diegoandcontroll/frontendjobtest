"use client";

import { motion } from "framer-motion";
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
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};
const logoVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};
export default function Home() {
  return (
    <>
      <Header />
      <Content as={motion.div} variants={logoVariants} initial="hidden" animate="visible">
        <ProductCard />
      </Content>
      <Footer />
    </>
  );
}
