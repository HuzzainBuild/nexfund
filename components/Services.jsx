"use client";

import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Services = () => {
	const container = useRef(null);
	const header = useRef(null);
	const cardText = useRef(null);
	const cardImage = useRef(null);

	useGSAP(
		() => {
			// Animate header
			gsap.from(header.current, {
				y: 40,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
			});

			// Animate text column
			gsap.from(cardText.current, {
				x: -60,
				opacity: 0,
				duration: 1,
				delay: 0.4,
				ease: "power3.out",
			});

			// Animate image column
			gsap.from(cardImage.current, {
				x: 60,
				opacity: 0,
				duration: 1,
				delay: 0.5,
				ease: "power3.out",
			});
		},
		{ scope: container } // GSAP React scope
	);

	return (
		<section
			ref={container}
			className="w-full py-[50px] md:py-[100px] px-5 md:px-8 flex flex-col items-center justify-center gap-4 md:gap-6"
		>
			<div
				ref={header}
				className="flex flex-col items-center justify-center gap-2 md:gap-4 text-center"
			>
				<p className="py-1 px-2 bg-gray-800 border border-gray-400 text-white rounded-full text-xs md:text-sm">
					Our Services
				</p>
				<h2 className="text-2xl md:text-3xl font-bold">
					Accelerating Web3, Crypto, and
					<br className="hidden md:block" />
					AI Startups with Tailored Solutions
				</h2>
				<p className="text-gray-400 text-center max-w-2xl">
					We empower Web3, crypto, and AI startups with end-to-end support —
					from fundraising and private deals to exchange listings, liquidity,
					marketing, and legal compliance — connecting them with the right
					capital, partners, and strategies to scale fast and securely.
				</p>
			</div>

			{/* ------ Service 1 ------- */}
			<div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-[60rem] w-full mx-auto mt-8">
				<div
					ref={cardText}
					className="flex flex-col items-start justify-center gap-3 md:gap-4"
				>
					<h1 className="text-3xl md:text-4xl font-bold">
						Fundraising Support
					</h1>
					<p className="text-gray-400 text-base md:text-lg">
						We help Web3, crypto, and AI startups raise pre-seed to Series A
						rounds, ICO, IDO by connecting them directly with our growing
						network of 50+ active VCs, Launchpads, angels & individuals.
					</p>
				</div>

				<div
					ref={cardImage}
					className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800"
				>
					<Image
						src={"/service-1.jpg"}
						alt="service"
						width={500}
						height={500}
						className="w-full h-auto object-cover rounded-lg"
					/>
				</div>
			</div>

			{/* ------ Service 2 ------- */}
			<div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-[60rem] w-full mx-auto mt-8">
				<div
					ref={cardText}
					className="flex flex-col items-start justify-center gap-3 md:gap-4 order-1 md:order-2"
				>
					<h1 className="text-3xl md:text-4xl font-bold">
						OTC Investment Deals
					</h1>
					<p className="text-gray-400 text-base md:text-lg">
						Get access to exclusive over-the-counter investment opportunities
						and strategic capital — outside traditional public rounds.
					</p>
				</div>

				<div
					ref={cardImage}
					className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800 order-2 md:order-1"
				>
					<Image
						src={"/service-2.jpg"}
						alt="service"
						width={500}
						height={500}
						className="w-full h-auto object-cover rounded-lg"
					/>
				</div>
			</div>

			{/* ------ Service 3 ------- */}
			<div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-[60rem] w-full mx-auto mt-8">
				<div
					ref={cardText}
					className="flex flex-col items-start justify-center gap-3 md:gap-4"
				>
					<h1 className="text-3xl md:text-4xl font-bold">
						Listing & Exchange Advisory
					</h1>
					<p className="text-gray-400 text-base md:text-lg">
						We assist projects in preparing for centralized exchange (CEX) and
						decentralized exchange (DEX) listings with the right strategy,
						timing, and exchange partners.
					</p>
				</div>

				<div
					ref={cardImage}
					className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800"
				>
					<Image
						src={"/service-3.jpg"}
						alt="service"
						width={500}
						height={500}
						className="w-full h-auto object-cover rounded-lg"
					/>
				</div>
			</div>

			{/* ------ Service 4 ------- */}
			<div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-[60rem] w-full mx-auto mt-8">
				<div
					ref={cardText}
					className="flex flex-col items-start justify-center gap-3 md:gap-4 order-1 md:order-2"
				>
					<h1 className="text-3xl md:text-4xl font-bold">Market Making</h1>
					<p className="text-gray-400 text-base md:text-lg">
						We work with top-tier market makers to provide liquidity support,
						improve token performance, and build healthy trading environments
						across CEX/DEX platforms.
					</p>
				</div>

				<div
					ref={cardImage}
					className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800 order-2 md:order-1"
				>
					<Image
						src={"/service-4.png"}
						alt="service"
						width={500}
						height={500}
						className="w-full h-auto object-cover rounded-lg"
					/>
				</div>
			</div>

			{/* ------ Service 5 ------- */}
			<div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-[60rem] w-full mx-auto mt-8">
				<div
					ref={cardText}
					className="flex flex-col items-start justify-center gap-3 md:gap-4"
				>
					<h1 className="text-3xl md:text-4xl font-bold">
						KOL & Influencer Marketing
					</h1>
					<p className="text-gray-400 text-base md:text-lg">
						Boost your project visibility with curated Key Opinion Leader (KOL)
						campaigns. We activate crypto influencers and media channels for
						strategic, ROI-focused marketing.
					</p>
				</div>

				<div
					ref={cardImage}
					className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800"
				>
					<Image
						src={"/service-5.jpg"}
						alt="service"
						width={500}
						height={500}
						className="w-full h-auto object-cover rounded-lg"
					/>
				</div>
			</div>

			{/* ------ Service 6 ------- */}
			<div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-[60rem] w-full mx-auto mt-8">
				<div
					ref={cardText}
					className="flex flex-col items-start justify-center gap-3 md:gap-4 order-1 md:order-2"
				>
					<h1 className="text-3xl md:text-4xl font-bold">
						Legal & Compliance Services
					</h1>
					<p className="text-gray-400 text-base md:text-lg">
						Get access to experienced legal partners for token structuring,
						investor documentation, KYC/AML compliance, and regulatory strategy.
					</p>
				</div>

				<div
					ref={cardImage}
					className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800 order-2 md:order-1"
				>
					<Image
						src={"/service-6.jpg"}
						alt="service"
						width={500}
						height={500}
						className="w-full h-auto object-cover rounded-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default Services;
