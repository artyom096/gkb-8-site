import React from 'react';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Footer } from './components/Footer/Footer';
import { Route, Switch } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About/About';
import { Story } from './pages/Story/Story';
import { Education } from './pages/Education/Education';
import { Documents } from './pages/Documents/Documents';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { Information } from './pages/Information/Information';
import { Articles } from './pages/Articles/Articles';

//Избавиться от ебучего хардкода
//Исправить адаптив на слайдерах
//Прописать медиазапросы

export default function App() {
	return (
		<div>
			<Header />
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/story" component={Story} />
				<Route exact path="/education" component={Education} />
				<Route exact path="/documents" component={Documents} />
				<Route exact path="/news" component={NewsPage} />
				<Route exact path="/information" component={Information} />
				<Route exact path="/articles" component={Articles} />
			</Switch>
			<Footer />
		</div>
	);
}
