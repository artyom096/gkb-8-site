import classes from './Header.module.scss';
import React from 'react';

export const Header = () => {
	return (
		<div className={classes.wrapper}>
			<div>
				<img src="http://www.detbol8.ru/images/logo.png" />
			</div>
			<div className={classes.headerRight}>
				<div className={classes.time}>
					<span className="material-icons">settings_phone</span>
					<p>
						<b>+7 (499) 273-47-77</b>
						<br />c 8:00 до 20:00
					</p>
				</div>
				<div className={classes.location}>
					<span className="material-icons">room</span>
					<p>
						г. Казань,
						<br></br>
						ул. Бари Галеева, д.11
					</p>
				</div>
				<div className={classes.location}>
					<span className="material-icons">watch_later</span>
					<p>
						Ежедневно
						<br></br>и круглосуточно
					</p>
				</div>
				<img
					className={classes.imgSearch}
					src="//inozemtcev.ru/wp-content/themes/inozemcev/css/../img/s-icon.png"
				/>
			</div>
		</div>
	);
};
