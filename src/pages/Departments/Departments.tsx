import classes from './Departments.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Departments: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<h4>Отделения</h4>
			<div className={classes.departments}>
				<div className={classes.item}>
					<img src="https://cdn.dvinanews.ru/gmf3gcmm/p6gc.jpg" alt="Дневной стационар" />
					<div className={classes.title}>
						<p>Отделение дневного стационара</p>
					</div>
					<div className={classes.subtitle}>
						Возможность получения помощи вне постоянного пребывания в стенах больницы.
						Кризисное-психиатрическое отделение работает в санаторном режиме (режим открытых дверей) и может
						принять больных, не нуждающихся в медицинской изоляции...
					</div>
					<button>
						<NavLink to="/">Подробнее</NavLink>
					</button>
				</div>
				<div className={classes.item}>
					<img src="https://kor.ill.in.ua/m/610x385/2229787.jpg" alt="Приемное отделение" />
					<div className={classes.title}>
						<p>Приемное отделение</p>
					</div>
					<div className={classes.subtitle}>
						Приемное отделение больницы — это особая структура, особенная каста врачей, медсестер и младшего
						медицинского персонала. У истоков методики работы всех приемных отделений скоропомщных больниц
						всего Мира стояли легендарные российские…
					</div>
					<button>
						<NavLink to="/">Подробнее</NavLink>
					</button>
				</div>
				<div className={classes.item}>
					<img
						src="https://lh3.googleusercontent.com/proxy/xs0NYlrlpVkxVYj7OjylK-VBXAyaq8a3fojvmUPFm-Uh2I5dv4OvCErRRtMgHNo-_NDNJH9Nt7-7DO0_VOXpaZxpNlr5Nf-OAMMiSDqA368Kemk9im5_OIE"
						alt="Отделение старшего возраста"
					/>
					<div className={classes.title}>
						<p>Отделение старшего возраста</p>
					</div>
					<div className={classes.subtitle}>
						Приемное отделение скоропомощной больницы — это особая структура, особенная каста врачей,
						медсестер и младшего медицинского персонала. У истоков методики работы всех приемных отделений
						скоропомщных больниц всего Мира стояли легендарные российские…
					</div>
					<button>
						<NavLink to="/">Подробнее</NavLink>
					</button>
				</div>
				<div className={classes.item}>
					<img
						src="https://gorod-plus.tv/sites/default/files/styles/article/public/2020-07/zqnaijrcxgi.jpg"
						alt="Отделение младшего возраста"
					/>
					<div className={classes.title}>
						<p>Отделение младшего возраста</p>
					</div>
					<div className={classes.subtitle}>
						В отделении выполняется широкий спектр диагностических, лечебных и оперативных вмешательств.
						Отделение оснащено видеоэндосокпической аппаратурой с возможностью фиксации изображения и
						последующей консультации и консилиума...
					</div>
					<button>
						<NavLink to="/">Подробнее</NavLink>
					</button>
				</div>
				<div className={classes.item}>
					<img
						src="https://www.gluvexlab.com/uploads/filestorage/menu/elements/menu-87.jpg"
						alt="Консультативно-диагностический центр"
					/>
					<div className={classes.title}>
						<p>Консультативно-диагностический центр</p>
					</div>
					<div className={classes.subtitle}>
						В 2005 году в больнице было открыто новое отделение – консультативно-диагностическое. В
						настоящее время в составе больницы функционирует Консультативно-диагностический центр (КДЦ)...
					</div>
					<button>
						<NavLink to="/">Подробнее</NavLink>
					</button>
				</div>
			</div>
		</div>
	);
};
