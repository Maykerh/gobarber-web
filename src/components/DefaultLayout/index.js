import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import Header from '../Header';

export default function DefaultLayout({ children }) {
	return (
		<Container>
			<Header />
			{children}
		</Container>
	);
}

DefaultLayout.propTypes = {
	children: PropTypes.array.isRequired
};
