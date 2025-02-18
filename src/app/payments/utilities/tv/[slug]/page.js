import React from 'react'
import { SidebarPayments, TvDetails } from '@/components/organisms'
import { MainLayout } from '@/components/layouts'
export default function page() {
  return (
    <MainLayout pageTitle={'Payment'}>
      <div className='h-full flex '>
        <SidebarPayments />
        <div className='grid grid-cols-2 px-6 pt-10 w-full'>
          <TvDetails />
        </div>
      </div>
    </MainLayout>
  )
}
