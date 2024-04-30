import React from 'react';
import Link from 'next/link';
import './Depthome.css'
import Footer from "@/componets/footer";
import Navbar from "@/componets/navbar";
import Button from '@/componets/BT';

// Sample department data
const departments = [
  {
    id: 1,
    name: 'Emergency ',
    imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/05/19/2-NHS-hopsital-afpget.jpg?quality=75&amp;width=1200&amp;auto=webp', // Path to department image
    link: "/Emergency", // Link to department page
  },
  {
    id: 2,
    name: 'Finance ',
    imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/05/19/2-NHS-hopsital-afpget.jpg?quality=75&amp;width=1200&amp;auto=webp', // Path to department image
    link: "/Financial", // Link to department page
  },
  {
    id: 3,
    name: 'Dental',
    imageUrl: 'https://c8.alamy.com/comp/2JRD8H2/doctor-testing-covid-temperate-in-hospital-appointment-to-prevent-the-spread-of-the-virus-healthcare-compliance-worker-with-health-insurance-document-2JRD8H2.jpg',
    link: "/Human",
  },
  {
    id: 4,
    name: 'Radiology',
    imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/05/19/2-NHS-hopsital-afpget.jpg?quality=75&amp;width=1200&amp;auto=webp', // Path to department image
    link: "/IT", 
  },
  {
    id: 5,
    name: 'Dental ',
    imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/05/19/2-NHS-hopsital-afpget.jpg?quality=75&amp;width=1200&amp;auto=webp', // Path to department image
    link: "/Emergency", // Link to department page
  },
  {
    id: 6,
    name: 'Operating Theatre',
    imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/05/19/2-NHS-hopsital-afpget.jpg?quality=75&amp;width=1200&amp;auto=webp', // Path to department image
    link: "/Emergency", // Link to department page
  },
  {
    id: 7,
    name: 'Laborototy ',
    imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/05/19/2-NHS-hopsital-afpget.jpg?quality=75&amp;width=1200&amp;auto=webp', // Path to department image
    link: "/Emergency", // Link to department page
  },

];

const DepartmentsPage = () => {
  return (
    <>
    <Navbar/>
    <div className='nmt'>
     <div className="kudya">
      <h1 id='hex12'>Departments</h1>
      <div className="card-kudya">
        {departments.map(department => (
          <div key={department.id} className="card">
            <img src={department.imageUrl} alt={department.name} className='kuzco' />
            <h2 className='denm'>{department.name}</h2>
            <Link href={department.link}>
            <div className='depthc'>
              <Button/>
            </div>
            </Link>
          </div>
        ))}
      </div> 
    </div>
   </div>
   <Footer/>
    </>
   
  );
};

export default DepartmentsPage;
