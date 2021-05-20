import React from 'react'

const Image = (props) => {
    const s  = `https://source.unsplash.com/500x350/?${props.name}`;
    return (
        <>
            <div style={{textAlign:"center"}}>
                <img src={s} alt="search"/>
            </div>
        </>
    )
}

export default Image;
