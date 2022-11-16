import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopicBox from '../../Components/TopicBox/TopicBox';
import { UserContext } from '../../Components/UserContext';
import FeynmanDataService from '../../services/feynman';
import './Dashboard.css'

const Dashboard = () => {
    
    const { user, setUser } = useContext(UserContext)
    const { id } = useParams()
    console.log(id)

    useEffect(()=>{

        FeynmanDataService.get(id)
        .then((res) => {
            setUser({...user, topics: res.data})
        })

    },[])

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
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M18.8088 9.021C18.3573 9.021 17.7592 9.011 17.0146 9.011C15.1987 9.011 13.7055 7.508 13.7055 5.675V2.459C13.7055 2.206 13.5026 2 13.253 2H7.96363C5.49517 2 3.5 4.026 3.5 6.509V17.284C3.5 19.889 5.59022 22 8.16958 22H16.0453C18.5058 22 20.5 19.987 20.5 17.502V9.471C20.5 9.217 20.298 9.012 20.0465 9.013C19.6247 9.016 19.1168 9.021 18.8088 9.021Z" fill="#130F26"/>
                    <path opacity="0.4" d="M16.0841 2.56729C15.7851 2.25629 15.2631 2.47029 15.2631 2.90129V5.53829C15.2631 6.64429 16.1741 7.55429 17.2791 7.55429C17.9771 7.56229 18.9451 7.56429 19.7671 7.56229C20.1881 7.56129 20.4021 7.05829 20.1101 6.75429C19.0551 5.65729 17.1661 3.69129 16.0841 2.56729Z" fill="#130F26"/>
                    <path d="M14.3673 12.2363H12.6393V10.5093C12.6393 10.0983 12.3063 9.7643 11.8953 9.7643C11.4843 9.7643 11.1503 10.0983 11.1503 10.5093V12.2363H9.42332C9.01232 12.2363 8.67932 12.5703 8.67932 12.9813C8.67932 13.3923 9.01232 13.7263 9.42332 13.7263H11.1503V15.4523C11.1503 15.8633 11.4843 16.1973 11.8953 16.1973C12.3063 16.1973 12.6393 15.8633 12.6393 15.4523V13.7263H14.3673C14.7783 13.7263 15.1123 13.3923 15.1123 12.9813C15.1123 12.5703 14.7783 12.2363 14.3673 12.2363Z" fill="#130F26"/>
                </svg>
            </div>
        </div>
    );
}

//job analyis is a planning tool
// permit is a communication tool

export default Dashboard;