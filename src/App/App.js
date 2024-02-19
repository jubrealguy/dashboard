import React from 'react';
import './App.css'
import Notification from '../Notifications/Notification'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <React.Fragment>
      <Notification />
      <div className="App">
        <Header />
        <main className='App-body'>
          <Login />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;