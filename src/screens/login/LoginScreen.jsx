import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { requests } from '../../api/requests';
import '../../App.css';

function LoginScreen({ history }) {
	const dispatch = useDispatch();
	let onLoginPress = async () => {
		try {
			let email = document.getElementById('email').value;
			let password = document.getElementById('password').value;
			let res = await requests.auth.login({ email, password });
			if (res.status === 200) {
				//TODO navigate to dashboard
				if (res.data.role !== 'user') {
					alert('You are not allowed to use this website');
					return;
				}
				localStorage.setItem('user', JSON.stringify(res.data));

				history.push('/shop');
			}
		} catch (error) {
			alert('password or username incorrect');
		}
	};

	return (
		<div className='app'>
			<div className='left-side'></div>
			<div className='right-side'>
				<div className='right-inner'>
					<h1>welcome</h1>
					<div className='inputs'>
						<input id='email' type='Email' placeholder='Email' />
						<input
							id='password'
							type='Password'
							placeholder='Password'
						/>
					</div>
					<button onClick={onLoginPress}>Sign in</button>
					<Link className='button' to='/register'>
						Register
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
