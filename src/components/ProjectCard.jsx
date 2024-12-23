import React from 'react'
import {motion} from 'framer-motion'
import {Tilt} from 'react-tilt'
import {github} from '../assets'


const ProjectCard = ({image, name, description,tags,index, source_code_link}) => {
  return (
    <div>
        <motion.div>
            <Tilt options={{ max: 5, scale: 1, speed: 50 }} className="bg-gray-800 p-5 rounded-2xl w-80">
            <div className='flex justify-center items-center'>
                <img src={image} className='w-full h-full object-cover rounded-2xl'/>
                  <div className="absolute inset-0 flex justify-end m-3">
                    <div onClick={() => window.open(source_code_link, "_blank")} className="bg-black rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
                      <img src={github} alt="GitHub" className="w-1/2 h-1/2 object-contain" />
                    </div>
                  </div>
            </div>
             <div className="mt-4">
               <h3 className="text-white font-bold text-lg">{name}</h3>
               <p className="mt-2 text-gray-400">{description}</p>
             </div>
            </Tilt>
        </motion.div>
    </div>
  )
}

export default ProjectCard


            // <div className="mt-3 flex flex-wrap gap-2">
            //    {tags.map((tag, idx) => (
            //     <span 
            //         key={idx} 
            //         className={`text-sm ${tag.color}`}
            //     >
            //         #{tag.name}
            //     </span>
            // ))}
            // </div> 