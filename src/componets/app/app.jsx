import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import { v4 as uuid } from 'uuid';
import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'Neo', salary: '800', marked: true, liked: false, id: uuid()},
                {name: 'Triniti', salary: '1500', marked: false, liked: true, id: uuid()}, 
                {name: 'Mr. Smith', salary: '4000', marked: false, liked: false, id: uuid()}
            ],
            term: '',
            filterMethod: 'all'
        }
    }

    deleteItem = (itemId) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== itemId)
            }
        });
    }

    addItem = (name, salary) => {
        if(name !== '' && salary !== ''){
            const newItem = {
                name: name,
                salary: salary,
                marked: false,
                liked: false,
                id: uuid()
            }
            this.setState(({data}) => {
                return {
                    data: [...data, newItem]
                }
            });
        }
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, marked: !old.marked};
            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newData
            }
        })
    }

    onToggleRise = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, liked: !old.liked};
            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newData
            }
        })
    }

    searchEmployer = (items, term) => {
        let newList = items;
        //filter by method
        if(this.state.filterMethod === 'onrise'){
            newList = newList.filter(item => item.marked === true);
        }
        else if(this.state.filterMethod === 'bysalary'){
            newList = newList.filter(item => item.salary > 1000);
        }
        //filter by value
        if (term.length === 0){
            return newList
        }
        return newList.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    setTerm = (term) => {
        this.setState({term});
    }

    setFilterMethod = (method) => {
        this.setState({
            filterMethod: method
        })
    }

    render() {
        const { data, term } = this.state;
        const employersAmount = data.length;
        const salaryRise = data.filter(employer => employer.marked === true).length;
        const visibleData = this.searchEmployer(data, term);
        return (
            <div className="app">
                <AppInfo
                    employersAmount={employersAmount}
                    salaryRise={salaryRise}/>
                <div className="search-panel">
                    <SearchPanel
                        setTerm={this.setTerm}/>
                    <AppFilter
                        setFilterMethod={this.setFilterMethod}/>
                </div>
                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }

}

export default App;