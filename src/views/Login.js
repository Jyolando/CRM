import '../style/Login.css';
import React, {useState} from 'react'
import PropTypes from 'prop-types'

async function loginUser(credentials) {
	return fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	})
		.then(data => data.json())
}

export default function Login({ setToken }) {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSumbit = async e => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password
		})
		setToken(token);
	}

  return (
    <div className="Login">
	  <h1>Зайти в панель управления</h1>
      <form onSubmit={handleSumbit}>
      <label>
        <input type="text" className="form__input" id="login"
			placeholder="Логин" onChange={e => setUsername(e.target.value)} required/>
		<label for="login" className="form__label">Логин</label>
      </label>
      <label>
        <input type="password" className="form__input" id="pass"
			placeholder="Пароль" onChange={e => setPassword(e.target.value)} required/>
		<label for="pass" className="form__label">Пароль</label>
      </label>
      <div>
        <button className="button-31" type="submit">Вход</button>
      </div>
    </form>
    </div>
  );
}

Login.propTypes = {
	setToken: PropTypes.func.isRequired
}
