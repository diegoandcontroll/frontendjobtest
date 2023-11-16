import React, {  useState } from "react";

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

const ProductCard: React.FC = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(
        `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC`
      );
      const data = await response.json();
      return data.products as IProduct[];
    },
    staleTime: 60 * 1000 // 1 minute
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
                  <span>
                    R$
                    {parseFloat(product.price.toString().replace(",", ""))}
                  </span>
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
