import React from 'react'
import {motion} from 'framer-motion'
import  "../App.css"

const Description = () => {
  return (
    <div>
  
  <motion.div id='div1'
    initial={{
      x:-300,
      y:-1000,
      opacity:0
    }}

    animate={{
      y:0,
      opacity:1
    }}
    transition={{
      delay:1,
      duration:2,
    
    }}>
   Лучшие туры по выгодным ценам
  </motion.div>

  
<div id='anim'>

  <motion.div id='div2'
  initial={{
    opacity:0.1
  }}
  animate={{
    opacity:1
  }}
  transition={{
    delay:1,
    duration:3,
  
  }}>
    <motion.img
    src='img/banner-new.jpeg'
    className='banner'
    width={650}
   
    initial={{
      opacity:1
    }}

    transition={{
      opacity:1,
      duration:5

    }}

    whileTap={{
      rotate:360
    }}/>

  </motion.div>


  <motion.div id='div3'
  initial={{
   
    opacity:0,
    scale:0.5
  }}
  animate={{
    
    scale:2,
    opacity:1
  }}
  transition={{
    duration:2,
  
  }}>

    <motion.img
    src='img/Img1.png'
    className='Img1'
    width={250}

    initial={{
      y:700,
      opacity:0.6,
      scale:0.5,
    }}

    animate={{
      y:50,
      scale:1.4,
      opacity:1
    }}

    transition={{
      duration:2

    }}

    whileTap={{
        opacity:0,
     
    }}/>

  </motion.div>

    </div>

    </div>
  )
}

export default Description