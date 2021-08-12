import React,{Component} from 'react';
import { connect } from 'dva'
// 引入接口
import * as apis from '../services/example'


class IndexPage extends Component{
  componentDidMount() {
    apis.testCnode()
    .then(res => {
      console.log(res,'res');
    })
    // 测试mock数据
    apis.mockData()
    .then((res) => {
      console.log(res,'mock --- res');
    })
  }
  handleSetName() {
    console.log(this.props); // this.props里面有一个dispatch方法
    this.props.dispatch({  // dispatch 里面应该传入一个对象
      type:'indexTest/setName',    // type的值是必传的  dva和redux调dispatch是有一些区别的  dva 里面有一个规律： 1.首先拿到命名空间加上/在加上方法名
      data:{
        name:'猪猪侠'
      }
    })
  }
  handleSetNameAsync() { // 调佣effect里面的函数
    this.props.dispatch({
      type:'indexTest/setNameAsync',  // 写法更reduxers差不多
      data:{
        name:'猪猪侠'
      }
    })
  }
  handleTestCnode() { // 调用接口应用的函数
    this.props.dispatch({
      type:'indexTest/testCnode',
      data:{
        name:'钢铁侠'
      }
    })
  }
  render() {
    console.log(this.props,'props');
    return (
      <div>
        我是首页
        {this.props.msg}
        {this.props.name}
        {/* reducers知识点按钮 */}
        <button onClick={this.handleSetName.bind(this)}>setName</button>
        {/* effect知识点按钮 */}
        <button onClick={this.handleSetNameAsync.bind(this)}>异步更改setName</button>
        <button onClick={this.handleTestCnode.bind(this)}>调用接口</button>
      </div>
    )
  }
}
const mapStateProps = state => {
  console.log(state,'state');
  return {
    msg:'我爱北京天安门',
    name: state.indexTest.name,
    cnodeData: state.indexTest.cnodeData
  }
}
export default connect(mapStateProps)(IndexPage)
 