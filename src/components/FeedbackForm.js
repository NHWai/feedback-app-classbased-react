import React, { Component } from "react";
import Card from "./shared/Card";
import styled from "styled-components";
import Ratings from "./Ratings";
import axios from "axios";

export default class FeedbackForm extends Component {
  state = { text: "", rating: null };

  onTextChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  onRatingChange = (value) => {
    this.setState({ rating: value });
  };

  onSubmitChange = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/feedback", this.state)
      .then((res) => this.props.feed(res.data))
      .catch((err) => console.log(err));
    this.setState({ text: "" });
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
              name="text"
              onChange={this.onTextChange}
              value={this.state.text}
              placeholder="Write a review"
              autoComplete="off"
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
