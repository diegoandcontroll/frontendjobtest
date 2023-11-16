import React from "react";
import { HeaderContainer, NavContainer, Logo } from "./styles";

import SideBar from "../SideBar";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo>
          <span>MKS</span>
          <h1>Sistemas</h1>
        </Logo>
        <SideBar cartOpen />
      </NavContainer>
    </HeaderContainer>
  );
};
