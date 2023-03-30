import React, { Component, Fragment } from "react";
import { Button, Space, message, ConfigProvider } from 'antd';

class App extends Component {

    //提示框 
    handleClick = () => {
        message.success('成功了！！！！');
    }

    render() {
        return (
            <Fragment>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#00b96b', //自定义主题颜色
                        },
                    }}
                >
                    <Button type="primary" onClick={this.handleClick}>
                        按钮
                    </Button>
                </ConfigProvider>
            </Fragment>
        )
    }
}
export default App