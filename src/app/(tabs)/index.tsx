import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-red-500">Feed</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
