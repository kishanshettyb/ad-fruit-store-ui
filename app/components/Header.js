import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
	return (
		<View className="flex flex-row justify-between">
			<View>
				<MaterialCommunityIcons name="text" size={24} color="black" />
			</View>
			<View>
				<Ionicons name="notifications-outline" size={24} color="black" />
			</View>
		</View>
	);
};

export default Header;
