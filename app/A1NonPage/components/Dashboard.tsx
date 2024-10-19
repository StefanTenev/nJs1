import React from 'react'

export default function Dashboard() {

  const statuses: any = {
    "number of days": 14,
    "time remaining": '12:00:00',
    date: new Date().toDateString()
  }

  const moods: any = {
    "deez nuts": '👺',
    "SUS": '👹',
    "fakus": '👮‍♀️'
  }

  return (
    <div className='flex flex-col flex-1'>
      <div className='grid grid-cols-1 sm:grid-cols-3 bg-blue-500 p-4' >
        {Object.keys(statuses).map( (status: string, i) => {
          return (
            <div key={i} className='grid gap-1'>
              <p>{status}</p>
              <p className="monospace font-bold">{statuses[status]}</p>
            </div>
          )
        })}
      </div>
      <h3 className='text-center '>How do you <span className='text-gradient'> feel</span> today?</h3>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mx-auto'>
      {Object.keys(moods).map((mood: string, i) => {
        return (
          <div>
          <p className='text-center'>{mood}</p>
            <p className='  p-4 w-[5rem] h-[5rem] relative'>
            <span key={i} className=' mood-button cursor-pointer rounded-md hover:text-4xl w-full h-full  absolute top-0 left-0 flex justify-center items-center duration-200'>
              {moods[mood]}
              </span>
          </p>
          </div>
          
        )
      })}
      </div>
    </div>
  )
}
