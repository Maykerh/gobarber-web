import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default class Header extends Component {
	render() {
		return (
			<Container>
				<Content>
					<nav>
						<img src={logo} alt="GoBarber" />
						<Link to="/dashboard">DASHBOARD</Link>
					</nav>

					<aside>
						<Profile>
							<div>
								<strong>Mayke Herbst</strong>
								<Link to="/profile">Meu perfil</Link>
							</div>

							<img
								src="https://api.adorable.io/avatars/50/abott@adorable.png"
								alt=""
							/>
						</Profile>
					</aside>
				</Content>
			</Container>
		);
	}
}
