import React from  'react';
import { connect } from 'react-redux'
import './style.less'


class SearchData extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <ul>
                {
                    this.props.list.length?this.props.list.map((val,index)=>{
                        return <li key={'s'+index}> { val }</li>
                    }) : null
                }
            </ul>
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