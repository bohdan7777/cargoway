// types.ts

// Тип для користувача, з supabase.auth та додатковими полями профілю
export interface UserProfile {
  id: string; // UUID з auth.users
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at?: string;
}

// Тип для точки на карті
export interface GeoPoint {
  latitude: number;
  longitude: number;
}

// Тип для запиту маршруту користувачем
export interface RouteRequest {
  id: string;
  user_id: string;
  start_location: GeoPoint;
  end_location: GeoPoint;
  requested_at: string;
  ai_suggestion?: AISuggestion;
}

// Тип для AI-підказки
export interface AISuggestion {
  optimized_route: GeoPoint[]; // Масив координат — найкращий маршрут
  fuel_stations: FuelStation[]; // Рекомендовані заправки
  total_distance_km: number;
  estimated_time_min: number;
  notes?: string; // Текстові пояснення від AI
}

// Тип заправки
export interface FuelStation {
  name: string;
  location: GeoPoint;
  fuel_price: number;
  fuel_type: "diesel" | "gasoline" | "electric" | string;
  rating?: number; // за бажанням
}
