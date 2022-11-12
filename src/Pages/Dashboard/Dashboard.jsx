import { useContext } from 'react';
import { UserContext } from '../../Components/UserContext';
import './Dashboard.css'

const Dashboard = () => {

    const { user } = useContext(UserContext)
    
    return (
        <div className="dashboard">
            <div className="dashboard_container">
                <h1>Welcome {`${user.name}`}</h1>
            </div>
        </div>
    );
}

export default Dashboard;