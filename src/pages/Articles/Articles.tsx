import classes from './Articles.module.scss';
import React from 'react';

export const Articles: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<h4>Статьи</h4>
			<div className={classes.newsBlock}>
				<div className={classes.newsItem}>
					<img
						src="https://gkbe.ru/wp-content/uploads/2020/02/5377f18c850e91fc3b4a0451f9477940-890x400.jpg"
						alt="Статья1"
					/>
					<div className={classes.title}>
						<div className={classes.date}>
							11 <p>апр</p>
						</div>
						<h2>Как наконец-то начать высыпаться.</h2>
					</div>
					<p>
						Юлий Цезарь советовал ложиться при первых позывах ко сну и спать до упора – независимо от
						времени суток. Правда, в итоге он умер от двадцати трех ножевых ран, так что его компетентность
						в этих вопросах весьма сомнительна. Поэтому советы о том, как гарантированно высыпаться, даже
						если мало спишь, мы взяли из работ Я. Штерна
					</p>
				</div>
				<div className={classes.newsItem}>
					<img
						src="https://gkbe.ru/wp-content/uploads/2019/03/WhatsApp-Image-2019-03-20-at-16.28.43-1-890x400.jpeg"
						alt="Статья2"
					/>
					<div className={classes.title}>
						<div className={classes.date}>
							9 <p>апр</p>
						</div>
						<h2>Когда сосуд наполовину пуст</h2>
					</div>
					<p>
						​В приемное отделение ГКБ имени А.К. Ерамишанцева Департамента здравоохранения г. Москвы
						поступил мужчина А., 59 лет, с признаками острого нарушения мозгового кровообращения в левом
						полушарии головного мозга. Состояние пациента определялось как тяжелое, клиническая картина была
						представлена нарушением речи и слабостью в правых конечностях, по объективной шкале тяжести
						инсульта NIHSS определено 15 баллов.
					</p>
				</div>
				<div className={classes.newsItem}>
					<img
						src="https://gkbe.ru/wp-content/uploads/2018/09/Depositphotos_10583509_l-2015-890x400.jpg"
						alt="Статья3"
					/>
					<div className={classes.title}>
						<div className={classes.date}>
							1 <p>апр</p>
						</div>
						<h2>Тестостерон — король гормонов, гормон королей</h2>
					</div>
					<p>
						Мы начинаем цикл статей об одном из самых таинственных гормонов. А поможет нам в этом, конечно
						же, заведующий эндокринологическим отделением, профессор, доктор медицинских наук, Леонид
						Юльевич Моргунов. «Наука о мужском здоровье зародилась не сразу. Первые камни в основу этой
						науки положили эскулапы древности
					</p>
				</div>
				<div className={classes.newsItem}>
					<img
						src="https://gkbe.ru/wp-content/uploads/2018/08/2018-08-30_13-44-23-890x400.png"
						alt="Статья4"
					/>
					<div className={classes.title}>
						<div className={classes.date}>
							20 <p>марта</p>
						</div>
						<h2>Что такое пренатальный скрининг?</h2>
					</div>
					<p>
						ВПренатальный скрининг («пренатальный» означает «дородовый», «скрининг» — «просеивание») – это
						способ диагностики, в ходе которого применяются различные тесты и осуществляются
						инструментальные исследования. Обследование проводится на определенных сроках беременности.
						Такой комплекс позволяет выявить серьезные отклонения в развитии плода, хромосомные нарушения и
						врожденные пороки.
					</p>
				</div>
			</div>
		</div>
	);
};
