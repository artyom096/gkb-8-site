import React from 'react';
import { Carousel } from 'react-bootstrap';
import classes from './Slider.module.scss';

export const Slider: React.FC = () => {
	return (
		<div className={classes.wrapper}>
			<Carousel className="h-100">
				<Carousel.Item className={`${classes.slider}`} interval={6000}>
					<img
						className="d-block w-100"
						src="https://avatars.mds.yandex.net/get-altay/492546/2a0000015e2c7b8dac00693e0d45647ef292/XXL"
						alt="Первый слайд"
					/>
				</Carousel.Item>
				<Carousel.Item className={classes.slider} interval={4000}>
					<img
						className="d-block w-100"
						src="http://gua.tatar.ru/upload/organization/395.jpg"
						alt="Второй слайд"
					/>
				</Carousel.Item>
				<Carousel.Item className={classes.slider}>
					<img
						className="d-block w-100"
						src="https://avatars.mds.yandex.net/get-altay/910613/2a00000161ca5de23a8373157f11f63f5041/XXL"
						alt="Третий слайд"
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
