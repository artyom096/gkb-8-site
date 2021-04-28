import React from 'react';
import classes from './Documents.module.scss';

export const Documents: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<h4>Документы</h4>
			<div className={classes.links}>
				<a target="_blank" href="http://detbol8.ru/files/downloads/licens.pdf">
					Лицензия на осуществление медицинской деятельности
				</a>
				<a target="_blank" href="http://detbol8.ru/files/downloads/spisok2020.pdf">
					Перечень жизненно необходимых и важнейших лекарственных препаратов на 2021 год
				</a>
				<a target="_blank" href="http://detbol8.ru/files/downloads/pgg_rt_2017.pdf">
					Постановление Правительства РФ от 30.06.1998 N 681 – Об утверждении перечня наркотических средств,
					психотропных веществ и их прекурсоров, подлежащих контролю в Российской Федерации
				</a>
				<a target="_blank" href="https://gkbe.ru/wp-content/uploads/2019/03/Issledovaniya.pdf">
					Подготовка к инструментальным методам исследования
				</a>
				<a target="_blank" href="https://gkbe.ru/wp-content/uploads/2021/03/ROIV_otvety_kovid.pdf">
					Ответы на часто задаваемые вопросы по новой коронавирусной инфекции
				</a>
				<a target="_blank" href="http://detbol8.ru/files/downloads/price.pdf">
					Платные услуги
				</a>
			</div>
		</div>
	);
};
