import React, { Component } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import styled from "styled-components";

export default class FeedbackLists extends Component {
  render() {
    return (
      <div>
        <Card>
          <Text>text</Text>
          <Rating>
            <div>4</div>
          </Rating>
          <FaEdit
            style={{
              position: "absolute",
              right: "30px",
              top: "10px",
              color: "midnightblue",
            }}
          />
          <FaTimes
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              color: "red",
            }}
          />
        </Card>
      </div>
    );
  }
}

const Text = styled.div``;

const Rating = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 30px;
  border: 3px solid tomato;
  border-radius: 50%;
  background-color: #fff;
  transform: translate(-30%, -30%);

  && div {
    text-align: center;
  }
`;
