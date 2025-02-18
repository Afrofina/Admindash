import React from 'react'
import { MainLayout } from '@/components/layouts'
import { SearchPartners, SidebarPartners,PartnersVendorsTable } from '@/components/organisms'
import { Button } from '@/components/atoms'
export default function page() {
  return (
    <MainLayout pageTitle={'Partners'}>
            <div className='h-full flex'>
                <SidebarPartners />
                <div className='w-full h-full overflow-auto px-3 pb-8'>
                     <div className='flex justify-between items-center py-4'>
                        <div className='w-1/3'>
                        <SearchPartners placeholder={'Search vendor'}/>
                        </div>
                        <Button className="bg-black text-white sf-pro !font-extralight px-4 py-2 rounded-md" >
                        Requests
                        </Button>
                     </div>
                     <PartnersVendorsTable/>
                </div>
            </div>
        </MainLayout>
  )
}
