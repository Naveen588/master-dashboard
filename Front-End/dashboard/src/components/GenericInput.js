import react from 'react'

const GenericInput=(props)=>{

    return(
        <input name={props.name} type={props.type} placeholder={props.placeholder} />
    )
}

export default GenericInput