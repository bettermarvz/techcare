
import PatientDetails from '../components/PatientDetails'
import LabResult from '../components/LabResult'
import PatientsList from '../components/PatientsList'
import { getAllPatients, getPatient } from '@/api/patient-endpoints'
import Card from '../components/Card'
import DiagnosticList from '../components/DiagnosticList'
import DiagnosisHistory from '../components/DiagnosisHistory'

const PatientsPage = async () => {
    // create a new provider

    const patients = await getAllPatients()
    const currentPatient = await getPatient('Jessica Taylor')
    const lightPatientsData = patients.map(({age, name, gender, profile_picture}:{ age: number, name: string, gender: string, profile_picture:string }) => ({ age, name, gender, url: profile_picture }));

    console.log("patients data",currentPatient)
  return (
    <div className='flex gap-[33px] justify-between items-stretch'>
        <section className='pt-[18px] flex-1'>
            <PatientsList list={lightPatientsData} current={currentPatient.name}/>
        </section>
        <section className='flex-2 pt-[18px] flex flex-col gap-8'>
            <Card   title='Diagnosis' className='flex-1'>
                <DiagnosisHistory current={currentPatient.diagnosis_history}/>
            </Card>
            <DiagnosticList list={currentPatient.diagnostic_list}/>
        </section>
        
        <section className='w-[367px] flex flex-col gap-8 h-fit flex-1'>
            <PatientDetails patient={currentPatient}/>
            <LabResult labs={currentPatient.lab_results}/>

        </section>
    </div>
  )
}

export default PatientsPage