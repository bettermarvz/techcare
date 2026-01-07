"use client";

import { useAllPatients } from "./useAllPatients";

export const usePatient = (name: string) => {
  const { data, ...rest } = useAllPatients();

  const patient = data?.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  return {
    patient,
    ...rest,
  };
};
