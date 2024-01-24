import './App.css';
import { useState } from 'react';

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function LoginForm(email) {
  return (
    <form>
      <input type='email' id='inputEmail'></input>
      <input type='submit' id='submitLogin' value='Login' onClick={
        e => {
          e.preventDefault();
          let auth = document.getElementById('inputEmail');
          email = auth;
        }
      }></input>
    </form>
  )
}

function App() {
  let storedEmail = JSON.parse(localStorage.getItem('authentication')) || '';
  let users = JSON.parse(localStorage.getItem('users')) || [];
  if(!!email) {
    return <h1>Pagina principale</h1>
  } else {
    return <LoginForm></LoginForm>
  }
}

export default App;
