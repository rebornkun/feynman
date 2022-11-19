import { useEffect, useRef, useState } from 'react'
import './Text.css'

const Text = () => {

    const [color, setColor] = useState('black')
    const [display, setDisplay] = useState('hidden')
    const colorbox = useRef()

    useEffect(()=>{

    },[color])

    let state = 'black'
    const understood = ()=>{
        setColor('blue')
    }
    const somewhatUnderstood = ()=>{
        setColor('green')
    }
    const notClear = ()=>{
        setColor('yellow')
    }
    const whatRubbish = ()=>{
        setColor('red')
    }

    const openColorBox = () => {
        // let colorBox = document.getElementById('cb')
        // console.log(colorbox.current)
        if(display === 'hidden'){
            colorbox.current.style.display = 'flex'
            setDisplay('show')
        }else{
            colorbox.current.style.display = 'none'
            setDisplay('hidden')
        }
    }

    return (
        <>
        <div ref={colorbox} id='cb' className={`colorbox ${display}`}>
            <p onClick={understood}>UNDERSTOOD</p>
            <p onClick={somewhatUnderstood}>SOMEWHAT UNDERSTOOD</p>
            <p onClick={notClear}>NOT CLEAR</p>
            <p onClick={whatRubbish}>WHAT RUBBISH</p>
        </div>
        <span id='text' className='text' onClick={openColorBox} >
            <span className={`p ${color}`}>deeffffffffffffffffffffffffffffffffffffffffre</span>
        </span>
        </>
    );
}

export default Text;