import './employers-list.css';
import EmployersListItem from '../employers-list-item/employers-list-item';

const EmployersList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
    const employersList = data.map(elem => {
        const {id, ...itemProps} = elem;
        return (
            <EmployersListItem
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}/>
        )         
    });
    return (
        <ul className="app-list list-group">
            {employersList}
        </ul>
    );
}

export default EmployersList;