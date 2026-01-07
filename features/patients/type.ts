export type Level = "Normal" | "Higher than Average" | "Lower than Average";

export interface VitalReading {
  value: number;
  levels: Level;
}

export interface BloodPressure {
  systolic: VitalReading;
  diastolic: VitalReading;
}

export interface DiagnosisHistoryEntry {
  month: string; // e.g. "March"
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: VitalReading;
  respiratory_rate: VitalReading;
  temperature: VitalReading;
}

export interface DiagnosticItem {
  name: string;
  description: string;
  status: string; // e.g. "Cured", "Under observation", etc.
}

export interface Patient {
  name: string;
  gender: "Male" | "Female";
  age: number;
  profile_picture: string;
  date_of_birth: string; // ISO date string
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistoryEntry[];
  diagnostic_list: DiagnosticItem[];
  lab_results: string[];
}

export type PatientsResponse = Patient[];
