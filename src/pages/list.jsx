import React, { Component } from 'react';
import BaiduList from '../components/searchData/searchData';

class List extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>LIST PAGE !</h1>
                <BaiduList/>
            </div>

        )
    }
}

export default List;