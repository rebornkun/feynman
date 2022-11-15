import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import TopicBox from '../../Components/TopicBox/TopicBox';
import { UserContext } from '../../Components/UserContext';
import './Dashboard.css'

const Dashboard = () => {

    const { user } = useContext(UserContext)

    let userTopics = user.topics
    
    return (
        <div className="dashboard">
            <div className="dashboard_container">
                <h1 className='welcome'>Welcome {`${user.name}`}</h1>
                { userTopics.length ? 
                    <div className='topics_containers'>
                        <TopicBox />
                    </div>
                    :
                    <div>no topics</div>
                }
            </div>
            <div className="add_button">
            </div>
        </div>
    );
}

export default Dashboard;