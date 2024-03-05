import { useState } from 'react'
import axios from 'axios'

function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [erro,setErro] = useState('')
   

    const handleLogin = async (e) => {
        e.preventDefault();
        
        console.log(`${email}, ${password}`)

        try {
            const response = await axios.post('http://localhost:8080/login', { email, password }, {
                headers: { 'Content-Type': 'application/json' }

            
            }
            )    
            
            console.log(response.data); // Exemplo de como lidar com a resposta da API
          
        } catch (error) {
            if(error.response) {
                setErro('Erro ao acessar o servidor')
            } else if(error.response.status === 401){
                setErro('Usuario ou senha invalida')
            }
        }
    }

    

    return (
        <div className='login-form-wrap'>
            <h2>Login</h2>
            <form className='login-form'>
                <input onChange={(e) => setEmail(e.target.value)}type='email' name='email' placeholder='Email' required/>
                <input onChange={(e) => setPassword(e.target.value)} type='password' name='password' placeholder='Senha' required/>
                <button onClick={(e) => handleLogin(e)}className='btn-login' type='submit'>Login</button>
            </form>
            <p>{erro}</p>
        </div>
    )
}
export default Login;