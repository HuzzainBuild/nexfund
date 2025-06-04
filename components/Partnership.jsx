"use client";

import Image from "next/image";

const partners = [
	"/svg/binance.svg",
	"/svg/binance.svg",
	"/svg/bitget.svg",
	"/svg/ascendex.svg",
	"/svg/biconomy.svg",
	"/svg/bitmart.svg",
	"/svg/lbank.svg",
	"/svg/mexc.svg",
	"/svg/deepcoin.svg",
];

const Partnership = () => {
	return (
		<section className="bg-gray-800 py-10 md:py-16 text-white overflow-hidden relative">
			<div className="flex flex-col items-center space-y-4">
				<h2 className="bg-gray-900 border border-gray-600 text-white py-1 px-3 text-center rounded-full">
					Over 100 Companies trust us
				</h2>

				<div className="relative w-full overflow-hidden">
					<div className="flex gap-8 animate-slide whitespace-nowrap">
						{[...partners, ...partners].map((src, i) => (
							<Image
								key={i}
								src={src}
								width={100}
								height={40}
								alt={`partner-${i}`}
								className="h-6 md:h-7 w-auto object-contain transition"
							/>
						))}
					</div>
				</div>
			</div>

			<div className="w-[200px] h-[100px] bg-gray-800 absolute -left-4 top-1/3 blur-sm hidden md:block"></div>
			<div className="w-[200px] h-[100px] bg-gray-800 absolute -right-4 top-1/3 blur-sm hidden md:block"></div>
		</section>
	);
};

export default Partnership;
