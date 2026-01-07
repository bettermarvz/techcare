"use client";

import PatientDetails from "../components/PatientDetails";
import LabResult from "../components/LabResult";
import PatientsList from "../components/PatientsList";
import { getAllPatients } from "@/api/patient-endpoints";
import Card from "../components/Card";
import DiagnosticList from "../components/DiagnosticList";
import DiagnosisHistory from "../components/DiagnosisHistory";
import { useAllPatients } from "@/features/patients/hooks/useAllPatients";
import { usePatient } from "@/features/patients/hooks/usePatient";

const PatientsPage = () => {
  // create a new provider

  const { data: patientsList, isLoading: patientListLoading } =
    useAllPatients();
  console.log(patientsList);
  const { patient } = usePatient("Jessica Taylor");

  console.log("patient", patient);
  //   if (!patientsList) return;
  const lightPatientsData = patientsList?.map(
    ({
      age,
      name,
      gender,
      profile_picture,
    }: {
      age: number;
      name: string;
      gender: string;
      profile_picture: string;
    }) => ({ age, name, gender, url: profile_picture })
  );

  console.log("patients data", lightPatientsData);
  return (
    <div className="flex gap-[33px] justify-between items-stretch">
      <section className="pt-[18px] flex-1 ">
        {patientListLoading ? (
          <div>Loading list . . .</div>
        ) : (
          <PatientsList
            list={lightPatientsData || []}
            current={patient?.name || ""}
          />
        )}
      </section>
      <section className=" pt-[18px] flex flex-col gap-8">
        <Card title="Diagnosis" className="">
          <DiagnosisHistory current={patient?.diagnosis_history || []} />
        </Card>
        <DiagnosticList list={patient?.diagnostic_list || []} />
      </section>

      <section className="w-[367px] flex flex-col gap-8 flex-1">
        {patient ? (
          <PatientDetails patient={patient} />
        ) : (
          <div>Loading patient details . . .</div>
        )}
        <LabResult labs={patient?.lab_results || []} />
      </section>
    </div>
  );
};

export default PatientsPage;
