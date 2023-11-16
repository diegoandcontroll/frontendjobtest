import styled from "styled-components";
interface ButtonProps {
  cartOpen: boolean;
}

export const SideContainer = styled.aside<ButtonProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 20px 40px 120px;
  width: 38%;
  height: 100vh;
  background-color: var(--primary);
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.25);
  opacity: ${(props) => (props.cartOpen ? "1" : "0")};
  visibility: ${(props) => (props.cartOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.cartOpen ? "translateX(0%)" : "translateX(110%)"};
  transition: all 0.5s;

  @media (max-width: 768px) {
    padding: 20px;
    width: min(85vw, 480px);
  }
`;
export const SideHeader = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  div {
    width: 50%;
  }
  h2 {
    font-size: 27px;
    font-weight: 700;
  }
  span {
    background: black;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    div {
      width: auto;
    }
  }
  .span-close {
    font-size: 1.6rem;
  }
`;
export const BottomButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 80px;
  font-size: 28px;
  font-weight: 700;
  background: #000;
  color: #fff;
  cursor: pointer;
`;

export const CartButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 18px;
  border: none;
  display: flex;
  > span {
    margin-left: 8px;
  }
`;

export const CartProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: #fff;
  width: 100%;
  border-radius: 8px;
  position: relative;
  .quantity-container {
    display: flex;
    align-items: center;
    gap: 15px;
    p {
      font-size: 6px;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .quantity-container {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
    }
  }
  .remove {
    position: absolute;
    top: -6px;
    right: -6px;
    z-index: 100;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    background: black;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
`;

export const SideProducts = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #0f52ba white;
  max-height: 60vh;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #0f52ba !important;
    border-radius: 4px !important;
  }
`;
export const ProductPrice = styled.span`
  font-size: 15px;
  font-weight: 700;

  @media (max-width: 768px) {
    padding: 10px;
    background-color: #373737;
    color: var(--white);
    border-radius: 5px;
  }
`;

export const ProductQuantity = styled.div`
  border-radius: 8px;
  border: 0.3px solid #bfbfbf;
  padding: 6px 6px;
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    border: none;
    outline: none;
    background: var(--white);
    padding: 2px 8px;
    font-size: 14px;
    cursor: pointer;
  }
  .minor {
    border-right: 1px solid #bfbfbf;
  }
  .plus {
    border-left: 1px solid #bfbfbf;
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  font-size: 28px;
  font-weight: 700;
  padding: 5px 0;
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 90px;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
