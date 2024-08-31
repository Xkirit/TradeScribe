import React from 'react'
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
function Testimonials() {
  return (
    <div className='items-center px-10'>

      <Marquee className='gap-[3rem] [--duration:5s]' fade={true} pauseOnHover={true}>
        <div>content 1</div>
        <div>content 2</div>
        <div>content 3</div>
      </Marquee>

      
    </div>
  )
}

export default Testimonials
