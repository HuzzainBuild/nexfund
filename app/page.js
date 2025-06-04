import Hero from "@/components/Hero";
import Partnership from "@/components/Partnership";
import About from "@/components/About";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";

const Home = () => {
	return (
		<div>
			<Hero />
			<Partnership />
			<About />
			<Project />
			<Services />
			<Testimonies />
			<Footer />
		</div>
	);
};

export default Home;
