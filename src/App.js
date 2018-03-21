import React, { Component } from 'react';
import Header from "./components/header/index";
import { Link } from 'react-router-dom'
import './static/less/app.less';
import { Col, Row } from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
            { this.props.children }
        </div>
        <footer>
            <Row>
                <Col span={8}><Link to='/'>Home</Link></Col>
                <Col span={8}><Link to='/info'>INFO</Link></Col>
                <Col span={8}><Link to='/list'>LIST</Link></Col>
            </Row>
        </footer>
      </div>
    );
  }
}

export default App;
