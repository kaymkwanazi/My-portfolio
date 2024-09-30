import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

export const ProgressBar = () => {
    const skills = [
        { name: 'React', percentage: 50, color: '#61DAFB' },
        { name: 'CSS', percentage: 68, color: '#264DE4' },
    ];

  return (
    <div className='flex flex-col items-center justify-center space-x-6'>
        {skills.map((skill) => (
          <div className='w-24 h-2'>
            <CircularProgressbar value={skill.percentage} text={`${skill.percentage}%`}
                styles={buildStyles({
                    textColor: 'red',
                    pathColor: skill.color,
                    trailColor: '#d6d6d6',
                })}

            />
            <p className='text-center mt-2 text-white'>{skill.name}</p>
           </div>
          
        ))}
       
   
    </div>
  )
}
