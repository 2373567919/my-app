import React, {Component, createRef} from 'react';

class App extends Component {
    inputRef = createRef()

    state = {
        list: [
            {id: 0, text: 'aaa'},
            {id: 1, text: 'bbb'},
            {id: 2, text: 'ccc'}
        ]
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef}/>
                <button onClick={this.onClickEvent1}>添加</button>
                {
                    this.state.list.length !== 0 && <ul>{
                        this.state.list.map(item => <li key={item.id}>{item.text}
                            <button onClick={() => this.onClickEvent2(item.id)}>删除</button>
                        </li>)
                    }</ul>
                }
                {
                    this.state.list.length === 0 && <div>暂无待办事项</div>
                }
            </div>
        );
    }

    onClickEvent1 = () => {
        console.log(this.inputRef.current.value)
        let newList = [...this.state.list]
        newList.push({id: this.state.list.length, text: this.inputRef.current.value})
        this.setState({
            list: newList
        })
    }
    onClickEvent2 = id => {
        this.setState({
            list: this.state.list.filter(item => item.id !== id)
        })
    }
}

export default App;