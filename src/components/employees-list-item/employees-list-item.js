import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            classNames: "list-group-item d-flex justify-content-between",
        }
    }

    onIncrease = () =>{
        if(this.state.classNames.includes(' increase')){
            this.setState({classNames: this.state.classNames.replace(' increase', '')});
        }else{
            this.setState({classNames: this.state.classNames + ' increase'});
        }
    }

    onLike = ()=>{
        if(this.state.classNames.includes(' like')){
            this.setState({classNames: this.state.classNames.replace(' like', '')});
        }else{
            this.setState({classNames: this.state.classNames + ' like'});
        }
    }

    render(){
        const {name, salary} = this.props;

        return (
            <li className={this.state.classNames}>
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;