import React, { Component } from "react";
import styled from "styled-components";

export default class Card extends Component {
  render() {
    return <CardContainer>{this.props.children}</CardContainer>;
  }
}

const CardContainer = styled.div`
  min-height: 90px;
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  position: relative;

  &:not(last-child) {
    margin-bottom: 20px;
  }
`;
