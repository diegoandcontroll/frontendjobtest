import React from "react";
import { motion } from "framer-motion";
import {
  HeaderContainer as StyledHeaderContainer,
  NavContainer as StyledNavContainer,
  Logo as StyledLogo,
} from "./styles";

import SideBar from "../SideBar";

export const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <StyledHeaderContainer as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
      <StyledNavContainer as={motion.div}>
        <StyledLogo as={motion.div} variants={logoVariants} initial="hidden" animate="visible">
          <span>MKS</span>
          <h1>Sistemas</h1>
        </StyledLogo>
        <SideBar cartOpen />
      </StyledNavContainer>
    </StyledHeaderContainer>
  );
};
