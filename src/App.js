import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FeedbackLists from "./components/FeedbackLists";
import FeedbackForm from "./components/FeedbackForm";
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    data: [],
    errorMessage: "",
    edit: { isEdited: false, editFeed: "" },
  };

  getFeedback = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "http://localhost:5000/feedback",
      });
      this.setState({ data: res.data });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  addFeedback = (feed) => {
    this.setState({ data: [...this.state.data, feed] });
  };

  deleteFeedback = (id) => {
    this.setState({ data: this.state.data.filter((el) => el.id !== id) });
  };

  editFeedback = (feed) => {
    this.setState({ edit: { isEdited: true, editFeed: feed } });
  };

  clearEditFeed = () => {
    this.setState({ edit: { isEdited: false, editFeed: "" } });
  };

  componentDidMount() {
    this.getFeedback();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Container>
          <FeedbackForm
            feed={this.addFeedback}
            edit={this.state.edit}
            clearEditFeed={this.clearEditFeed}
          />
          <FeedbackLists
            feedbacks={this.state.data}
            deleteFeedback={this.deleteFeedback}
            editFeedback={this.editFeedback}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  padding: 20px;
`;

export default App;
