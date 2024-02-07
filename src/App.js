import './App.css';
import logo from './holberton-logo.jpg'
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='' />
        <h1>School dashboard</h1>
      </header>
      <main className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
          <div>
            <label for='email'>Email: </label>
            <input type='email' id='email' name='email' />
          </div>
          <div>
            <label for='password'>Password: </label>
            <input type='password' id='password' name='password' />
          </div>
          <button>OK</button>
        </form>
      </main>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
