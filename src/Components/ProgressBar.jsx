import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

export const ProgressBar = () => {
    const skills = [
        { name: 'ReactJS', percentage: 68, color: '#264DE4' },
        { name: 'HTML', percentage: 75, color: '#19f505' },
        { name: 'TailwindCSS', percentage: 70, color: '#e68701' },
        { name: 'JavaScript', percentage: 68, color: '#f505eb' },
        { name: 'C# Unity', percentage: 50, color: '#01dde6' },
        { name: 'User Support', percentage: 80, color: '#f51b05' },
        { name: 'MS 365', percentage: 80, color: '#8200ff' },
    ];

  return (
    <div className='flex items-center justify-center gap-10'>
        {skills.map((skill) => (
          <div className='w-32'>
            <CircularProgressbar value={skill.percentage} text={`${skill.percentage}%`}
                styles={buildStyles({
                    textColor: 'white',
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
