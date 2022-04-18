import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return <Foot> Copyright &copy; 2022, NHWai All Rights Reserved</Foot>;
  }
}

const Foot = styled.div`
  background-color: midnightblue;
  color: rgba(255, 255, 255, 0.5);
  display: grid;
  place-items: center;
  font-size: 12px;
`;
