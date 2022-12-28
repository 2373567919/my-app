import React, {Component} from 'react';
import axios from "axios";

class Cinema extends Component {
    constructor() {
        super()
        this.state = {
            cinemaList: []
        }
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=510100&ticketFlag=1&k=4786246',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722109651290178110947329"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {

            this.cinemaList = res.data.data.cinemas
            console.log(this.cinemaList)
            this.setState({
                cinemaList: this.cinemaList
            })
        })
    }

    render() {
        return (
            <div>
                <input className="input-01" onInput={this.handleInput}/>
                {
                    this.state.cinemaList.map(item => <dl className="dl-01" key={item.cinemaId}>
                        <dt children="dt-01">{item.name}</dt>
                        <dd className="dd-01">{item.address}</dd>
                    </dl>)
                }
            </div>
        );
    }

    handleInput = event => {
        this.setState({
            cinemaList: this.cinemaList.filter(item =>
                item.name.toUpperCase().includes(event.target.value.toUpperCase())
                || item.address.toUpperCase().includes(event.target.value.toUpperCase())
            )
        })
    }
}

export default Cinema;