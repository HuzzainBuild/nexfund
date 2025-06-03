"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import CanvasVideo from "./CanvasVideo";

const Hero = () => {
	useGSAP(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			".hero_title",
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power2.out" }
		);

		tl.fromTo(
			".hero_subtitle",
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
		);

		tl.fromTo(
			".hero_subtitle",
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 1.5 }
		);
	});
	return (
		<section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
			{/* Canvas Video Background */}
			<CanvasVideo videoSrc="/videos/galaxy.mp4" />

			{/* Content */}
			<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
				<h1 className="text-3xl md:text-5xl font-bold hero_title">
					Accelerating the Future of Web3 — Capital, Connections, and
					Credibility.
				</h1>
				<p className="mt-4 text-lg md:text-xl text-gray-300 hero_subtitle">
					NexFund Labs helps Web3, Crypto startups raise capital, secure OTC
					deals, and achieve successful listings — backed by our exclusive
					network and strategic ecosystem partnerships.
				</p>
				<div className="mt-6">
					<button className="bg-gray-300 text-black font-bold px-6 py-3 rounded-lg hover:bg-white duration-700 text-lg">
						Get Started
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
