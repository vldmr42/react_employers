import './employees-list-item.css';

const  EmployeesListItem = (props)=> {

    // onIncrease = () =>{
    //     if(this.state.classNames.includes(' increase')){
    //         this.setState({classNames: this.state.classNames.replace(' increase', '')});
    //     }else{
    //         this.setState({classNames: this.state.classNames + ' increase'});
    //     }
    // }

    // onLike = ()=>{
    //     if(this.state.classNames.includes(' like')){
    //         this.setState({classNames: this.state.classNames.replace(' like', '')});
    //     }else{
    //         this.setState({classNames: this.state.classNames + ' like'});
    //     }
    // }

    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase){
        classNames += ' increase';
    }
    if (rise){
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;