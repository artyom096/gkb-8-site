import React from 'react';
import { InformationAbout } from '../components/InformationAbout/InformationAbout';
import { News } from '../components/News/News';
import { Orders } from '../components/Orders/Orders';
import { OurDoctors } from '../components/OurDoctors/OurDoctors';
import { Slider } from '../components/Slider/Slider';

export const Home: React.FC = () => {
	return (
		<div>
			<Slider />
			<OurDoctors />
			<InformationAbout />
			<Orders />
			<News />
		</div>
	);
};
