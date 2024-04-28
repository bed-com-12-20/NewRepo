import React from 'react'
import './dept.css'
import Image from 'next/image';
import icon from '../images/icon.png'
import Header from '@/componets/navbar';
import Footer from '@/componets/footer';

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
            <h1 className='deptTitle'>Emergency Department</h1>
            <p className='deptdis'>At the heart of our emergency department is a
               commitment to patient-centric care. Through innovative
                technology and a human touch, we strive to alleviate distress and instill confidence in every interaction. From initial intake to follow-up 
                care, our goal is to empower individuals with the tools and resources needed to navigate any health challenge with resilience and assurance.</p>
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
