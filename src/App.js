import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/menu";
import TournamentsList from "./components/tournament/list/TournamentsList";
import Tournament from "./components/tournament/Tournament";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";
import "../src/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <div className="content py-2">
          <Container>
            <Switch>
              <Route exact path="/" component={TournamentsList} />
              <Route exact path="/tournaments/:id" component={Tournament} />
            </Switch>
          </Container>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
