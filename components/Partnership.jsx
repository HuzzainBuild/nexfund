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
		<section className="bg-gray-800 py-10 md:py-16 text-white overflow-hidden">
			<div className="flex flex-col items-center space-y-4">
				<h2 className="bg-blue-600/50 text-white py-1 px-3 text-center rounded-full">
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
								className="h-6 md:h-7 w-auto object-contain"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Partnership;
