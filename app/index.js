import { StyleSheet, Text, View } from "react-native";
import FruitsList from "./components/FruitsList";
import FruitsSmallCard from "./components/FruitsSmallCard";
import Header from "./components/Header";
import Heading from "./components/Heading";

export default function Page() {
	return (
		<View className="p-4 bg-white">
			<Header />
			<Heading />
			<FruitsList />
			<FruitsSmallCard />
		</View>
	);
}
