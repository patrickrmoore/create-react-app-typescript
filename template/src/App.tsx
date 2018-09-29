import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import { Layout } from "./Layout";

// import { Provider } from "react-redux";
// import store from "./store";

class App extends React.Component {
  public render() {
    return (
      // <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={PlaceHolder} />
          </Switch>
        </Layout>
      </Router>
      // </Provider>
    );
  }
}

const PlaceHolder = () => {
  return (
    <Jumbotron>
      <h1 className="display-3">Hello, world!</h1>
    </Jumbotron>
  );
};

export default App;
