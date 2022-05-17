import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux';
import store from './store';

import Header from "./common/header";
import Home from "./page/Home";
import Search_article from "./page/Search_article";
import Submit_article from "./page/Submit_article";
import Contantus from "./page/Contantus";
import NotFound from "./page/404";

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <GlobalStyle />
          <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SearchArticle" component={Search_article} />
            <Route exact path="/SubmitArticle" component={Submit_article} />
            <Route exact path="/Contantus" component={Contantus} />
            <Route exact path="/404" component={NotFound} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
    </Provider>
    )
  }
}

export default App;