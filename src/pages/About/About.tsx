import classes from './About.module.scss';
import React from 'react';
import { Orders } from '../../components/Orders/Orders';
import { OurDoctors } from '../../components/OurDoctors/OurDoctors';

export const About: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<h4>О больнице</h4>
			<div className={classes.mainBlock}>
				<img
					src="https://lh3.googleusercontent.com/proxy/7oO9Gs_84AWASPld6nTNsKemxmTqEc-ouhNbZMJ7NIEMccm7-L9l6bn1ZCGNOp-W1tTKix_FOSe5fqFWvyHkU8OeXijTMIMHLRUa"
					alt="Персонал больницы"
				/>
				<p>
					Государственное автономное учреждение здравоохранения «ДЕТСКАЯ ГОРОДСКАЯ БОЛЬНИЦА № 8» имени
					профессора А.Ю. Ратнера - это современный специализированный стационар для детей до 17 лет 11 мес.
					29 дней.
				</p>
				<p>
					Больница является базой кафедры детской неврологии Казанской медицинской академии последипломного
					образования. Заведующий кафедрой – доктор медицинских наук, профессор Прусаков В.Ф.
				</p>
				<p>
					Ежедневно, круглосуточно мы оказываем специализированную высококвалифицированную плановую и
					неотложную стационарную и амбулаторную медицинскую помощь детям с заболеваниями нервной системы,
					психологическую помощь и поддержку их родителям, реабилитацию детям с заболеваниями нервной системы.
					Направления деятельности нашей больницы: - Диагностика заболеваний нервной системы у детей -
					Стационарное лечение заболеваний нервной системы у детей - Реабилитация детей грудного и раннего
					возраста, страдающих заболеваниями нервной системы - Диагностика и лечение эпилепсии у детей -
					Консультативная, диагностическая неврологическая помощь амбулаторным пациентам - Реабилитация детей
					с неврологическими заболеваниями
				</p>
				<p>
					Наша основная цель - оказание специализированной, высококвалифицированной медицинской помощи детям с
					заболеваниями нервной системы, формирование у наших пациентов чувства уверенности в завтрашнем дне.
					Больница представляет собой уникальное объединение стационара круглосуточного пребывания (59 коек
					для детей с 2 месяцев до 7 лет, 59 коек для детей с 7 до 15 лет), стационара дневного пребывания для
					подростков с 15 до 17 лет на 34 койки, консультативной детской неврологической поликлиники.
				</p>
				<p>
					Больница оснащена современным диагностическим оборудованием по профилю оказываемой медицинской
					помощи в соответствии с Лицензией на медицинскую деятельность. "Мы защищаем интересы пациентов и
					благодарны законным представителям наших пациентов за то, что они обратились именно в нашу клинику и
					позволили позаботиться о здоровье их детей. Мы рады видеть Вас на нашем сайте в Интернете." С
					уважением, главный врач ДГБ № 8, к.м.н., ассистент кафедры детской неврологии КГМА Зайкова Фания
					Мансуровна
				</p>
			</div>
			<div className={classes.ordersBlock}>
				<Orders />
			</div>
			<OurDoctors />
		</div>
	);
};
