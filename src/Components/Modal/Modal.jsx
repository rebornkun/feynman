import { useContext, useEffect } from 'react';
import FeynmanDataService from '../../services/feynman';
import { UserContext } from '../UserContext';
import './Modal.css'

const Modal = () => {

    let modal = document.getElementById('modal')
    let modal_input= document.getElementById('modal_input')
    let modal_text= document.getElementById('modal_text')

    const { currentTopic, setCurrentTopic } = useContext(UserContext)

    const lol = (e) => {
        console.log(e)
    }
    
    console.log('currentTopic: ', currentTopic)

    const exitModal = () => {

        modal.classList.remove('show')
        modal_input.value = ''
        modal_text.value = ''

    }

    const updateTopic = () => {

        let data = {...currentTopic, topic: modal_input.value, text: modal_text.value}
        FeynmanDataService.updateTopic(data)
        .then((response)=>{
            console.log(response)
        })

        exitModal()

    }

    // const update

    return (
        <div id='modal' className="modal_window" onClick={lol}>
            <div className='modal_window_container'>
                <div className="btn exit_button" onClick={exitModal}>
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M16.7039 17.554C16.7039 20.005 14.6441 22 12.1124 22H7.08012C4.55468 22 2.50004 20.01 2.50004 17.564L2.50004 6.448C2.50004 3.996 4.55881 2 7.09045 2H12.1227C14.6482 2 16.7039 3.991 16.7039 6.438V7.378L16.7039 17.554Z" fill="#130F26"/>
                        <path d="M7.9626 12.5462L10.9305 15.4552C11.2373 15.7552 11.7309 15.7552 12.0366 15.4532C12.3413 15.1512 12.3403 14.6642 12.0346 14.3642L10.4095 12.7712L20.7179 12.7712C21.1496 12.7712 21.5 12.4262 21.5 12.0002C21.5 11.5752 21.1496 11.2312 20.7179 11.2312L10.4095 11.2312L12.0346 9.6372C12.3403 9.3372 12.3413 8.8502 12.0366 8.5482C11.8832 8.3972 11.6832 8.3212 11.482 8.3212C11.283 8.3212 11.0829 8.3972 10.9305 8.5462L7.9626 11.4552C7.81533 11.6002 7.73204 11.7962 7.73204 12.0002C7.73204 12.2052 7.81533 12.4012 7.9626 12.5462" fill="#130F26"/>
                    </svg>
                </div>
                <input 
                id='modal_input' className='topic_title_input'/>
                <textarea id='modal_text' className='topic_text_textarea' />
                <div className="btn ok_button" onClick={updateTopic}>
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M16.3402 1.9998H7.67024C4.28024 1.9998 2.00024 4.3798 2.00024 7.9198V16.0898C2.00024 19.6198 4.28024 21.9998 7.67024 21.9998H16.3402C19.7302 21.9998 22.0002 19.6198 22.0002 16.0898V7.9198C22.0002 4.3798 19.7302 1.9998 16.3402 1.9998Z" fill="#130F26"/>
                        <path d="M10.8133 15.2479C10.5893 15.2479 10.3653 15.1629 10.1943 14.9919L7.82132 12.6189C7.47932 12.2769 7.47932 11.7229 7.82132 11.3819C8.16332 11.0399 8.71632 11.0389 9.05832 11.3809L10.8133 13.1359L14.9413 9.0079C15.2833 8.6659 15.8363 8.6659 16.1783 9.0079C16.5203 9.3499 16.5203 9.9039 16.1783 10.2459L11.4323 14.9919C11.2613 15.1629 11.0373 15.2479 10.8133 15.2479Z" fill="#130F26"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Modal;