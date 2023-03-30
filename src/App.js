import React, { Component, Fragment } from "react";
import { Button, Space, message, ConfigProvider } from 'antd';//引用antd
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";//引用路由
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

class App extends Component {

    render(){
        return( 
        <BrowserRouter>
            <Routes>
                <Route path="/login" Component={Login} />
                <Route path="/" Component={Admin} />
            </Routes>
        </BrowserRouter>
        )
    }

    // //提示框 
    // handleClick = () => {
    //     message.success('成功了！！！！');
    // }

    // render() {
    //     return (
    //         <Fragment>
    //             <ConfigProvider
    //                 theme={{
    //                     token: {
    //                         colorPrimary: '#00b96b', //自定义主题颜色
    //                     },
    //                 }}
    //             >
    //                 <Button type="primary" onClick={this.handleClick}>
    //                     按钮
    //                 </Button>
    //             </ConfigProvider>
    //         </Fragment>
    //     )
    // }
}
export default App