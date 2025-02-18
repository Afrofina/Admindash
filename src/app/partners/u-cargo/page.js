import React from 'react'
import { MainLayout } from '@/components/layouts'
import { SearchPartners, SidebarPartners, TableUcargoPartners } from '@/components/organisms'
import { Button } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout pageTitle={'Partners'}>
            <div className='h-full flex'>
                <SidebarPartners />
                <div className='w-full h-full overflow-auto px-3 pb-8'>
                    <div className='flex justify-between items-center py-4'>
                        <div className='w-1/3'>
                            <SearchPartners placeholder={'Search u-cargo agent'} />
                        </div>
                        <div className='flex space-x-3'>
                            <Button className="bg-black text-white sf-pro !font-extralight px-4 py-2 rounded-md" >
                                Accept
                            </Button>
                            <Button className="border border-black text-black sf-pro !font-extralight px-4 py-2 rounded-md" >
                                Decline
                            </Button>
                        </div>
                    </div>
                    <TableUcargoPartners />
                </div>
            </div>
        </MainLayout>
    )
}
