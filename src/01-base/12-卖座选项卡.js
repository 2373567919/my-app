import React, {Component} from 'react';
import './css/02-maizuo.css'
import Film from "./maizuocomponent/Film";
import Center from "./maizuocomponent/Center";
import Cinema from "./maizuocomponent/Cinema";

class App extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                {id: 1, text: '电影'},
                {id: 2, text: '影院'},
                {id: 3, text: '我的'}
            ],
            current: 1
        }

    }


    render() {
        return (
            <div>
                {
                    this.which()
                }

                <ul className="ul-01">
                    {
                        this.state.list.map((item, index) =>
                            <li
                                className={this.state.current === index ? "li-01 active" : "li-01"}
                                key={item.id}
                                onClick={() => {
                                    this.handleClick(index)
                                }}>{item.text}</li>
                        )
                    }
                </ul>
            </div>
        );
    }

    handleClick = index => {
        console.log(index)
        this.setState({
            current: index
        })
    }
    which = () => {
        switch (this.state.current) {
            case 0:
                return <Film/>
            case 1:
                return <Cinema/>
            case 2:
                return <Center/>
            default:
                return null
        }
    }
}

export default App;