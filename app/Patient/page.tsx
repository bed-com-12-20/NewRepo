import React from 'react'
import Header from '@/componets/navbar';
import Footer from '@/componets/footer';
import './Service.css';
// import Service from './Service'

// export default function page() {
//   return (
//     <div>
      
//       <Service/>
//     </div>
//   )
// }

const callouts = [
  {
    name: 'Patient  Admission ',
    description: 'Our hospitals patient admission service combines compassionate care with seamless   efficiency. Our dedicated team prioritizes your comfort, safety, and well-being,providing personalized assistance with paperwork and expedited processing for a stress-free experience. Trust us to provide high-quality care from the moment you arrive ',
    imageSrc: 'https://i.pinimg.com/564x/1b/c0/32/1bc032e07b1fb81488d03ab2d7fb5c7d.jpg',
   

  },
  {
    name: 'Patient Discharge',
    description: ' Experience a seamless departure from our hospital with our patient discharge   service. As you prepare to leave, our compassionate team ensures a smooth transition,offering personalized support and guidance every step of the way. Rest assured, your comfort and well-being remain our top priority until the very end. Plus,  as part of our commitment to your care, we provide the convenience of ambulance   transport upon discharge, ensuring a safe journey home. Trust us to see you off with  the same level of excellence and care you received during your stay ',
    imageSrc: 'https://i.pinimg.com/564x/32/52/96/325296847530608231e442899b8f8eda.jpg',
  

  },
  {
    name: 'Medical Checkup',
    description: 'Medical prescription guide from our medical specialist and as well as providing routine for check ups and any other related medical guide',
    imageSrc: 'https://i.pinimg.com/564x/eb/75/1a/eb751aa4ec0053e71c3a1113f420fa48.jpg',
   

  },
]

const Visit=[
  {day:'Monday-Sunday', time1:'7AM to 9AM', time2:'12PM to 2PM', time3:'5PM to 7PM'},

]

export default function Example() {
  return (
    <>
    <Header/>
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-green-900">Patient  Admission and Discharge</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-base font-semibold text-green-500">
                
                    <span className="absolute inset-0" />
                    {callout.name}
                
                </h3>
                <p className="text-sm font-light text-gray-600">{callout.description}</p>
              </div>
            ))}
            <div className='justify-center mt-10 '>
            <h2 className="text-2xl font-bold text-green-900 text-center">Visiting Hours</h2>
            <div className="table-row">
                        <div className="table-cell">
                            <p>Day</p>
                        </div>
                        <div className="table-cell">
                            <p>Morning</p>
                        </div>
                        <div className="table-cell">
                            <p>Afternoon</p>
                        </div>
                        <div className="table-cell">
                            <p>Evening</p>
                        </div>
                        
             </div>
            {Visit.map((item, index)=>(
            <div className='table-row' key={index}>
              <div className='table-cell'>
                  <p>{item.day}</p>
              </div>
              <div className='table-cell'>
                  <p>{item.time1}</p>
              </div>
              <div className='table-cell'>
                  <p>{item.time2}</p>
              </div>
              <div className='table-cell'>
                  <p>{item.time3}</p>
              </div>

            </div>
           ))}
            </div>
           
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}