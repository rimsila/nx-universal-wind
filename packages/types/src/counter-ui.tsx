import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

export interface CounterUIProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  loading?: boolean;
}

export const CounterUINative: React.FC<CounterUIProps> = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
  loading = false,
}) => {
  return (
    <View className="flex-1 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <View className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <Text className="text-4xl font-bold text-center mb-8 text-gray-800">
          Counter App
        </Text>

        <View className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 mb-8">
          <Text className="text-6xl font-bold text-white text-center">
            {count}
          </Text>
        </View>

        {loading && <ActivityIndicator size="large" className="mb-4" />}

        <View className="space-y-3">
          <TouchableOpacity
            onPress={onIncrement}
            disabled={loading}
            className="w-full bg-green-500 py-3 px-6 rounded-lg"
          >
            <Text className="text-white font-semibold text-center">
              Increment
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onDecrement}
            disabled={loading}
            className="w-full bg-red-500 py-3 px-6 rounded-lg"
          >
            <Text className="text-white font-semibold text-center">
              Decrement
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onReset}
            disabled={loading}
            className="w-full bg-gray-500 py-3 px-6 rounded-lg"
          >
            <Text className="text-white font-semibold text-center">Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
