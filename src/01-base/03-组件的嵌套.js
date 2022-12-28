import React, {Component} from 'react';


class Navbar extends Component {
    render() {
        return <div>navbar</div>;
    }
}

function Swiper() {
    return <div>swiper</div>;
}


const Tabbar = () => <div>tabbar</div>

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Swiper/>
                <Tabbar/>
            </div>
        );
    }
}

export default App;