import React from 'react'
import { motion } from 'framer-motion'

const stairAmimation  = {
    initial: {
top:"0%",       
    },
    animate: {
        top:"100%",
},
exit:{
top:["100%" , "0%" ],
},
}

const reverseIndex = (index:number) => {
    const totalsteps=6;
    return totalsteps - index - 1;
}


const Staires = () => {
  return (
<>
{[...Array(10)].map((_,index) => (
<motion.div
     key={index}
      variants={stairAmimation}
       initial="initial"
        animate="animate"
         exit="exit"
          className='w-full h-full bg-white relative'
           transition={{
            duration:0.4,
           delay:reverseIndex(index) * 0.1,
           ease:'easeInOut'}}>

           </motion.div>))}
</>

  )
}

export default Staires