import './App.css';
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import { CREATE_USER } from './graphql/mutations';

const App = () => {
  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://66388bc64253a866a24e2f2c.mockapi.io/api/v2/Users', CREATE_USER(data));
      const newUser = await response.json();
      console.log(newUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <RegistrationForm onSubmit={onSubmit} />
    </div>
  );
};


export default App;
