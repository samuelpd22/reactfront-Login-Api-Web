function Login(){
    return (
        <div className='login-form-wrap'>
            <h2>Login</h2>
            <form className='login-form'>
                <input type='email' name='email' placeholder='Email' required/>
                <input type='password' name='password' placeholder='Senha' required/>
                <button className='btn-login' type='submit'>Login</button>
            </form>
        </div>
    )
}
export default Login;