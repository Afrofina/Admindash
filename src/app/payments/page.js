import React from 'react'
import { SidebarPayments } from '@/components/organisms'
import { MainLayout } from '@/components/layouts'
export default function page() {
  return (
    <MainLayout pageTitle={'Payment'}>
      <div className='h-full'>
        <SidebarPayments/>
      </div>
    </MainLayout>
  )
}
