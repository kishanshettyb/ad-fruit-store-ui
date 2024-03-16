import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { isNewBackTitleImplementation } from "react-native-screens";

const FruitsSmallCard = () => {
	const lists = [
		{
			id: "1",
			title: "Banana",
			image: require("../../assets/fruits/banana.png"),
			price: "1.9",
			distance: "15-20 minutes",
			bgColor: "bg-yellow-400"
		},
		{
			id: "2",
			title: "Orange",
			image: require("../../assets/fruits/orange.png"),
			price: "2.5",
			distance: "20-30 minutes",
			bgColor: "bg-orange-500"
		},
		{
			id: "3",
			title: "Apple",
			image: require("../../assets/fruits/apple.png"),
			price: "3.1",
			distance: "10-15 minutes",
			bgColor: "bg-red-500"
		},
		{
			id: "4",
			title: "Blueberry",
			image: require("../../assets/fruits/blueberry.png"),
			price: "3.6",
			distance: "15-20 minutes",
			bgColor: "bg-blue-900"
		},
		{
			id: "5",
			title: "Watermelon",
			image: require("../../assets/fruits/watermelon.png"),
			price: "1.0",
			distance: "15-20 minutes",
			bgColor: "bg-green-700"
		}
	];
	return (
		<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="my-[50] ps-t pt-5 pl-5 pb-[40]">
			<View className="flex flex-row gap-3">
				{lists.map(function (item) {
					return (
						<View className="bg-white p-4 rounded-xl shadow-lg w-[120] h-[140]" key={item.id}>
							<Text className="font-bold font-md">{item.title}</Text>
							<View>
								<View className="flex flex-row items-center justify-start">
									<View className="relative mt-2 ml-3">
										<Text className="absolute opacity-70 -left-3 -top-3 ">$</Text>
									</View>
									<Text className="mt-2 opacity-70 text-md">{item.price}</Text>
								</View>
							</View>
							<View className="m-auto mt-2">
								<Image className="w-[60] h-[60] " source={item.image} />
							</View>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default FruitsSmallCard;
