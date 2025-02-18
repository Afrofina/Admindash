import React from 'react'
import { MainLayout } from '@/components/layouts'
import { SearchPartners, SidebarPartners,PersonalInfoPartners,VendorDetailPartner } from '@/components/organisms'
import { Button } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout pageTitle={'Partners'}>
            <div className='h-full flex'>
                <SidebarPartners />
                <div className='w-full h-full overflow-auto px-8 pt-6 pb-8 space-y-5'>
                   <PersonalInfoPartners title={'Personal details'}/>
                   <VendorDetailPartner/>
                </div>
            </div>
        </MainLayout>
    )
}
