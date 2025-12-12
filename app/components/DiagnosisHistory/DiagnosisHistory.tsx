import React from 'react'
import KpiCard from './KpiCard'
import BloodPressure from './BloodPressure'
import { HealthRecordList } from '@/app/types'

const DiagnosisHistory = ({current}:{current:HealthRecordList}) => {
  return (
    <div className='w-full flex flex-col gap-5'>
        <BloodPressure record={current}/>
    <div className='flex justify-between gap-5'>
        <KpiCard
        label = "Respiratory Rate"
         value="20 bpm" 
         url="/respiratory rate.svg"
         trend="Normal" 
         trendValue="Normal"
         color = "#E0F3FA"
        />
        <KpiCard 
         label = "Temperature"
         value="98.6°F" 
         url="/temperature.svg"
         trend="Normal" 
         trendValue="Normal"
         color='#FFE6E9'
        />
        <KpiCard
         label = "Heart Rate"
         value="78 bpm" 
         url="/HeartBPM.svg"
         trend="down" 
         trendValue="Lower than Average"
         color='#FFE6F1'
         />
        </div>
    </div>
  )
}

export default DiagnosisHistory