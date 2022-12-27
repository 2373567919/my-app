import React, {Component, createRef} from 'react';

class App extends Component {
    my_ref = createRef();

    render() {
        return (
            <div>
                <input ref={this.my_ref}/>
                <button onClick={() => {
                    console.log("add1", this.my_ref.current.value)
                }}>add1
                </button>
            </div>
        );
    }
}

export default App;