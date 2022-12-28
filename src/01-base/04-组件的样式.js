import React, {Component} from 'react';

import './css/01-index.css'//导入css模块
class App extends Component {
    render() {
        const myname = '张三'
        const obj = {
            backgroundColor:'yellow',
            fontSize:'30px'
        }
        return (
            <div>
                {10+20}===>{myname}
                <div style={obj}>111111111</div>
                <div style={{background:'red'}}>111111111</div>
                <div className="active">3133333</div>
            </div>
        );
    }
}

export default App;