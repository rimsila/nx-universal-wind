import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestConfig<TData = unknown> = AxiosRequestConfig<TData> & {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
};

export type ResponseErrorConfig<TError = Error> = TError;

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
});

export default async function fetch<
  TResponse = unknown,
  TError = ResponseErrorConfig<Error>,
  TData = unknown
>(config: RequestConfig<TData>): Promise<AxiosResponse<TResponse, TData>> {
  return apiClient.request<TResponse, AxiosResponse<TResponse, TData>, TData>(
    config
  );
}
