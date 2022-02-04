import Login from './views/Login'
import useToken from './server/useToken';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	const { token, setToken } = useToken();

	if (!token) {
		//return <Route path="/login" component={Login(setToken = {setToken})}/>
		return <Login setToken={setToken} />
	}

  return (
	// <Login/>
	<h1>Abobus</h1>
  );
}

export default App;
