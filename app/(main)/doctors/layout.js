import React from 'react'

export const metadata = {
  title: "Find Doctors - MediLink",
  description: "Browse and book appointments with top healthcare providers",
};

const DoctorsLayout = ({children}) => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='max-w-6xl mx-auto'>{children}</div>
    </div>
  )
}

export default DoctorsLayout
