import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    doSearch = (e) => {
        this.setState({
            term: e.target.value
        });
        this.props.setTerm(e.target.value);
    }
    
    render() {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onInput={this.doSearch}/>
        )
    }
}

export default SearchPanel;