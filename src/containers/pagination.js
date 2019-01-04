import { Container } from "unstated";

class Pagination extends Container {
    constructor(props) {
        super(props);
        this.state = {
            current: 3
        };
        this.onChange=this.onChange.bind(this);
    }
    onChange(page){
        console.log(page);
        this.setState({
            current: page,
        });
    }
}

export default Pagination;