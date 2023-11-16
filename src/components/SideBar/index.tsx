'use client'
import React, { useState, useEffect } from "react";

import {
  SideContainer,
  SideHeader,
  BottomButton,
  CartButton,
  SideProducts,
  CartProducts,
  ProductPrice,
  ProductQuantity,
  TotalContainer,
} from "./styles";
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  decrease,
  getCartTotal,
  increase,
  initialState,
  toOrder
} from "src/redux/features/cart-slice";
import { formatCurrency } from "src/utils/currency";

interface ButtonProps {
  cartOpen: boolean;
}

const SideBar: React.FC<ButtonProps> = ({ cartOpen }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: initialState) => state.cart);
  const cart = useSelector((state: initialState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const handleCLick = () => setIsOpen(!isOpen);

  useEffect(() => {
    dispatch(getCartTotal(cart));
  }, [cart]);

  return (
    <>
      <CartButton onClick={handleCLick}>
        <FaShoppingCart />
        <span>{cart.totalQuantity.toString()}</span>
      </CartButton>
      <SideContainer cartOpen={isOpen}>
        <div className="content">
          <SideHeader>
            <div>
              <h2>
                Carrinho <br />
                de compras
              </h2>
            </div>
            <span onClick={handleCLick} className="span-close">
              x
            </span>
          </SideHeader>
          <SideProducts>
            {cartItems.map((product) => (
              <CartProducts key={product.id}>
                <img src={product.photo} width={75} height={70} />
                <span>{product.name}</span>
                <div className="quantity-container">
                  <ProductQuantity>
                    <button
                      className="minor"
                      onClick={() => dispatch(decrease(product))}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      className="plus"
                      onClick={() => dispatch(increase(product))}
                    >
                      +
                    </button>
                  </ProductQuantity>

                  <ProductPrice>
                    R${product.price * product.quantity}
                  </ProductPrice>
                </div>
                <button
                  className="remove"
                  onClick={() => dispatch(clear(product.id))}
                >
                  x
                </button>
              </CartProducts>
            ))}
          </SideProducts>

          <TotalContainer>
            <span>Total:</span>
            <span>R${formatCurrency(cart.totalPrice)}</span>
          </TotalContainer>
          <BottomButton onClick={() => {
            dispatch(toOrder())
            setIsOpen(false)
            }}>Finalizar Compra</BottomButton>
        </div>
      </SideContainer>
    </>
  );
};

export default SideBar;
