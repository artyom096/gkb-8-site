import classes from './Nav.module.scss';
import React from 'react';
import { Switch } from 'react-router';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
	return (
		<Switch>
			<nav className={classes.wrapper}>
				<ul className={classes.list}>
					<li>
						<NavLink to="/">Главная</NavLink>
					</li>
					<li>
						<NavLink to="/about">О больнице</NavLink>
						<ul className={classes.listHiddenAbout}>
							<li>
								<NavLink to="/story">История больницы</NavLink>
							</li>
							<li>
								<NavLink to="/education">Кафедра детской неврологии</NavLink>
							</li>
							<li>
								<NavLink to="/documents">Юридические документы</NavLink>
							</li>
							<li>
								<NavLink to="/news">Новости</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink to="/information">Пациентам</NavLink>
						<ul className={classes.listHiddenClients}>
							<li>
								<NavLink to="/information">Информация</NavLink>
							</li>
							<li>
								<NavLink to="/articles">Статьи</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink to="/departments">Отделения</NavLink>
						<ul className={classes.listHiddenOrders}>
							<li>
								<NavLink to="/olderDepartment">Отделение старшего возраста</NavLink>
							</li>
							<li>
								<NavLink to="/juniorDepartment">Отделение младшего возраста</NavLink>
							</li>
							<li>
								<NavLink to="/laboratory">Лаборатория</NavLink>
							</li>
							<li>
								<NavLink to="/day">Дневной стационар</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink to="/paidServices">Платные услуги</NavLink>
					</li>
					<li>
						<NavLink to="/faq">Вопросы и ответы</NavLink>
					</li>
					<li>
						<NavLink to="/contacts">Контакты</NavLink>
					</li>
				</ul>
			</nav>
		</Switch>
	);
};
