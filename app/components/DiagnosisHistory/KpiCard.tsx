import Image from 'next/image';
import React from 'react'

const KpiCard = ({label, value, url, trend, trendValue,color}:{label: string, value: string, url: string, trend: string, trendValue: string,color: string}) => {

    const getUrl = () => {
        return trend=='up' ? '/icon/ArrowUp.svg' : '/icon/ArrowDown.svg' as string
    }
  return (
    <div className='rounded-xl p-4 flex flex-col gap-4 flex-1' style={{backgroundColor: color}}>
        <Image alt="KPI Icon" src={url} width={96} height={96}/>
        <div>
            <p className='text-4/[22px] font-medium'>{label}</p>
            <p className='text-[30px]/[41px] font-extrabold'>{value}</p>
        </div>
        <span className='flex gap-2'>{trendValue != 'Normal' && <Image alt="Trend direction" height={5} width={10} src={getUrl()} />} 
        <p className='text-sm/[19px]'></p>{trendValue}</span>
    </div>
  )
}

export default KpiCard