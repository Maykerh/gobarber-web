import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';

export default function AuthLayout(props) {
	return (
		<Container>
			<Content>{props.children}</Content>
		</Container>
	);
}

AuthLayout.propTypes = {
	children: PropTypes.element.isRequired
};
