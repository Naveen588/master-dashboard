import react from 'react'
import GenericButton from './GenericButton'
import GenericInput from './GenericInput'

const LoginForm=(props)=>{

    return(
        <div>
            <form>
                <GenericInput name="username" type="text" placeholder="Username" /><br/>
                <GenericInput name="password" type="password" placeholder="password" /><br />
                <GenericButton type="button" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm