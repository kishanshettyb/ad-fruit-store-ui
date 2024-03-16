import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const FruitsList = () => {
	const lists = [
		{
			id: "1",
			title: "Banana",
			image: require("../../assets/fruits/banana.png"),
			km: "2-3 km",
			distance: "15-20 minutes",
			bgColor: "bg-yellow-400"
		},
		{
			id: "2",
			title: "Orange",
			image: require("../../assets/fruits/orange.png"),
			km: "4-5 km",
			distance: "20-30 minutes",
			bgColor: "bg-orange-500"
		},
		{
			id: "3",
			title: "Apple",
			image: require("../../assets/fruits/apple.png"),
			km: "1-2 km",
			distance: "10-15 minutes",
			bgColor: "bg-red-500"
		},
		{
			id: "4",
			title: "Blueberry",
			image: require("../../assets/fruits/blueberry.png"),
			km: "2-3 km",
			distance: "15-20 minutes",
			bgColor: "bg-blue-900"
		},
		{
			id: "5",
			title: "Watermelon",
			image: require("../../assets/fruits/watermelon.png"),
			km: "2-4 km",
			distance: "15-20 minutes",
			bgColor: "bg-green-700"
		}
	];
	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="">
			<View className="flex flex-row gap-4">
				{lists.map(function (item) {
					return (
						<View className={`w-[300] h-[360] p-[30] rounded-3xl  ${item.bgColor}`} key={item.id}>
							<View className="flex flex-row items-center justify-between">
								<View>
									<Text className="text-2xl font-bold text-white">{item.title}</Text>
								</View>
								<View>
									<View className="flex flex-row items-center justify-between">
										<View className="relative">
											<Text className="absolute text-white -left-3 -top-3 ">$</Text>
										</View>
										<Text className="text-lg text-white">1.90</Text>
									</View>
								</View>
							</View>
							<View className="flex items-center justify-center">
								<Image source={item.image} />
							</View>
							<View className="flex flex-row justify-between items-center w-[200] m-auto mt-0 mb-2">
								<View className="w-[30] h-[30] rounded-full bg-white items-center justify-center">
									<Text>-</Text>
								</View>
								<View>
									<Text>1 kg</Text>
								</View>
								<View className="w-[30] h-[30] rounded-full bg-white items-center justify-center">
									<Text>+</Text>
								</View>
							</View>
							<View className="flex p-3 w-[200] m-auto rounded-2xl my-3 bg-white items-center justify-center">
								<Text>Add to cart</Text>
							</View>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default FruitsList;
