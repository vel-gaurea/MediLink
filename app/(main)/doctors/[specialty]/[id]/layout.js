import { getDoctorById } from '@/actions/appointments';
import PageHeader from '@/components/page-header';
import { redirect } from 'next/navigation';
import React from 'react'


export async function generateMetadata({ params }) {
    const { id } = await params;
    const { doctor } = await getDoctorById(id);

    return {
        title: `Dr ${doctor.name} - MediLink`,
        description: `Book an appointment with Dr. ${doctor.name}, ${doctor.specialty}
        specialist with ${doctor.experience} years of experience`
    }
}


const DoctorProfileLayout = async ({ children, params }) => {
    const { id } = await params;
    const { doctor } = await getDoctorById(id);

    if (!doctor) redirect("/doctors");

    return (
        <div className='container mx-auto'>
            <PageHeader
                title={"Dr." + doctor.name}
                backLink={`/doctors/${doctor.specialty}`}
                backLabel={`Back to ${doctor.specialty}`}
            />
            {children}
        </div>
    )
}

export default DoctorProfileLayout
