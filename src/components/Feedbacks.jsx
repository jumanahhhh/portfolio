import React from 'react'
import {Wrap} from "../hoc"
import {motion } from 'framer-motion'
import {styles} from '../style'
import {testimonials} from "../constants"
import {fadeIn,textVariant} from '../utils/motion'
const FeedbackCard=({testimonial, name,index, company,image})=>{
  return(
    <motion.div 
    variants={fadeIn("","spring", index*0.5,1)}
    className='bg-black-200 w-full rounded-3xl p-10 mt-5 xs:w-[320px]'>
      <p className='text-white text-[48px] font-bold'>”</p>
      <div className='mt-1'>
      <p className='tracking-wider text-[18px] '>{testimonial}</p>
      <div className='mt-3 flex justify-between items-center'>
        <div>
        <p className='font-medium text-[16px]'><span className='blue-text-gradient'>@</span> { name}</p>
        <h3 className='text-secondary'>{company}</h3>
        </div>
        <img src={image} className='h-16 w-16 object-contain rounded-full'/>
      </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className='rounded-xl bg-black-100'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What my clients say</p>
          <h1 className={`${styles.sectionHeadText}`}>Testimonials</h1>
        </motion.div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center items-center -mt-20 b-10'>
        {testimonials.map((testimonial,index)=>(
          <FeedbackCard key={testimonial.name} index={index} {...testimonial}/>
        ))}
      </div>

    </div>
  )
}

export default Wrap(Feedbacks);