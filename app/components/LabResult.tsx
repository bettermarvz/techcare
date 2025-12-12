import React from 'react'
import Card from './Card'
import Image from 'next/image'

const LabResult = ({labs}:{labs:string[]}) => {
  return (
    <Card title='Lab Results' className='flex-1 grow'>
        <div className='mt-4 overflow-y-auto w-full'>
            {labs.map((item, index) => (
                <span key={index} className='flex justify-between px-4 py-2.5 hover:bg-[#F6F7F8] w-full'><p className='text-[13px]/[18px]'>{item}</p><button ><Image alt='' src='icon/download_FILL0_wght300_GRAD0_opsz24 (1).svg' height={20} width={20}/> </button></span>
            ))}
        </div>
    </Card>
  )
}

export default LabResult