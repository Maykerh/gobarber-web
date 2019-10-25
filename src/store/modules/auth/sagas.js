import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
	try {
		const { email, password } = payload;

		const response = yield call(api.post, 'sessions', {
			email,
			password
		});

		const { token, user } = response.data;

		if (!user.provider) {
			toast.error('Usuário não é prestador');

			return;
		}
		console.tron.log('passou');
		console.log(api.defaults);
		api.defaults.headers.Authorization = `Bearer ${token}`;
		console.tron.log('passou 2');

		yield put(signInSuccess(token, user));

		history.push('/dashboard');
	} catch (err) {
		console.tron.log(err);
		toast.error('Falha na autenticação');
		yield put(signFailure());
	}
}

export function* signUp({ payload }) {
	try {
		const { name, email, password } = payload;

		yield call(api.post, 'users', {
			name,
			email,
			password,
			provider: true
		});

		history.push('/');
	} catch (err) {
		toast.err('Falha no cadastro');

		yield put(signFailure());
	}
}

export function setToken({ payload }) {
	if (!payload) return;

	const { token } = payload.auth;

	if (token) {
		api.defaults.headers.Authorization = `Bearer ${token}`;
	}
}

export default all([
	takeLatest('persist/REHYDRATE', setToken),
	takeLatest('@auth/SIGN_IN_REQUEST', signIn),
	takeLatest('@auth/SIGN_UP_REQUEST', signUp)
]);
