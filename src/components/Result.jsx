import React, {useState} from 'react'
import Image from './Image'

const Result = (props) => {
    const [img, setImg] = useState("")
    const InputEvent = (e) => {
        const data = e.target.value
        console.log(data)
        setImg(data)
    }

    return (
        <>
            <div className="search">
            <input type="text" placeholder="Search..." onChange={InputEvent} value={img}/>
            </div><br/>
            <Image name={img} />
        </>
    )
}

export default Result
