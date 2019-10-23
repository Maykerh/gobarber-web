import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import Header from '../Header';

export default function DefaultLayout(props) {
	return (
		<Container>
			<Header>{props.children}</Header>
		</Container>
	);
}

DefaultLayout.propTypes = {
	children: PropTypes.element.isRequired
};
