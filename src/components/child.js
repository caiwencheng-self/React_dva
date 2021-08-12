import React,{ Fragment } from 'react'
import {withRouter} from 'dva/router'
class Child extends React.Component{
    handlePush() {
        // console.log(this.props);
        this.props.history.push('/')
    }
    render() {
        return (
            <Fragment>
                <div>我是通用组件</div>
                <button onClick={this.handlePush.bind(this)}>首页_child</button>
            </Fragment>
        )
    }
}

export default withRouter(Child)