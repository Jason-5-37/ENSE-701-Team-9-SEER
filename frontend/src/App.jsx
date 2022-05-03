import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './common/header';
import Home from './page/Home';
import SearchArticle from './page/SearchArticle';
import SubmitArticle from './page/SubmitArticle';
import Contactus from './page/Contactus';
import NotFound from './page/404';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SearchArticle" component={SearchArticle} />
            <Route exact path="/SubmitArticle" component={SubmitArticle} />
            <Route exact path="/Contantus" component={Contactus} />
            <Route exact path="/404" component={NotFound} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
