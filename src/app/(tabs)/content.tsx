import { View, Text, FlatList } from "react-native";
import React from "react";
import { dummyRoutes } from "@/dammyData";
import { FuelStation } from "@/types"; // якщо є типи

export default function Content() {
  return (
    <FlatList
      data={dummyRoutes}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View className="bg-white rounded-2xl shadow-lg mb-4 p-4">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-bold text-black">
              Маршрут #{item.id.slice(-4)}
            </Text>
            <Text className="text-xs text-gray-500">
              {new Date(item.requested_at).toLocaleString()}
            </Text>
          </View>

          {/* Start - End */}
          <View className="mb-3">
            <Text className="text-sm text-gray-700">
              Старт: {item.start_location.latitude.toFixed(2)},
              {item.start_location.longitude.toFixed(2)}
            </Text>
            <Text className="text-sm text-gray-700">
              Кінець: {item.end_location.latitude.toFixed(2)},
              {item.end_location.longitude.toFixed(2)}
            </Text>
          </View>

          {/* Distance + Time */}
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-sm text-green-600">
              {item.ai_suggestion?.total_distance_km} км
            </Text>
            <Text className="text-sm text-yellow-600">
              ~{item.ai_suggestion?.estimated_time_min} хв
            </Text>
          </View>

          {/* Fuel Stations */}
          <View className="mb-3">
            <Text className="text-base font-semibold mb-1 text-gray-800">
              Заправки:
            </Text>
            {item.ai_suggestion?.fuel_stations.map((station, index) => (
              <View
                key={index}
                className="flex-row justify-between px-2 py-1 bg-gray-50 rounded-lg mb-1"
              >
                <Text className="text-sm text-gray-800">{station.name}</Text>
                <Text className="text-sm text-gray-600">
                  {station.fuel_price} грн ({station.fuel_type})
                </Text>
              </View>
            ))}
          </View>

          {/* Notes */}
          <Text className="text-sm italic text-gray-500">
            🧠 {item.ai_suggestion?.notes}
          </Text>
        </View>
      )}
    />
  );
}
