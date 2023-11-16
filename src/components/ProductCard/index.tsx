import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CardContainer,
  Card,
  CarDesc,
  CardButton,
  Box,
  Text,
  Skeleton,
} from "./styles";

import { FiShoppingBag } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { addToCart } from "src/redux/features/cart-slice";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "src/types/Product";
import { formatCurrency } from "src/utils/currency";

const ProductCard: React.FC = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(
        `${baseUrl}/products?page=1&rows=8&sortBy=name&orderBy=DESC`
      );
      const data = await response.json();
      return data.products as IProduct[];
    },
    staleTime: 60 * 1000, // 1 minute
  });

  return (
    <>
      <CardContainer>
        {!isLoading && !isError
          ? products?.map((product, index) => (
              <Card key={product.id}>
                <img src={product.photo} width={150} height={150}></img>
                <CarDesc>
                  <span>{product.name}</span>
                  <span>{formatCurrency(product.price)}</span>
                </CarDesc>
                <p>{product.description}</p>
                <CardButton onClick={() => dispatch(addToCart(product))}>
                  <FiShoppingBag />
                  Comprar
                </CardButton>
              </Card>
            ))
          : products?.map((product) => <CardSkeleton key={product.id} />)}
      </CardContainer>
    </>
  );
};

export const CardSkeleton = () => {
  return (
    <Skeleton>
      <Box />
      <Text />
      <Text />
      <Text />
    </Skeleton>
  );
};

export default ProductCard;
