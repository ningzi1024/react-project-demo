import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as numAction from '../redux/action/index'
import  SearchData from '../components/searchData/searchData'
import jsonp from '../common/jsonp'
import axios from 'axios'

class Home extends React.Component {
    constructor(props){
        super(props);
        this.store = this.props.store;
    }

    render(){
        return(
            <div className="wrap">
                <h1>Home Page !</h1>
                <p>now ,this num is : { this.props.nowNum }</p>
                <button onClick={ this.addOnceNum.bind(this) }> Add one</button>
                <button onClick={ this.reduceOneNum.bind(this) }> reduce one</button>
                <div>
                    <label htmlFor="search">
                        <input type="text" id="search" ref="search" onChange={ this.search.bind(this) }/>
                    </label>
                    <SearchData/>
                </div>
            </div>
        )
    }

    componentDidMount(){

    }

    addOnceNum(){
        let m = this.props.nowNum;
        m = m+1;
        this.props.changeNum.chanageNum({num:m});
    }

    reduceOneNum(){
        let m = this.props.nowNum;
        m = m<=0?0:m-1;
        this.props.changeNum.chanageNum({num:m});
    }


    search(){
        let val = this.refs.search?this.refs.search.value:"";
        if(val){
            let url1 = 'http://suggestion.baidu.com/su';
            let baiduParams = {
                wd:val,
                json:1,
                p:3,
                sid: "1422_21092_20929",
                req:2,
                csor:2,
                pwd:val,
                _:"1520938292967"
            };
            let options = {
                param: 'cb', //此参数来源jsonp接口具体参数
                prefix: 'kobe'
            };
            jsonp(url1,baiduParams, options)
            .then(res=>{
                this.props.changeNum.httpGet({ list:  res.s});
            })
        }else{
            this.props.changeNum.httpGet({ list:  []});
        }
    }
}

function mapStateToProps(state){
    return{
        nowNum : state.change_num.num
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeNum : bindActionCreators(numAction,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)