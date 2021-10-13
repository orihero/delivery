import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './routes/AppRouter';
import { store } from './store/configureStore';

function App() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

export default App;
