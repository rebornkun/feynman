import { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import FeynmanDataService from '../../services/feynman'
import Text from '../Text/Text'
import { UserContext } from '../UserContext'
import './TopicBox.css'

const TopicBox = ({ topic, refreshTopics }) => {

    const { user, setUser, currentTopic, setCurrentTopic, modalType, setModalType } = useContext(UserContext)
    const { id } = useParams()
    const location = useLocation()
    const topicDetials = {
        topicId: topic._id,
        userId: topic.userId,
        topic: topic.topic,
        text: topic.text,
        date: topic.date
    }

    useEffect(()=>{
    
    },[])

    const openUpdateTopicModal = () => {

        setModalType('update')
        setCurrentTopic({...topicDetials})
        let modal = document.getElementById('modal')
        let modal_input= document.getElementById('modal_input')
        let modal_text= document.getElementById('modal_text')

        modal.classList.add('show')
        modal_input.value = topic.topic
        modal_text.value = topic.text

    }

    const deleteTopic = async () => {

        let topicId = topicDetials.topicId
        let userId = {user_id: id}
        await FeynmanDataService.deleteTopic(topicId, userId)
        .then(response => console.log(response))

        await refreshTopics()

    }

    return (
        <div className="box">
            <div className='box_container'>
                <div className='topic_title'>
                    <p>{topicDetials.topic}</p>
                    <div className='settings'>
                        <svg onClick={openUpdateTopicModal} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M19.9925 18.9533H14.2982C13.7426 18.9533 13.2908 19.4123 13.2908 19.9766C13.2908 20.5421 13.7426 21 14.2982 21H19.9925C20.548 21 20.9999 20.5421 20.9999 19.9766C20.9999 19.4123 20.548 18.9533 19.9925 18.9533Z" fill="#130F26"/>
                            <path d="M10.309 6.90388L15.7049 11.264C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8345 7.72908 20.8452L4.23696 20.8882C4.05071 20.8904 3.88775 20.7614 3.84542 20.5765L3.05175 17.1258C2.91419 16.4916 3.05175 15.8358 3.45388 15.3306L9.88256 6.95548C9.98627 6.82111 10.1778 6.79746 10.309 6.90388Z" fill="#130F26"/>
                            <path opacity="0.4" d="M18.1205 8.66544L17.0803 9.96401C16.9755 10.0962 16.7872 10.1177 16.657 10.0124C15.3924 8.98901 12.1543 6.36285 11.2559 5.63509C11.1247 5.52759 11.1067 5.33625 11.2125 5.20295L12.2157 3.95706C13.1257 2.78534 14.7131 2.67784 15.9935 3.69906L17.4644 4.87078C18.0676 5.34377 18.4698 5.96726 18.6073 6.62299C18.7661 7.3443 18.5967 8.0527 18.1205 8.66544Z" fill="#130F26"/>
                        </svg>
                        <svg onClick={deleteTopic} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M19.6432 9.48844C19.6432 9.55644 19.1103 16.2972 18.8059 19.1341C18.6152 20.875 17.4929 21.931 15.8094 21.961C14.5159 21.99 13.2497 22 12.0038 22C10.6812 22 9.38766 21.99 8.13209 21.961C6.50501 21.922 5.38171 20.845 5.20082 19.1341C4.88766 16.2872 4.36442 9.55644 4.3547 9.48844C4.34497 9.28344 4.41111 9.08845 4.54532 8.93046C4.67758 8.78446 4.8682 8.69647 5.06855 8.69647H18.9391C19.1385 8.69647 19.3194 8.78446 19.4623 8.93046C19.5956 9.08845 19.6627 9.28344 19.6432 9.48844Z" fill="#130F26"/>
                            <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="#130F26"/>
                        </svg>
                    </div>
                </div>
                <div className='topic_text'>
                    {/* <p>{topicDetials.text}</p> */}
                    <Text />
                    <Text />
                    <Text />
                </div>
            </div>
        </div>
    );
}

export default TopicBox;