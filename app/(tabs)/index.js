import { View, Text } from "react-native";
import React from "react";
import FruitsList from "../components/FruitsList";
import FruitsSmallCard from "../components/FruitsSmallCard";
import Header from "../components/Header";
import Heading from "../components/Heading";

const index = () => {
	return (
		<View className="p-4 bg-white">
			<Header />
			<Heading />
			<FruitsList />
			<FruitsSmallCard />
		</View>
	);
};

export default index;
