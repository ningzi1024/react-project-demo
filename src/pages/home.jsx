import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as numAction from '../redux/action/index'
import  SearchData from '../components/searchData/searchData'
import jsonp from '../common/jsonp'
import { Button,Col, Row,Input,List } from 'antd';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.store = this.props.store;
        this.state={
            meList:[]
        };
    }

    render(){
        return(
            <div className="wrap">
                <h1>Home Page !</h1>
                <p>now ,this num is : { this.props.nowNum }</p>
                <div style={{marginTop:"30PX"}}>
                <Row>
                    <Col span={12}><Button type="primary"  onClick={ this.addOnceNum.bind(this) }>计数增加1</Button></Col>
                    <Col span={12}><Button onClick={ this.reduceOneNum.bind(this) }>计数减少1</Button></Col>
                </Row>
                </div>
                <div style={{marginTop:"30PX"}}>
                    <Row>
                        <Col span={20} offset={2}>
                            <label htmlFor="search">
                                <Input id="search" placeholder="输入搜索内容" onChange={ this.search.bind(this) } size="large"/>
                            </label>
                        </Col>
                        <Col span={12} offset={2}>
                            <div>
                                <SearchData/>
                            </div>

                        </Col>
                    </Row>
                </div>

            </div>
        )
    }


    componentDidMount(){
        console.log(this.state.meList);
        this.getDefaultKeyWord()
    }

    getDefaultKeyWord(){
        var k = this.props.keyword;
        if(k){
            document.getElementById('search').value = k;
        }
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
        let val = document.getElementById('search').value;
        // let val = this.refs.search?this.refs.search.value:"";
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
                this.setState({
                    meList:res.s
                });
                this.props.changeNum.httpGet({ list:  res.s});
            })
        }else{
            this.props.changeNum.httpGet({ list:  []});
        }
        this.props.changeNum.setKeyWord({ keyWord:val });
    }
}

function mapStateToProps(state){
    return{
        nowNum : state.change_num.num,
        keyword:state.getHttpInfo.keyWord
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