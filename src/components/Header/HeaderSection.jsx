import React from "react";

import { Link } from "react-router-dom";

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
} from "carbon-components-react";

import { Help20 } from "@carbon/icons-react";

const HeaderSection = () => (
  <Header aria-label="Carbon Tutorial">
    <HeaderName element={Link} to="/" prefix="MAP">
      My Shifter
    </HeaderName>
    <HeaderNavigation aria-label="Main menu">
      <HeaderMenuItem element={Link} to="/from_stix">
        From STIX
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/to_stix">
        To STIX
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/about">
        <Help20 />
      </HeaderMenuItem>
    </HeaderNavigation>
  </Header>
);
export default HeaderSection;
