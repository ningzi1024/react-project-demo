import React from 'react';
import logo from '../../logo.svg';
import { connect } from 'react-redux'

class Header extends React.Component {
    render(){
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React
                <p style={{"marginTop":0}}>Counter is { this.props.counter }</p>
                </h1>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.change_num.num
    }
}

export default connect(
    mapStateToProps
)(Header);