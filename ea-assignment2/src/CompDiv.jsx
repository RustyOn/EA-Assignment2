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
                border: 'solid',
                position: 'fixed',
                left: '50%',
                marginLeft: -200,
                padding: 10
                }
            },
            componentArray
        )
    )
}

export default CompDiv