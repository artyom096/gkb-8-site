import React, { useEffect, useRef } from 'react';
import classes from './OurDoctors.module.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { idText } from 'typescript';

export const OurDoctors: React.FC = () => {
	const responsiveOwl = {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 4,
		},
	};
	return (
		<div className={classes.title}>
			<h3>НАШИ ВРАЧИ</h3>
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
						src="https://sun9-71.userapi.com/impg/19vmUcpRHwb1pCCCKjJp70YMFr4gAAho3YrLhg/KqzTXb7rvbQ.jpg?size=1623x2160&quality=96&sign=fccf4234563beb105bffbcb44c46052d&type=album"
						alt="photo1"
					/>
					<b>Шурыгин Артём Дмитриевич</b>
					<br />
					<a href="/">Отделение ультралазерной хирургии печени</a>
					<p>Заслуженный врач РТ, главный невролог Приволжского федерального округа</p>
				</div>
				<div>
					<div className={classes.cart}>
						<img
							src="https://sun9-32.userapi.com/impg/sN97FKyC1E3wWEBDZz5e6b1fTOil9_AAon3MLA/2piLuvoTKoQ.jpg?size=1620x2160&quality=96&sign=122bc6f3bf045e558794a54c3e9315a0&type=album"
							alt="photo2"
						/>
						<b>Шурыгин Артём Дмитриевич</b>
						<br />
						<a href="/">Отделение ультралазерной хирургии печени</a>
						<p>Заслуженный врач РТ, главный невролог Приволжского федерального округа</p>
					</div>
				</div>
				<div>
					<div className={classes.cart}>
						<img
							src="https://psv4.userapi.com/c848236/u26754740/docs/d2/5393a1317f4a/201901102357589327489367177-01-1.jpg?extra=RiE1JPMlKaCukd9x56tdJnvsoXyGZe_9zbd8BQTsJCVa-mLe8mM9rwJ6Y9-WbOKZBU3u-K-0JB952hiWg51RZa4W5gZHdSsIwzwV05ZlKo2xN97E98JWbosZOw3yzcbSqgbuT4yXtZRfXTIPjzUcA_4u4A"
							alt="лаборатория"
						/>
						<b>Арзамасцева Анастасия Андреевна</b>
						<br />
						<a href="/">Отделение клинико-лабораторной диагностики</a>
						<p>Кандидат биологических наук, заведующая отделением</p>
					</div>
				</div>
				<div>
					<div className={classes.cart}>
						<img
							src="https://sun9-54.userapi.com/impg/T7jzQHwil9RGNrTankJjhX5cBGonc2qFyVceOw/QlAYyv5itr8.jpg?size=1440x1920&quality=96&sign=b68c107fa4c828763b7788ca6b29370b&type=album"
							alt="photo4"
						/>
						<b>Шурыгин Артём Дмитриевич</b>
						<br />
						<a href="/">Отделение ультралазерной хирургии печени</a>
						<p>Заслуженный врач РТ, главный невролог Приволжского федерального округа</p>
					</div>
				</div>
				<div>
					<div className={classes.cart}>
						<img
							src="https://sun9-11.userapi.com/impg/nShLENFJ_W2LR9KAssJ8Pw-MNETsNG_ENXpP_Q/wOjlbSDla7Q.jpg?size=786x605&quality=96&sign=45bd49c703089f8b3d1c18a2684f7abf&type=album"
							alt="photo5"
						/>
						<b>Шурыгин Артём Дмитриевич</b>
						<br />
						<a href="/">Отделение ультралазерной хирургии печени</a>
						<p>Заслуженный врач РТ, главный невролог Приволжского федерального округа</p>
					</div>
				</div>
				<div>
					<div className={classes.cart}>
						<img
							src="https://sun9-37.userapi.com/impg/mp5iCsgH57arm7THS3BWJ9QquVi_WF48Qjw0GQ/wZ1WQbaKNsA.jpg?size=1500x1500&quality=96&sign=a441c53297520254dac2cf40908bc931&type=album"
							alt="photo6"
						/>
						<b>Шурыгин Артём Дмитриевич</b>
						<br />
						<a href="/">Отделение ультралазерной хирургии печени</a>
						<p>Заслуженный врач РТ, главный невролог Приволжского федерального округа</p>
					</div>
				</div>
				<div>
					<div className={classes.cart}>
						<img
							src="https://sun9-24.userapi.com/impg/KBcqrC3o09Tvs9JybCYN0ucczHyKm_HQ5G-gBA/xxkpoUYW6v0.jpg?size=1620x2160&quality=96&sign=1a95ec9f0744f2de947779488a4079f0&type=album"
							alt="photo7"
						/>
						<b>Шурыгин Артём Дмитриевич</b>
						<br />
						<a href="/">Отделение ультралазерной хирургии печени</a>
						<p>Заслуженный врач РТ, главный невролог Приволжского федерального округа</p>
					</div>
				</div>
			</OwlCarousel>
		</div>
	);
};
