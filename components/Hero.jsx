"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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
			{ y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.5 }
		);

		tl.fromTo(
			".hero_btn",
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.5 }
		);
	});
	return (
		<section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white z-10">
			{/* Canvas Video Background */}
			<CanvasVideo videoSrc="/videos/galaxy.mp4" />

			<section className="absolute top-0 left-0 w-full h-screen inset-0 flex items-center justify-center z-0">
				<div className="max-w-[500px] max-h-[500px]">
					<Image
						src={"/outorbit.png"}
						alt="Out Orbit"
						width={450}
						height={400}
						className="orbit_out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blend-luminosity"
					/>
					<Image
						src={"/innerobit.png"}
						alt="Inener Orbit"
						width={350}
						height={300}
						className="orbit_in absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blend-luminosity"
					/>
				</div>
			</section>

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
					<button className="bg-gray-300 text-black font-bold px-8 py-3 rounded-lg hover:bg-white duration-700 text-lg md:text-xl hero_btn">
						Get Started
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
