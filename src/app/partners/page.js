import React from 'react'
import { MainLayout } from '@/components/layouts'
import { SidebarPartners } from '@/components/organisms'
export default function page() {
  return (
    <MainLayout pageTitle={'Partners'}>
            <div className='h-full flex'>
                <SidebarPartners />
                <div className='w-full h-full overflow-auto'>
                    
                </div>
            </div>
        </MainLayout>
  )
}
