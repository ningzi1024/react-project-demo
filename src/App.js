import React, { Component } from 'react';
import './static/less/app.less';
import Header from "./components/header/index";
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
            { this.props.children }
        </div>
        <footer>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/info'>INFO</Link>
                <Link to='/list'>LIST</Link>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
