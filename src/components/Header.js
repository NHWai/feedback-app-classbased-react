import React, { Component } from "react";
import styled from "styled-components";

export default class Header extends Component {
  render() {
    return <Head>Feedback-UI</Head>;
  }
}

const Head = styled.div`
  background-color: #000;
  color: magenta;
  display: grid;
  place-items: center;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1.3px;
`;
