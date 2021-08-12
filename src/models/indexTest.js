import * as apis from '../services/example'

export default{  // 无论reducer方法和effects里面的方法  目的都是为了改state的值
    namespace:'indexTest',
    state:{
        name:'Msea',
        cnodeData:[]
    },
    reducers:{  // 尽量不要再reducer里面写逻辑
        setName(state,playload) {  // state就是上面传过来得state  playload组件就是传过来的值   必须返回一个state,如果不返回的话  是会报错的
            // console.log('run');
            console.log(playload,'playload');
            let _state = JSON.parse(JSON.stringify(state))
            _state.name = playload.data.name
            console.log(state,'state');  // name 已经变化了  可是视图没有更新  原因：动态生成一个新的数据，然后在给它
            return _state
        },
        setCnodeDataAsync(state,playload) {
            let _state = JSON.parse(JSON.stringify(state))
            console.log(playload,'playload');
            _state.cnodeData = playload.data
            return _state
        },
        testPath(state,playload) {
            console.log('你已经进入到了用户页');
            return state
        }
    },
    effects:{ // 处理异步请求
        *setNameAsync({playload},{put, call}) {   // put:里面传一个action  action是一个对象，作用更改state里面的值   call：用来发异步
        yield  put({
                type:'setName', // 直接写入方法名 
                data:{
                    name:'超人强'
                } 
            })
        },
        *testCnode({playload},{put,call}) {
            // console.log(apis.testCnode);  // 发送的是一个函数
         let rel = yield call(apis.testCnode)  // call:第一个参数是api  第二个参数是携带的参数
         console.log(rel,'rel');
         if(rel.data) {
             console.log(rel.data.data,'rel.data.data');
             yield put({
                type:'setCnodeDataAsync',
                data: rel.data.data
             })
         }
        }
    },
    subscriptions:{
        haha({dispatch,history}) {
            // console.log('run');
            history.listen(({pathname}) => {
                if(pathname === '/user') {
                    console.log('用户页');
                    dispatch({
                        type:"testPath",
                        data:{
                            name:'不爱馒头爱米饭'
                        }
                    })
                }
            })
        }
    }
}

