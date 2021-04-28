import classes from './ContactsPage.module.scss';
import React from 'react';

export const ContactsPage: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<h4>Контакты</h4>
			<div className={classes.contacts}>
				<div className={classes.item}>
					<div className={classes.title}>
						<span className="material-icons">room</span>
						<h3>Адрес</h3>
					</div>
					<p>г. Казань, ул. Бари Галеева, д.11</p>
				</div>
				<div className={classes.item}>
					<div className={classes.title}>
						<span className="material-icons">settings_phone</span>
						<h3>Телефон</h3>
					</div>
					<p>+7 (499) 273-47-77</p>
				</div>
				<div className={classes.item}>
					<div className={classes.title}>
						<span className="material-icons">mail</span>
						<h3>E-mail</h3>
					</div>
					<p>ratner-bolnitsa@mail.com</p>
				</div>
			</div>
			<iframe
				src="https://yandex.ru/map-widget/v1/?um=constructor%3A1502dfeeb6e8cbc35747819a1eaa27e6901b902c8abbf9285a982e80c32891f9&amp;source=constructor"
				width="100%"
				height="400"
			></iframe>
		</div>
	);
};
