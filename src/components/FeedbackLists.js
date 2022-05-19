import React, { Component } from "react";
import FeedbackItem from "./FeedbackItem";

export default class FeedbackLists extends Component {
  render() {
    const list = this.props.feedbacks.map((item) => (
      <FeedbackItem
        key={item.id}
        deleteFeedback={this.props.deleteFeedback}
        editFeedback={this.props.editFeedback}
        item={item}
      />
    ));

    return <div>{list}</div>;
  }
}
