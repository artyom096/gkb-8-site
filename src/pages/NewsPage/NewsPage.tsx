import classes from './NewsPage.module.scss';
import React from 'react';

export const NewsPage: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<h4>Новости</h4>
			<div className={classes.newsBlock}>
				<div className={classes.newsItem}>
					<img
						src="https://lh3.googleusercontent.com/proxy/0e6w_GNSPFIh2Ju_Mx_Bt4PaAyrDKqaacCxZ7GxNv-AmODyBq_IDekQbZIvinu4B46WMuUr3Pr7Y6xmz56998cyifqxSZq-OEaOHnnHbKMOzkdkv7PkUD2wiU4L9dFxgJ2WkcrewTBS8IpIL2Hkguem69S8FEcdr1leXwf_e5u_j_IfwtXBK62Cm40k7ZspQeSw"
						alt="Новость1"
					/>
					<div className={classes.title}>
						<div className={classes.date}>
							24 <p>апр</p>
						</div>
						<h2>Завершены ремонтные работы в приемном отделении</h2>
					</div>
					<p>
						При реорганизации учтены современные требования, стандарты работы и принцип “врач к пациенту”.
						Теперь не пациент идет к врачу, а врачи приходят к пациентам, которые ждут осмотра на комфортных
						кроватях в специально оборудованных смотровых залах.
					</p>
				</div>
				<div className={classes.newsItem}>
					<img src="https://gkbe.ru/wp-content/uploads/2020/12/novyy-god-2020-890x400.jpg" alt="Новость2" />
					<div className={classes.title}>
						<div className={classes.date}>
							30 <p>дек</p>
						</div>
						<h2>Новогодний график работы ГКБ №8 им. А.Ю. Ратнера</h2>
					</div>
					<p>График работы ГКБ №8 им. А.Ю. Ратнера в период с 31 декабря 2020 года по 10 января 2021 года.</p>
				</div>
				<div className={classes.newsItem}>
					<img
						src="https://gkbe.ru/wp-content/uploads/2020/06/WhatsApp-Image-2020-06-17-at-09.19.44-890x400.jpeg"
						alt="Новость3"
					/>
					<div className={classes.title}>
						<div className={classes.date}>
							7 <p>апр</p>
						</div>
						<h2>Как превратиться из "совы" в "жаворонка"</h2>
					</div>
					<p>
						Вы вместе со своим организмом можете друг другу помочь! Измените свой циркадный ритм на чуть
						более подходящий для Вашего графика и организм обязательно подарит Вам взамен бодрость и хорошее
						настроение даже в самые ранние часы
					</p>
				</div>
				<div className={classes.newsItem}>
					<img
						src="https://gkbe.ru/wp-content/uploads/2020/06/1585045196general_pages_24_march_2020_i84067_s_25_marta_mfc_v_saratovskoi-890x400.jpg"
						alt="Новость4"
					/>
					<div className={classes.title}>
						<div className={classes.date}>
							1 <p>апр</p>
						</div>
						<h2>Сотрудники МФЦ возвращаются в роддом</h2>
					</div>
					<p>
						Вот и первые результаты послаблений противоэпидемических ограничений! С сегодняшнего дня
						получить свидетельство о рождении малыша вновь можно прямо в стенах нашего родильного дома! ⠀
						Как и прежде, в первый день после родов к каждой маме будут подходить сотрудники МФЦ при
						роддоме. Они помогут заполнить нужные документы и ответят на все вопросы.
					</p>
				</div>
			</div>
		</div>
	);
};
