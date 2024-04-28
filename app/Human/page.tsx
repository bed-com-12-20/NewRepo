import React from 'react'
import './dept.css'
import icon from '../images/icon.png'
import Image from 'next/image'
import Footer from '@/componets/footer'
import Header from '@/componets/navbar'

export default function page() {
  return (
    <>
    <Header/>
     <div className='divyadept'>
    <div className='deptinfo'>
        <div className='tiyikelogo'>
        <Image src={icon} alt="zilogo" width={200} height={20} className='zitobe'/>
        </div>
        <div className='infoija'>
            <h1 className='deptTitle'>Human Resources Department</h1>
            <p className='deptdis'>At Liwonde, our Human Resources Department serves as 
            the heart of our organization, dedicated to fostering a vibrant, inclusive,
            and empowered workplace culture. We are committed to supporting our employees 
            at every stage of their journey, from recruitment to retirement, and beyond.</p>
            <span className='deptgcpd'>To contact the department call</span>
            <span className='deptcont'>+265 997 138 340</span>
        </div>
    </div>
    <div className='deptImg'></div>
    </div>

    <Footer/>
  
 
    </>
   
  )
}
