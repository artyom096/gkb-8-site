import classes from './Information.module.scss';
import React from 'react';
import { Documents } from '../Documents/Documents';
import { Articles } from '../Articles/Articles';

export const Information: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<h4>Информация</h4>
			<p>На страницах из списка ниже Вы можете ознакомится с различной полезной информацией для Пациентов.</p>
			<Documents />
			<Articles />
		</div>
	);
};
