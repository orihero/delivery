import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AuthRoute from '../components/general/AuthRoute';
import Header from '../components/navigation/Header';
import SideBar from '../components/navigation/SideBar';
import Dashboard from '../screens/dashboard/dashboard';
import Edit from '../screens/edit/Edit';
import LoginScreen from '../screens/login/LoginScreen';
import Register from '../screens/register/register';
import Shop from '../screens/shop/shop';
import '../screens/shop/shop.css';
import AddRestaurant from '../screens/add-restaurant/AddRestarant';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, userLoggedIn } from '../store/slices/user-slice';

function AppRouter() {
	let dispatch = useDispatch();
	let user = useSelector(selectUser);
	let str = localStorage.getItem('user');
	let parsedUser = JSON.parse(str);
	if ((!user || !user.token) && parsedUser !== null) {
		dispatch(userLoggedIn(parsedUser));
	}
	let authed = false;
	if (Object.keys(user).length > 0) {
		authed = true;
	}
	console.log({ authed });
	return (
		<BrowserRouter>
			<Switch>
				{!authed ? (
					<>
						<Route
							exact
							path='/'
							render={() => <Redirect to='/login' />}
						/>
						<Route path='/login' component={LoginScreen} />
						<Route path='/register' component={Register} />
					</>
				) : (
					<>
						<div className='container'>
							<SideBar />
							<div className='content'>
								<Header />
								<Route
									exact
									path='/'
									render={() => <Redirect to='/dashboard' />}
								/>
								<AuthRoute
									path='/dashboard'
									authed={authed}
									component={Dashboard}
								/>
								<AuthRoute
									path='/shop'
									authed={authed}
									component={Shop}
								/>
								<AuthRoute
									path='/restaurant-edit'
									authed={authed}
									component={Edit}
								/>
								<AuthRoute
									path='/add-restaurant'
									authed={authed}
									component={AddRestaurant}
								/>
							</div>
						</div>
					</>
				)}
			</Switch>
		</BrowserRouter>
	);
}

export default AppRouter;
