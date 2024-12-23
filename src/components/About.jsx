import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import {Wrap} from '../hoc';

const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt className='w-full xs:w-[250px] '>
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className='py-5 px-12 min-h-[280px] bg-tertiary rounded-[20px] flex justify-center items-center flex-col gap-5'>
          <img src={icon} alt={title} className='w-10 h-10'/>
          <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <div>
      <motion.div className='mt-10' variants={textVariant()}>
        <p className={`${styles.sectionSubText}`} >Introduction</p>
        <h1 className={`${styles.sectionHeadText} text-white`}>Overview.</h1>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 mb-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis velit harum praesentium cum ullam, asperiores magni nobis, est iusto id nam minus tempora voluptatem sed ratione iste ipsum dolorum aliquid.</motion.p>
      <div className='flex gap-5 mt-10 mb-10 flex-wrap'>
        {services.map((service, index)=>(
            <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </div>
  )
}

export default Wrap(About,"about")