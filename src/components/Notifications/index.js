import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import {
	Container,
	Badge,
	NotificationList,
	Notification,
	Scroll
} from './styles';

import { formatDistance } from 'date-fns/esm';

export default function Notifications() {
	const [visible, setVisible] = useState(false);
	const [notifications, setNotifications] = useState([]);

	const hasUnread = useMemo(
		() => !!notifications.find(notification => notification.read === false),
		[notifications]
	);

	useEffect(() => {
		async function loadNotifications() {
			const response = await api.get('notifications');

			const data = response.data.map(notification => ({
				...notification,
				timeDistance: formatDistance(
					parseISO(notification.createdAt),
					new Date(),
					{ addSuffix: true, locale: pt }
				)
			}));

			setNotifications(data);
		}

		loadNotifications();
	}, []);

	function handleNotificationVisibility() {
		setVisible(!visible);
	}

	async function markAsRead(id) {
		await api.put(`notifications/${id}`);

		setNotifications(
			notifications.map(notification =>
				notification._id === id
					? { ...notification, read: true }
					: notification
			)
		);
	}

	return (
		<Container>
			<Badge onClick={handleNotificationVisibility} hasUnread={hasUnread}>
				<MdNotifications color="#7159c1" size={20} />
			</Badge>

			<NotificationList visible={visible}>
				<Scroll>
					{notifications.map(notification => (
						<Notification
							id={notification._id}
							unread={!notification.read}
						>
							<p>{notification.content}</p>
							<time>{notification.timeDistance}</time>
							{!notification.read && (
								<button
									type="button"
									onClick={() => {
										markAsRead(notification._id);
									}}
								>
									Marcar como lida
								</button>
							)}
						</Notification>
					))}
				</Scroll>
			</NotificationList>
		</Container>
	);
}
