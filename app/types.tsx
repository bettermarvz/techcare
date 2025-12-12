export type Level =
  | "Normal"
  | "Higher than Average"
  | "Lower than Average";

export interface VitalValue {
  value: number;
  levels: Level;
}

export interface BloodPressure {
  systolic: VitalValue;
  diastolic: VitalValue;
}

export interface HealthRecord {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: VitalValue;
  respiratory_rate: VitalValue;
  temperature: VitalValue;
}

export type HealthRecordList = HealthRecord[];
