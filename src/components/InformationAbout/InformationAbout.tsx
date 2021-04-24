import React from 'react';
import classes from './InformationAbout.module.scss';

export const InformationAbout = () => {
	return (
		<div className={classes.main}>
			<div className={classes.wrapper}>
				<div className={classes.item}>
					<div className={classes.spanIcon}>
						<span className="material-icons">watch_later</span>
					</div>
					<h3>24/7</h3>
					<p>ЕЖЕДНЕВНО И КРУГЛОСУТОЧНО</p>
					<span>Мы работаем для Вас каждый день без перерывов, праздников и выходных</span>
				</div>
				<div className={classes.item}>
					<div className={classes.spanIcon}>
						<span className="material-icons">home</span>
					</div>
					<h3>550 000</h3>
					<p>КОНСУЛЬТАЦИЙ</p>
					<span>Ежегодно осуществляют специалисты амбулаторных служб ГКБ №8 имени А.Ю. Ратнера</span>
				</div>
				<div className={classes.item}>
					<div className={classes.spanIcon}>
						<span className="material-icons">people</span>
					</div>
					<h3>82 000</h3>
					<p>ПАЦИЕНТОВ</p>
					<span>Ежегодно получают стационарную специализированную помощь в нашей больнице</span>
				</div>
				<div className={classes.item}>
					<div className={classes.spanIcon}>
						<span className="material-icons">medical_services</span>
					</div>
					<h3>33 500</h3>
					<p>ОПЕРАЦИЙ</p>
					<span>Ежегодно выполняется нашими высококвалифицированными хирургами</span>
				</div>
			</div>
		</div>
	);
};
