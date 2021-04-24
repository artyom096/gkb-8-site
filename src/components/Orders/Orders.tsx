import React from 'react';
import classes from './Orders.module.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export const Orders: React.FC = () => {
	const responsiveOwl = {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 3,
		},
	};
	return (
		<div className={classes.title}>
			<h3>ОТДЕЛЕНИЯ</h3>
			<OwlCarousel
				items={4}
				loop
				dots={false}
				autoplay={true}
				className={`owl-theme ${classes.slider}`}
				margin={30}
				responsive={responsiveOwl}
			>
				<div className={classes.cart}>
					<img
						src="http://new-retail.ru/upload/iblock/641/6416c7bd334fd1eb3a6f2cef35663166.jpg"
						alt="photo1"
					/>
					<div className={classes.subtitle}>
						<div className={classes.inner__subtitle}>
							<b>Отделение старшего возраста</b>
							<br />
							<p>
								Приемное отделение скоропомощной больницы — это особая структура, особенная каста
								врачей, медсестер и младшего медицинского персонала. У истоков методики работы всех
								приемных отделений скоропомщных больниц всего Мира стояли легендарные российские…
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className={classes.cart}>
						<img
							src="https://www.unicef.org/kazakhstan/sites/unicef.org.kazakhstan/files/styles/hero_mobile/public/2018-08/VS_7.jpg?itok=d1XYryQY"
							alt="photo2"
						/>
						<div className={classes.subtitle}>
							<div className={classes.inner__subtitle}>
								<b>Отделение младшего возраста</b>
								<br />
								<p>
									В отделении выполняется широкий спектр диагностических, лечебных и оперативных
									вмешательств. Отделение оснащено видеоэндосокпической аппаратурой с возможностью
									фиксации изображения и последующей консультации и консилиума...
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className={classes.cart}>
						<img
							src="https://www.metallurg-sochi.ru/wp-content/uploads/2019/03/%D0%B4%D0%BD%D0%B5%D0%B2%D0%BD%D0%BE%D0%B9-719x437.jpg"
							alt="photo3"
						/>
						<div className={classes.subtitle}>
							<div className={classes.inner__subtitle}>
								<b>Дневной стационар</b>
								<br />
								<p>
									Возможность получения помощи вне постоянного пребывания в стенах больницы.
									Кризисное-психиатрическое отделение работает в санаторном режиме (режим открытых
									дверей) и может принять больных, не нуждающихся в медицинской изоляции...
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className={classes.cart}>
						<img src="https://eko-start.ru/_pu/0/41043592.jpg" alt="photo4" />
						<div className={classes.subtitle}>
							<div className={classes.inner__subtitle}>
								<b>Консультативно-диагностический центр</b>
								<br />
								<p>
									В 2005 году в больнице было открыто новое отделение –
									консультативно-диагностическое. В настоящее время в составе больницы функционирует
									Консультативно-диагностический центр (КДЦ)...
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className={classes.cart}>
						<img src="https://kor.ill.in.ua/m/610x385/2229787.jpg" alt="photo5" />
						<div className={classes.subtitle}>
							<div className={classes.inner__subtitle}>
								<b>Приемное отделение</b>
								<br />

								<p>
									Приемное отделение больницы — это особая структура, особенная каста врачей,
									медсестер и младшего медицинского персонала. У истоков методики работы всех приемных
									отделений скоропомщных больниц всего Мира стояли легендарные российские…
								</p>
							</div>
						</div>
					</div>
				</div>
			</OwlCarousel>
		</div>
	);
};
