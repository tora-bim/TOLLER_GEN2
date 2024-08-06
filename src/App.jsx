import Marquee from "react-fast-marquee";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import "./assets/js/scroll_bg";
import FontChanger from "./FontChanger.jsx";
import fv_arrow from "./assets/image/fv_arrow.svg";
import About from "./About.jsx";
import React, { useState } from "react";
import Service from "./Service.jsx";
import { ReactLenis, useLenis } from "lenis/react";

function App() {
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	});
	const { t } = useTranslation();
	return (
		<ReactLenis root duration='1'>
			<div className='root'>
				<div className='title container'>
					<h1 className='roboto-regular title_all'>
						BE YOUR
						<FontChanger
							className='title_creative'
							text='CREATIVE'
							interval={250}
						></FontChanger>{" "}
						PARTNER
					</h1>
					<div className='descriptions'>
						<div className='subtitle'>
							<Trans i18nKey='subtitle'>
								共にクリエイティブを創出する。
							</Trans>
						</div>
						<div className='right_description'>
							<p>
								We will be your creative partner for
								<br />
								your business's advancement.
							</p>
							<img src={fv_arrow} alt='' />
						</div>
					</div>
				</div>
				<div className='news'>
					<Marquee
						pauseOnHover={true}
						autoFill={true}
						speed={100}
						direction='right'
						className='news_right'
					>
						<p>2024.01.01 - ニュースがここに入ります。</p>
					</Marquee>
					<Marquee
						pauseOnHover={true}
						autoFill={true}
						speed={70}
						direction='left'
						className='news_left'
					>
						<p>2024.01.01 - ニュースがここに入ります。</p>
					</Marquee>
				</div>
				<section className='about'>
					<h2 className='about_title roboto-black'>About Us</h2>
					<About
						name='vision'
						eng="We'll be your creative partner."
						jp='あなたと共にクリエイティブを創出するデザイン会社に。弊社、お客様、社会にとって、より良いクリエイティブを創出し、期待を超える制作を行います。'
					></About>
					<About
						name='mission'
						eng='Take Advantage of Multiple Knowledge and Technology.'
						jp='弊社の複合的な知識と技術を活用し、お客様の期待を超えるクリエイティブを創出することをmissionとしています。'
					></About>
				</section>
				<section className='service'>
					<Service />
				</section>
				<section className='works'></section>
			</div>
		</ReactLenis>
	);
}

export default App;
