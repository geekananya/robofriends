import React from 'react';

const Scroll = (propss)=>{
    return (
        <div style={{overflowY: 'scroll',  
                    border: "2px solid black transparent transparent transparent", 
                    height: "75vh",
                    }}>
            {propss.children}
        </div>
    )
}

export default Scroll;