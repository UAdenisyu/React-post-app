import './employers-add-form.css';
import {Component} from 'react';

class EmployersAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    } 

    render() {
        const {name, salary} = this.state;
        const {onAdd} = this.props;

        return(
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onValueChanged}
                        name="name"
                        value={name}/>
                    <input 
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Зп в $?"
                        onChange={this.onValueChanged}
                        name="salary"
                        value={salary}/>
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={e => {
                                e.preventDefault();
                                return onAdd(name, salary)
                            }}>
                        Добавить
                    </button>
                </form>
            </div>
        );
    };

}

export default EmployersAddForm;