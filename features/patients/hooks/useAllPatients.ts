import useSWR from "swr";
import { PatientsResponse } from "../type";
import { authHeader } from "@/api";

const fetcher = async (url: string): Promise<PatientsResponse> => {
  const res = await fetch(url, {
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

export const useAllPatients = () => {
  const { data, error, isLoading } = useSWR<PatientsResponse>(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};
