import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={blue} />
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />
				}}
			/>
		</Tabs>
	);
}
