import React from "react";

export interface CounterUIProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
  loading?: boolean;
}

export const CounterUI: React.FC<CounterUIProps> = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
  loading = false,
}) => {
  return (
    <div className="min-h-[300px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Counter App
        </h2>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 mb-8">
          <div className="text-6xl font-bold text-white text-center">
            {count}
          </div>
        </div>

        {loading && (
          <div className="mb-4 flex items-center justify-center">
            <div className="animate-pulse h-6 w-6 rounded-full bg-gray-400" />
          </div>
        )}

        <div className="flex flex-col space-y-3">
          <button
            onClick={onIncrement}
            disabled={loading}
            className="w-full bg-green-500 py-3 px-6 rounded-lg text-white font-semibold disabled:opacity-60"
          >
            Increment
          </button>

          <button
            onClick={onDecrement}
            disabled={loading}
            className="w-full bg-red-500 py-3 px-6 rounded-lg text-white font-semibold disabled:opacity-60"
          >
            Decrement
          </button>

          <button
            onClick={onReset}
            disabled={loading}
            className="w-full bg-gray-500 py-3 px-6 rounded-lg text-white font-semibold disabled:opacity-60"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

