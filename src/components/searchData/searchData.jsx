import React from  'react';
import { connect } from 'react-redux'
import { List } from 'antd';
import './style.less'


class SearchData extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className={this.props.list.length>0 ? '' : 'hide'}>
                <List
                    header={<div>搜索结果</div>}
                    bordered
                    dataSource={this.props.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }

    componentDidMount(){
        console.log(this.props);
    }

}

function mapStateToProps(state) {
    return {
        list: state.getHttpInfo.list,
        num:state.change_num.num
    }
}

export default connect(mapStateToProps)(SearchData) ;