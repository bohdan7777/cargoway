import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";

export default function HomeScreen() {
  const [startLat, setStartLat] = useState("");
  const [startLng, setStartLng] = useState("");
  const [endLat, setEndLat] = useState("");
  const [endLng, setEndLng] = useState("");

  const handleGenerate = () => {
    if (!startLat || !startLng || !endLat || !endLng) {
      return Alert.alert("Помилка", "Будь ласка, заповніть всі поля");
    }

    // тут логіка виклику API або навігації до списку
    Alert.alert("Маршрут", "Генеруємо маршрут...");
  };

  return (
    <View className="flex-1 px-6 pt-10 bg-white">
      <Text className="text-2xl font-bold text-center mb-6 text-black">
        Генерація маршруту
      </Text>

      {/* Start Location */}
      <Text className="text-sm text-gray-700 mb-1">Старт — широта</Text>
      <TextInput
        keyboardType="numeric"
        value={startLat}
        onChangeText={setStartLat}
        placeholder="напр. 50.45"
        className="border border-gray-300 rounded-xl px-4 py-2 mb-4"
      />
      <Text className="text-sm text-gray-700 mb-1">Старт — довгота</Text>
      <TextInput
        keyboardType="numeric"
        value={startLng}
        onChangeText={setStartLng}
        placeholder="напр. 30.52"
        className="border border-gray-300 rounded-xl px-4 py-2 mb-4"
      />

      {/* End Location */}
      <Text className="text-sm text-gray-700 mb-1">Кінець — широта</Text>
      <TextInput
        keyboardType="numeric"
        value={endLat}
        onChangeText={setEndLat}
        placeholder="напр. 49.84"
        className="border border-gray-300 rounded-xl px-4 py-2 mb-4"
      />
      <Text className="text-sm text-gray-700 mb-1">Кінець — довгота</Text>
      <TextInput
        keyboardType="numeric"
        value={endLng}
        onChangeText={setEndLng}
        placeholder="напр. 24.03"
        className="border border-gray-300 rounded-xl px-4 py-2 mb-6"
      />

      {/* Submit Button */}
      <TouchableOpacity
        className="bg-black rounded-xl py-4"
        onPress={handleGenerate}
      >
        <Text className="text-center text-white font-semibold text-base">
          Згенерувати маршрут
        </Text>
      </TouchableOpacity>
    </View>
  );
}
