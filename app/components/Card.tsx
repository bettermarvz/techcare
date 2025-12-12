import React from 'react'

const Card = ({className,title='Card Title Here',height, width, children}:{title?:string,height?:number, width?:number, children?: React.ReactNode, className?:string}) => {
  return (
    <div style={{height: height, width: width}} className={`p-5 bg-white flex flex-col items-center rounded-2xl ${className}`}>
        <p className='text-2xl/[33px] font-extrabold w-full justify-start'>{title}</p>
        {children}
    </div>
  )
}

export default Card