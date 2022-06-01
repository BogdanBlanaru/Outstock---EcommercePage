import React, { useState } from "react";

import Slider from "../components/Slider";
import Components from "../components/Components";
import TrendingProducts from "../components/TrendingProducts";
import Footer from "../common/Footer";
import SubscribeModal from "../SubscribeModal";

const Home = () => {
	const [subscribe, setSubscribe] = useState(true);

	const onCloseHandler = () => {
		setSubscribe(false);
	};

	return (
		<div>
			{subscribe && <SubscribeModal onClose={onCloseHandler} />}
			<Slider />
			<Components />
			<TrendingProducts />
			<Footer />
		</div>
	);
};

export default Home;
