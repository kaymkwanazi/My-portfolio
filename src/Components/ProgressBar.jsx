import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

export const ProgressBar = () => {
    const skills = [
        { name: 'ReactJS', percentage: 50, color: '#264DE4' },
        { name: 'HTML/CSS', percentage: 68, color: '#264DE4' },
        { name: 'JavaScript', percentage: 68, color: '#264DE4' },
        { name: 'C# Unity', percentage: 68, color: '#264DE4' },
        { name: 'User Support', percentage: 68, color: '#264DE4' },
        { name: 'MS 365', percentage: 68, color: '#264DE4' },
    ];

  return (
    <div className='flex items-center justify-center gap-10'>
        {skills.map((skill) => (
          <div className='w-24'>
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
