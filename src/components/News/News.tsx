import classes from './News.module.scss';
import React from 'react';

export const News = () => {
	return (
		<div>
			<div className={classes.wrapper}>
				<h3>НОВОСТИ</h3>
				<div className={classes.main}>
					<div className={classes.item}>
						<img
							src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-prince-illustration.jpg"
							alt="news1"
						/>
						<div>
							<h4>День рождения у больницы!</h4>
							<small>12.05.21</small>
							<p>
								Поздравляем наших пациентов и персонал больницы с 1000-летием нашего мед.учреждения!
								Желаем нашей ГКБ долгих лет жизни, счастья, здоровья, профессиональных успехов и,
								конечно же, добрых пацентов!
							</p>
						</div>
					</div>
					<div className={classes.item}>
						<img
							src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-prince-illustration.jpg"
							alt="news1"
						/>
						<div>
							<h4>День рождения у больницы!</h4>
							<small>12.05.21</small>
							<p>
								Поздравляем наших пациентов и персонал больницы с 1000-летием нашего мед.учреждения!
								Желаем нашей ГКБ долгих лет жизни, счастья, здоровья, профессиональных успехов и,
								конечно же, добрых пацентов!
							</p>
						</div>
					</div>
					<div className={classes.item}>
						<img
							src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-prince-illustration.jpg"
							alt="news1"
						/>
						<div>
							<h4>День рождения у больницы!</h4>
							<small>12.05.21</small>
							<p>
								Поздравляем наших пациентов и персонал больницы с 1000-летием нашего мед.учреждения!
								Желаем нашей ГКБ долгих лет жизни, счастья, здоровья, профессиональных успехов и,
								конечно же, добрых пацентов!
							</p>
						</div>
					</div>
					<button>Все новости</button>
				</div>
			</div>
		</div>
	);
};
