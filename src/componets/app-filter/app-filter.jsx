import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMethod: 'all'
        }
    }

    setFilterMethod = (e) => {
        this.setState({
            filterMethod: e.target.value
        })
        this.props.setFilterMethod(e.target.value);
    }

    setClass = () => {
        
    }

    render() {
        const filterMethods = ['all', 'onrise', 'bysalary'];
        return (
            <div className="btn-group">
                <button 
                    className={"btn " + (this.state.filterMethod === filterMethods[0]? "btn-light": "btn-outline-light")}
                    type="button"
                    value={filterMethods[0]}
                    onClick={this.setFilterMethod}>
                        Все сотрудники
                </button>
                <button 
                    className={"btn " + (this.state.filterMethod === filterMethods[1]? "btn-light": "btn-outline-light")}
                    type="button"
                    value={filterMethods[1]}
                    onClick={this.setFilterMethod}>
                        На повышение
                </button>
                <button 
                    className={"btn " + (this.state.filterMethod === filterMethods[2]? "btn-light": "btn-outline-light")}
                    type="button"
                    value={filterMethods[2]}
                    onClick={this.setFilterMethod}>
                        Зп больше 1000$
                </button>
            </div>
        );
    }   
}

export default AppFilter;