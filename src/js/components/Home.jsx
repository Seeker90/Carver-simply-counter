import React from "react";
import SecondsCounter from "./SecondsCounter";
import calculateSeconds from "../../lib/time.js";

const Home = ({counter}) => {

	return (
		<>
		<div className="text-center">
			<SecondsCounter 
				thousandsDigit = {calculateSeconds(counter,1000)}
				hundredsDigit= {calculateSeconds(counter,100)}
				tensDigit = {calculateSeconds(counter,10)}
				onesDigit = {calculateSeconds(counter,1)}
				/>
		</div>
	</>
	);
};

export default Home;