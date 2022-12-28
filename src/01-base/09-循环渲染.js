import React, {Component} from 'react';

class App extends Component {
    state = {
        list: [{id: 1, text: 'aaa'},
            {id: 2, text: 'bbb'},
            {id: 3, text: 'ccc'}]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item =>
                            <li key={item.id}>{item.text}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default App;