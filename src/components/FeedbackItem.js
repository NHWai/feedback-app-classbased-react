import React, { Component } from "react";
import Card from "./shared/Card";
import styled from "styled-components";
import { FaEdit, FaTimes } from "react-icons/fa";
import axios from "axios";

export default class FeedbackItem extends Component {
  postDel = (id, e) => {
    e.preventDefault();
    this.props.deleteFeedback(id);
    axios.delete(`http://localhost:5000/feedback/${id}`);
  };

  postEdit = (id, e) => {
    e.preventDefault();
    this.props.editFeedback(id);
  };

  render() {
    const { rating, text, id } = this.props.item;

    return (
      <div>
        <Card>
          <Text>
            {text}
            <br />
            id is {id}
          </Text>
          <Rating>
            <div>{rating}</div>
          </Rating>
          <FaEdit
            style={{
              position: "absolute",
              right: "30px",
              top: "10px",
              color: "midnightblue",
            }}
            onClick={(e) => this.postEdit(id, e)}
          />
          <FaTimes
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              color: "red",
            }}
            onClick={(e) => this.postDel(id, e)}
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

  display: grid;
  place-items: center;
`;
