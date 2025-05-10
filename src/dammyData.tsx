// dummyData.tsx

import { UserProfile, RouteRequest } from "./types";

export const dummyUser: UserProfile = {
  id: "user-1234-uuid",
  email: "johndoe@example.com",
  full_name: "John Doe",
  avatar_url: "https://example.com/avatar.jpg",
  created_at: "2025-05-10T12:00:00Z",
};

export const dummyRoutes: RouteRequest[] = [
  {
    id: "route-001",
    user_id: dummyUser.id,
    start_location: { latitude: 50.4501, longitude: 30.5234 }, // Київ
    end_location: { latitude: 49.8397, longitude: 24.0297 }, // Львів
    requested_at: "2025-05-10T12:15:00Z",
    ai_suggestion: {
      optimized_route: [
        { latitude: 50.4501, longitude: 30.5234 },
        { latitude: 49.9072, longitude: 28.7525 },
        { latitude: 49.8397, longitude: 24.0297 },
      ],
      fuel_stations: [
        {
          name: "OKKO Fast",
          location: { latitude: 49.95, longitude: 28.6 },
          fuel_price: 53.5,
          fuel_type: "gasoline",
          rating: 4.7,
        },
      ],
      total_distance_km: 540,
      estimated_time_min: 360,
      notes: "Знайдено найшвидший маршрут з однією якісною заправкою.",
    },
  },
  {
    id: "route-002",
    user_id: dummyUser.id,
    start_location: { latitude: 50.4501, longitude: 30.5234 },
    end_location: { latitude: 48.4647, longitude: 35.0462 }, // Дніпро
    requested_at: "2025-05-10T13:00:00Z",
    ai_suggestion: {
      optimized_route: [
        { latitude: 50.4501, longitude: 30.5234 },
        { latitude: 49.5535, longitude: 31.315 },
        { latitude: 48.4647, longitude: 35.0462 },
      ],
      fuel_stations: [
        {
          name: "WOG Comfort",
          location: { latitude: 49.8, longitude: 32.0 },
          fuel_price: 51.2,
          fuel_type: "gasoline",
          rating: 4.5,
        },
        {
          name: "SOCAR",
          location: { latitude: 48.9, longitude: 34.0 },
          fuel_price: 50.9,
          fuel_type: "gasoline",
          rating: 4.6,
        },
      ],
      total_distance_km: 470,
      estimated_time_min: 320,
      notes:
        "Маршрут з двома заправками з найкращим співвідношенням ціна/якість.",
    },
  },
  {
    id: "route-003",
    user_id: dummyUser.id,
    start_location: { latitude: 50.4501, longitude: 30.5234 },
    end_location: { latitude: 46.4825, longitude: 30.7233 }, // Одеса
    requested_at: "2025-05-10T14:30:00Z",
    ai_suggestion: {
      optimized_route: [
        { latitude: 50.4501, longitude: 30.5234 },
        { latitude: 48.9, longitude: 29.5 },
        { latitude: 47.5, longitude: 30.2 },
        { latitude: 46.4825, longitude: 30.7233 },
      ],
      fuel_stations: [
        {
          name: "Glusco",
          location: { latitude: 48.8, longitude: 29.4 },
          fuel_price: 50.0,
          fuel_type: "gasoline",
        },
      ],
      total_distance_km: 480,
      estimated_time_min: 340,
      notes: "Оптимальний маршрут з бюджетною заправкою.",
    },
  },
];
