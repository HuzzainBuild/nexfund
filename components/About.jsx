"use client";

import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
	const container = useRef(null);
	const titleRef = useRef(null);
	const cardsRef = useRef([]);

	// GSAP Animation using gsap-react
	useGSAP(
		() => {
			// Animate heading
			gsap.from(titleRef.current, {
				opacity: 0,
				y: 40,
				duration: 1,
				ease: "power3.out",
			});

			// Animate cards with stagger
			gsap.from(cardsRef.current, {
				opacity: 0,
				y: 50,
				duration: 1,
				ease: "power3.out",
				stagger: 0.2,
				delay: 0.3,
			});
		},
		{ scope: container }
	);

	return (
		<section
			ref={container}
			className="w-full py-[50px] md:py-[100px] px-5 md:px-8 flex flex-col items-center justify-center gap-4 md:gap-6"
		>
			<h1
				ref={titleRef}
				className="text-3xl md:text-6xl text-center py-4 font-bold text-white"
			>
				About NexFund Labs
			</h1>

			<div className="grid md:grid-cols-4 gap-4 md:gap-5 md:max-w-[70rem] w-full mx-auto">
				{/* WHO WE ARE */}
				<div
					ref={(el) => (cardsRef.current[0] = el)}
					className="card border border-gray-600 rounded-md p-4 md:p-6 row-span-2 col-span-2 relative min-h-[400px] md:min-h-[500px]"
				>
					<div className="flex flex-col gap-2">
						<h2 className="text-3xl font-bold">Who We Are?</h2>
						<p className="text-gray-400 md:text-xl">
							NexFund Labs is a next-gen fundraising agency helping early-stage
							Web3, AI, and crypto startups access capital, Secure OTC
							Investments, and accelerate listings. We're not just connectors —
							we’re dealmakers with skin in the game.
						</p>
					</div>
					<Image
						src={"/team.png"}
						alt="team"
						width={500}
						height={400}
						className="w-full h-auto absolute bottom-0 left-0"
					/>
				</div>

				{/* MISSION */}
				<div
					ref={(el) => (cardsRef.current[1] = el)}
					className="card border border-gray-600 rounded-md p-4 md:p-6 col-span-2 relative min-h-[300px] md:min-h-[250px] overflow-hidden"
				>
					<div className="flex flex-col gap-2">
						<h2 className="text-3xl font-bold">Our Mission</h2>
						<p className="text-gray-400">
							To democratize access to smart capital by bridging innovative
							startups with strategic investors in the blockchain and tech
							frontier.
						</p>
					</div>
					<Image
						src={"/mission.png"}
						alt="mission"
						width={400}
						height={300}
						className="w-full h-auto absolute top-[80px] md:top-[50px] left-0"
					/>
				</div>

				{/* VISION */}
				<div
					ref={(el) => (cardsRef.current[2] = el)}
					className="card border border-gray-600 rounded-md p-4 md:p-6 col-span-2 relative min-h-[300px] md:min-h-[300px] overflow-hidden"
				>
					<div className="flex flex-col gap-2">
						<h2 className="text-3xl font-bold">Our Vision</h2>
						<p className="text-gray-400">
							To evolve from an elite fundraising agency into a full-fledged
							venture capital powerhouse — NexFund — investing, incubating, and
							co-building the future of decentralized tech.
						</p>
					</div>
					<Image
						src={"/vission.png"}
						alt="vision"
						width={400}
						height={300}
						className="w-full h-auto absolute top-[90px] md:top-[50px] left-0"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
