import React,{ Component, Fragment } from 'react'
import {Link} from 'dva/router'
import Child from '../components/child'

class UserPage extends Component{
    handleToIndex() {
        // console.log(this.props);
        this.props.history.push('/')
    }
    render(){
        return (
            <Fragment>
                <div>我是用户页</div>
                <Link to='/'>首页</Link>
                <button onClick={this.handleToIndex.bind(this)}>首页</button>
                <Child/>
            </Fragment>
           
        )
    }
}

export default UserPage