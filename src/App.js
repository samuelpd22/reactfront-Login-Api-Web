
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='login-form-wrap'>
        <h2>Login</h2>
        <form className='login-form'>
          <input type='email' name='email' placeholder='Email' required/>
          <input type='password' name='password' placeholder='Senha' required/>
          <button className='btn-login' type='submit'>Login</button>
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;
