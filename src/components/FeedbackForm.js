import React, { Component } from "react";
import Card from "./shared/Card";
import styled from "styled-components";
import Ratings from "./Ratings";

export default class FeedbackForm extends Component {
  state = { text: "", rating: null };

  onTextChange = (e) => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  onRatingChange = (rate) => {
    this.setState({ rating: rate });
  };

  onSubmitChange = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Card>
        <form onSubmit={this.onSubmitChange}>
          <h1>How would you rate your service with us?</h1>
          <Ratings onRatingChange={this.onRatingChange} />
          <Field>
            <Input
              type="text"
              onChange={this.onTextChange}
              value={this.state.text}
              placeholder="Write a review"
            />
            <Button type="submit">Send</Button>
          </Field>
        </form>
      </Card>
    );
  }
}

const Field = styled.div`
  position: relative;
`;

const Input = styled.input`
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #000;

  &:focus,
  :active {
    outline: none;
    box-shadow: inset 0 0 2px 1px tomato;
    border: 1px solid transparent;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px 15px;
  border-radius: 5px;
  border: 2px solid tomato;
  color: tomato;
  background-color: transparent;
  cursor: pointer;

  &:active,
  :focus,
  :visited,
  :hover {
    background-color: tomato;
    color: #fff;
  }
`;
