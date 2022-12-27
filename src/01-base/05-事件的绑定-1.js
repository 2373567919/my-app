import React, {Component} from 'react';

class App extends Component {
    str = "你好"

    render() {
        return (
            <div>
                <input/>
                <button onClick={() => console.log("add1", this.str)}>add1</button>
                <button onClick={this.onClick2.bind(this)}>add2</button>
                <button onClick={this.onClick3}>add3</button>
                <button onClick={() => this.onClick4()}>add4</button>
            </div>
        );
    }

    onClick2() {
        console.log("add2", this.str)
    }

    onClick3 = () => {
        console.log("add3", this.str)
    }

    onClick4() {
        console.log("add4", this.str)
    }
}

export default App;