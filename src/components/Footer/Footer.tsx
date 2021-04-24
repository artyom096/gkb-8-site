import classes from './Footer.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.about}>
				<h3>О больнице</h3>
				<p>
					Государственное автономное учреждение здравоохранения «ДЕТСКАЯ ГОРОДСКАЯ БОЛЬНИЦА № 8» имени
					профессора А.Ю. Ратнера - это современный специализированный стационар для детей до 17 лет 11 мес.
					29 дней. Больница является базой кафедры детской неврологии Казанской медицинской академии
					последипломного образования. Заведующий кафедрой – доктор медицинских наук, профессор Прусаков В.Ф.
					Ежедневно, круглосуточно мы оказываем специализированную высококвалифицированную плановую и
					неотложную стационарную и амбулаторную медицинскую помощь детям с заболеваниями нервной системы,
					психологическую помощь и поддержку их родителям, реабилитацию детям с заболеваниями нервной системы.
				</p>
				<button>
					<NavLink to="/about">Подробнее</NavLink>
				</button>
			</div>
			<div className={classes.contacts}>
				<h3>Контакты</h3>
				<div className={classes.icons}>
					<span className="material-icons">room</span>
					<p>г.Казань, ул.Бари Галеева, д.11</p>
				</div>
				<div className={classes.icons}>
					<span className="material-icons">settings_phone</span>
					<p>+7 (499) 273-47-77</p>
				</div>
				<div className={classes.icons}>
					<span className="material-icons">mail</span>
					<p>ratner-bolnitsa@mail.com</p>
				</div>
				<div className={classes.icons}>
					<span className="material-icons">watch_later</span>
					<p>Eжедневно и круглосуточно</p>
				</div>
			</div>
		</div>
	);
};
