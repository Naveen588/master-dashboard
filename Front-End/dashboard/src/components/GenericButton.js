import react from 'react'

const GenericButton=(props)=>{

    return(
        <input type={props.type} value={props.value} />
    )
}

export default GenericButton