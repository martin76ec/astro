import React from 'react';

import GirlConst from '../../assets/astro-infinite-girl-cons.png';
import Capricorn from '../../assets/capricorn.png';
import './Home.scss';

export default function Home() {
	return (
		<div id='home'>
			<div className='header'>
				<nav className='navbar'>
					<div className='navbar__brand'>
						<span>Astro</span>
					</div>
					<div className='navbar__menu'>
						<div className='ham'>
							<div className='menu__bar'/>
							<div className='menu__bar'/>
							<div className='menu__bar'/>
						</div>
					</div>
				</nav>
			</div>
			<section className='menu'>
				<nav>
					<div className='menu__circle'></div>
					<div className='menu__divider'></div>
					<div className='menu__option'>
						<span className='active'>Home</span>
					</div>
					<div className='menu__divider'></div>
					<div className='menu__option'>
						<span>Features</span>
					</div>
					<div className='menu__divider'></div>
					<div className='menu__option'>
						<p>Plans</p>
					</div>
				</nav>
			</section>
			<section id='home-welcome'>
				<div className='content'>
					<div className='content__hero'>
						<p>Let the <span>stars</span> guide <span>your way</span></p>
						<a className='hero__button'>Try for free</a>
					</div>
					<div className='content__banner'>
						<img src={GirlConst} alt='girl-constellation' />
					</div>
				</div>
			</section>
			<div id='divider-welcome-features' />
			<section id='home-features'>
				<div className='features__content'>
					<div className='features__title'>
						<h1>Features</h1>
					</div>
					<div className='features__image'>
						<img src={Capricorn} alt="" id="capricorn" />
					</div>
					<div className='features__list'>
						<ul>
							<li>Daily Horoscope</li>
							<li>Daily Horoscope</li>
							<li>Daily Horoscope</li>
							<li>Daily Horoscope</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
