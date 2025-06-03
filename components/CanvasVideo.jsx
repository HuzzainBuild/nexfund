"use client";
import { useEffect, useRef } from "react";

const CanvasVideo = ({ videoSrc = "/videos/galaxy.mp4" }) => {
	const canvasRef = useRef(null);
	const videoRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const video = videoRef.current;

		let width = window.innerWidth;
		let height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;

		const resize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = width;
			canvas.height = height;
		};

		window.addEventListener("resize", resize);

		class Particle {
			constructor() {
				this.reset();
			}
			reset() {
				this.x = Math.random() * width;
				this.y = Math.random() * height;
				this.radius = Math.random() * 2 + 1;
				this.speedX = Math.random() * 0.5 - 0.25;
				this.speedY = Math.random() * 0.5 - 0.25;
			}
			update() {
				this.x += this.speedX;
				this.y += this.speedY;
				if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
					this.reset();
				}
			}
			draw(ctx) {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				ctx.fillStyle = "rgba(255,255,255,0.6)";
				ctx.fill();
			}
		}

		const particles = Array.from({ length: 100 }, () => new Particle());

		const render = () => {
			ctx.clearRect(0, 0, width, height);

			if (video.readyState >= 2) {
				ctx.drawImage(video, 0, 0, width, height);
			}

			particles.forEach((p) => {
				p.update();
				p.draw(ctx);
			});

			requestAnimationFrame(render);
		};

		video.play();
		render();

		return () => window.removeEventListener("resize", resize);
	}, []);

	return (
		<>
			<video
				ref={videoRef}
				src={videoSrc}
				autoPlay
				loop
				muted
				playsInline
				className="hidden"
			/>
			<canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
		</>
	);
};

export default CanvasVideo;
