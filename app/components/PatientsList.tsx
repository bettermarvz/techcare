import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const PatientItem = ({name, gender, age, url, active}:{name:string, gender:string, age:number, url:string, active?:boolean}) => (
    <div className={`flex justify-between items-center hover:bg-[#F6F7F8] py-4 px-5 ${active ? 'bg-[#D8FCF7]': ''}`}><div className='flex gap-2 items-center'><Image alt="Profile Image" src={url} height={48} width={48} className='rounded-full'/>
        <div className='flex flex-col text-sm/[19px]'>
            <p className='font-bold text-[#072635]'>{name}</p>
            <p className='text-[#707070]'>{gender},{age}</p>
        </div>

    </div>
    <Link href='#'>
        <Image alt="More Actions Icon" src='/icon/more_horiz_FILL0_wght300_GRAD0_opsz24.png' height={4} width={18}/>
    </Link>
    </div>
)

const PatientsList = ({list, current}:{current:string, list:{ age: number, name: string, gender: string, url:string }[]}) => {
console.log(current, 'current')
  return (
    <div className={` bg-white flex flex-col items-center rounded-2xl min-w-[367px] py-5 h-full max-h-[92vh]`}>
        <p className='px-5 text-2xl/[33px] font-extrabold w-full justify-start'>Patients</p>
        <div className='mt-10 overflow-y-auto w-full custom-scrollbar'>
            {list.map((item, index)=>(
                <React.Fragment key={index}>
                    {/* the patience has no id that i could reference to, so i used the name to select the specific patience*/}
                    <PatientItem name={item.name} gender={item.gender} age={item.age} url={item.url} active={item.name === current}/>
                </React.Fragment>
            ))}            
                </div>
        </div>
  )
}

export default PatientsList