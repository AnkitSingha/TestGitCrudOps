import React from "react";
import "./App.css";

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CrudOps from "./Components/CrudOps";
import CreateAccount from "./Components/CreateAccount";
import { Table } from "@material-ui/core";


class App extends React.Component {
  render() {
    
    const routing = (
      <Router>
        <div>
          <Route path="/CrudOps" exact={true} component={CrudOps} />
          <Route path ="/CreateAccount" component={CreateAccount}/>
        </div>
      </Router>
    )
    return (

      <div className="main-container">
        {/* HEADER  */}

        <header className="block">
          <ul className="header-menu horizontal-list">

            <li > <a className="header-menu-tab" href="CrudOps">CrudOps</a></li>
            <li> <a className="header-menu-tab" href="CreateAccount">CreateAccount</a></li>
            <li><a className="header-menu-tab" href="CrudOps">Component3</a></li>

          </ul>

          <div class="profile-menu">
            <p>Me</p>
            <a href="CrudOps">
              <div class="profile-picture small-profile-picture">
                <img width="40px"
                  src="https://specials-images.forbesimg.com/imageserve/5cfe6efc34a5c4000847f16a/416x416.jpg?background=000000&cropX1=1251&cropX2=4026&cropY1=875&cropY2=3648" />
              </div>
            </a>
          </div>

        </header>

        {routing}

      </div>

    );

  }
}

export default App;


