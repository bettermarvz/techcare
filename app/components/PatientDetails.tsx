import dayjs from 'dayjs'
import Image from 'next/image'
import React from 'react'

const Item = ({alt, url, label, value}:{alt:string, url:string, label:string, value: string}) => (
    <div className='flex gap-4'>
        <Image alt={alt} src={url} width={42} height={42} />
        <div className='text-sm flex flex-col'>
            <p className='font-medium'>{label}</p>
            <p className='font-bold'>{value}</p>
        </div>
    </div>
)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PatientDetails = ({patient}:{patient: any}) => {

    const {name, date_of_birth, gender, phone_number, emergency_contact,insurance_type, profile_picture} = patient
  return (
    <div className='px-5 py-8 bg-white flex flex-col items-center rounded-2xl'>
        {/* // profile Pic */}
        <Image alt="Patient Profile Picture" src={profile_picture} width={200} height={200} className='rounded-full'/>
        <p className='font-extrabold text-2xl text-[#072635] mt-6'>{name}</p>
        <div className='flex flex-col gap-6 mt-8 w-full justify-start'>
            <Item alt='Date Of Birth Icon' url='/icon/BirthIcon.svg' label='Date Of Birth' value={dayjs(date_of_birth).format('MMMM D, YYYY')}/>
            <Item alt='Gender Icon' url='/icon/FemaleIcon.svg' label='Gender' value={gender}/>
            <Item alt='Contact Info Icon' url='/icon/PhoneIcon.svg' label='Contact Info.' value={phone_number}/>
            <Item alt='Emergency Contacts Icon' url='/icon/PhoneIcon.svg' label='Emergency Contacts' value={emergency_contact}/>
            <Item alt='Insurance Provider Icon' url='/icon/InsuranceIcon.svg' label='Insurance Provider' value={insurance_type}/>
        </div>
        <button type='button' className='flex items-center text-sm font-bold gap-3 py-3 rounded-full hover:bg-[#F6F7F8] bg-[#01F0D0] px-10 mt-[51px]'>Show all Information</button>
    </div>
  )
}

export default PatientDetails