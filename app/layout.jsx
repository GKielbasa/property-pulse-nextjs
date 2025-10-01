import Navbar from "@/components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.css";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
	title: "PropertyPulse",
	description: "Find The Perfect Rental Property",
	keywords: "rental, property, real estate",
};

const MainLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
};

export default MainLayout;
