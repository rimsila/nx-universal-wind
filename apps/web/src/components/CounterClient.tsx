"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CounterUI } from "@counter-monorepo/types/counter-ui-web";
import {
  useGetCounter,
  useIncrementCounter,
  useDecrementCounter,
  useResetCounter,
} from "@counter-monorepo/api-client";

const queryClient = new QueryClient();

function CounterPageInner() {
  const { data, refetch } = useGetCounter();
  const increment = useIncrementCounter();
  const decrement = useDecrementCounter();
  const reset = useResetCounter();

  const handleIncrement = async () => {
    await increment.mutateAsync({ data: { increment: 1 } });
    refetch();
  };

  const handleDecrement = async () => {
    await decrement.mutateAsync({ data: { increment: 1 } });
    refetch();
  };

  const handleReset = async () => {
    await reset.mutateAsync();
    refetch();
  };

  return (
    <CounterUI
      count={data?.count ?? 0}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onReset={handleReset}
      loading={increment.isPending || decrement.isPending || reset.isPending}
    />
  );
}

export default function CounterClient() {
  return (
    <QueryClientProvider client={queryClient}>
      <CounterPageInner />
    </QueryClientProvider>
  );
}
