import React from 'react'

export default function Bar(props) {

    const style = {...props.styles,height:(props.height)+"px" ,width:(props.width)+"px" }
    
    return (
        <div className="bg-slate-600 w-auto rounded-b-sm " style={style}>
            
        </div>
    )
}
