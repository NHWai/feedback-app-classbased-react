import React, { Component } from "react";
import styled from "styled-components";

export default class Ratings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "1",
    };

    this.props.onRatingChange(this.state.selected);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.editData.id !== this.props.editData.id) {
      const { edited, text, rating, id } = this.props.editData;
      if (edited) {
        this.setState({
          selected: rating,
        });
      }
    }
  }

  active = { backgroundColor: "red", color: "#fff", border: "none" };

  handleRate = (e) => {
    this.setState({ selected: e.target.value }, () =>
      this.props.onRatingChange(this.state.selected)
    );
  };

  render() {
    return (
      <RatingContainer>
        <Input
          id="1"
          type="radio"
          value="1"
          name="rating"
          onChange={this.handleRate}
        />
        <Rate
          style={this.state.selected === "1" ? this.active : null}
          htmlFor="1"
        >
          1
        </Rate>
        <Input
          id="2"
          type="radio"
          value="2"
          name="rating"
          onChange={this.handleRate}
          defalutChecked={this.state.selected === 2}
        />
        <Rate
          style={this.state.selected === "2" ? this.active : null}
          htmlFor="2"
        >
          2
        </Rate>
        <Input
          type="radio"
          value="3"
          name="rating"
          onChange={this.handleRate}
          id="3"
        />
        <Rate
          style={this.state.selected === "3" ? this.active : null}
          htmlFor="3"
        >
          3
        </Rate>
        <Input
          type="radio"
          value="4"
          name="rating"
          onChange={this.handleRate}
          id="4"
        />
        <Rate
          style={this.state.selected === "4" ? this.active : null}
          htmlFor="4"
        >
          4
        </Rate>
        <Input
          id="5"
          type="radio"
          value="5"
          name="rating"
          onChange={this.handleRate}
        />
        <Rate
          style={this.state.selected === "5" ? this.active : null}
          htmlFor="5"
        >
          5
        </Rate>
        <Input
          id="6"
          type="radio"
          value="6"
          name="rating"
          onChange={this.handleRate}
        />
        <Rate
          style={this.state.selected === "6" ? this.active : null}
          htmlFor="6"
        >
          6
        </Rate>
        <Input
          id="7"
          type="radio"
          value="7"
          name="rating"
          onChange={this.handleRate}
        />
        <Rate
          style={this.state.selected === "7" ? this.active : null}
          htmlFor="7"
        >
          7
        </Rate>
        <Input
          id="8"
          type="radio"
          value="8"
          name="rating"
          onChange={this.handleRate}
        />
        <Rate
          style={this.state.selected === "8" ? this.active : null}
          htmlFor="8"
        >
          8
        </Rate>
        <Input
          id="9"
          type="radio"
          value="9"
          name="rating"
          onChange={this.handleRate}
        />
        <Rate
          style={this.state.selected === "9" ? this.active : null}
          htmlFor="9"
        >
          9
        </Rate>
        <Input
          id="10"
          type="radio"
          value="10"
          name="rating"
          onChange={this.handleRate}
        />
        <Rate
          style={this.state.selected === "10" ? this.active : null}
          htmlFor="10"
        >
          10
        </Rate>
      </RatingContainer>
    );
  }
}

const RatingContainer = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: space-around;
`;

const Rate = styled.label`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  text-align: center;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: #fff;
    border: none;
  }
`;

const Input = styled.input`
  display: none;
`;
