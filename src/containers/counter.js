import axios from 'axios';
import { Container } from "unstated";
require('../mock/mockData');

class Counter extends Container {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.reset = this.reset.bind(this);
    }

    add() {
        this.setState({
            count: this.state.count+1
        });
    }

    minus() {
        this.setState({
            count: this.state.count-1
        });
    }

    reset() {
        this.setState({
            count: 0
        });
    }
    getMockInfo(){
        axios
        .get('/api/mockData')
        .then((response)=>{
            console.log("接收到了消息");
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }
}

export default Counter;