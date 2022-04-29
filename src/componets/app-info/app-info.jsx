import './app-info.css';

const AppInfo = ({employersAmount, salaryRise}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employersAmount}</h2>
            <h2>Премию получат: {salaryRise}</h2>
        </div>
    );
}

export default AppInfo;