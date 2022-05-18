import React, { Component } from "react";
import FeedbackItem from "./FeedbackItem";

export default class FeedbackLists extends Component {
  render() {
    const list = this.props.feedbacks.map((item, idx) => (
      <FeedbackItem
        key={idx}
        deleteFeedback={this.props.deleteFeedback}
        item={item}
      />
    ));

    return <div>{list}</div>;
  }
}
