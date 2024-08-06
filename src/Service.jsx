import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./assets/css/service.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Ser() {
	const main = useRef();

	useGSAP(
		() => {
			gsap.to(".n1", {
				x: 700,
				scrollTrigger: {
					trigger: ".n1",
					start: "bottom bottom",
					end: "top 40%",
					scrub: true,
					// markers: true,
				},
				duration: 300,
			});
			gsap.to(".n2", {
				x: 400,
				scrollTrigger: {
					trigger: ".n2",
					start: "bottom bottom",
					end: "top 40%",
					scrub: true,
					// markers: true,
				},
				duration: 300,
			});
			gsap.to(".n3", {
				x: 100,
				scrollTrigger: {
					trigger: ".n3",
					start: "bottom bottom",
					end: "top 40%",
					scrub: true,
					// markers: true,
				},
				duration: 300,
			});
		},
		{ scope: main }
	);

	return (
		<>
			<h2 className='move roboto-black service_title'>Services</h2>
			<div className='service_root' ref={main}>
				<div className='box n1'>
					<div className='ser_header'>
						<span>01</span>
						<div className='ser_header_text'>
							<h3>Unified design</h3>
							<p>一貫したデザイン</p>
						</div>
					</div>
				</div>
				<div className='box n2'>
					<div className='ser_header'>
						<span>01</span>
						<div className='ser_header_text'>
							<h3>Unified design</h3>
							<p>一貫したデザイン</p>
						</div>
					</div>
				</div>
				<div className='box n3'>
					<div className='ser_header'>
						<span>01</span>
						<div className='ser_header_text'>
							<h3>Unified design</h3>
							<p>一貫したデザイン</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
