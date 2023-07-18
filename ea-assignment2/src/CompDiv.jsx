import React, { createElement } from "react"

const CompDiv = (componentArray) =>{
    return(
         createElement(
            'div',
            { style: {
                flexDirection: 'row', 
                textAlign: 'left', 
                backgroundColor: "#EEEEFF", 
                width: 400, 
                height: 150,
                borderRadius: 15,
                border: 'none',
                position: 'fixed',
                left: '50%',
                marginLeft: -200,
                padding: 10,
                boxShadow: '5px 5px #615055',
                zIndex: '5'
                }
            },
            componentArray
        )
    )
}

export default CompDiv