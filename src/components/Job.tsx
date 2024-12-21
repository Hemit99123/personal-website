import React from 'react'

interface JobProps {
    title: string;
    date: string;
    imgSrc: string;
}

const Job: React.FC<JobProps> = ({title, date, imgSrc}) => {
  return (
    <div className="flex items-center">
    <div className="mr-3">
        <img 
            className='rounded-full'
            src={imgSrc}
            width={50}
            height={50}
        />
    </div>
    <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">
           {date}
        </p>
    </div>
  </div>    
  )
}

export default Job