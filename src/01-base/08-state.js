import React, {Component} from 'react';

class App extends Component {
    state = {
        isShow: true
    }

    render() {
        return (
            <div>
                <h1>欢迎来到react开发</h1>
                <button onClick={() => {
                    this.setState({
                        isShow:!this.state.isShow
                    })
                }}>{this.state.isShow?'收藏':'取消收藏'}</button>
            </div>
        );
    }
}

export default App;