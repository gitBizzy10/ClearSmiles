import React from 'react';
import Home from './Home/Home.jsx';
import HowItWorks from './HowItWorks/HowItWorks.jsx';
import FindADoctor from './FindADoctor/FindADoctor.jsx';
import Cost from './Cost/Cost.jsx';
import FAQ from './FAQ/FAQ.jsx';
import ContactUs from './ContactUs/ContactUs.jsx';
import Login from './Login.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter,
  Redirect
} from 'react-router-dom';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {

    //if we want log in
    //   loggedIn: true

    // }
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/howitworks" component={HowItWorks} />
          <Route path="/findadoctor" component={FindADoctor} />
          <Route path="/cost" component={Cost} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contactus" component={ContactUs} />
        </div>
      </HashRouter>
    )
  }
}
