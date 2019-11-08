import React from 'react';
import './App.css';
import Header from './Components/Header';
import UserForm from './Components/UserForm';
import UserList from './Components/UserList';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
