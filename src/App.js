import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FeedbackLists from "./components/FeedbackLists";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <div className="app">
      <Header />
      <Container>
        <FeedbackForm />
        <FeedbackLists />
      </Container>
      <Footer />
    </div>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  padding: 20px;
`;

export default App;
