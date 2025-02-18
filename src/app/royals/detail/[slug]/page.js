import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ProfileDetailRoyals, TableDetailRoyals } from "@/components/organisms"
import { Text } from '@/components/atoms'
export default function detail() {
  return (
    <MainLayout pageTitle={'Royal'}>
      <div className='h-screen overflow-auto pb-12'>
        <ProfileDetailRoyals />
        <div className='px-10 pt-10 pb-6'>
          <Text className="custom-font text-[#333333] !tracking-widest !text-[24px]" align="left">
            Subscriptions
          </Text>
          <Text className="text-[#333333] !text-[18px]" align="left">
            Track and download subscription invoices.
          </Text>
        </div>
        <TableDetailRoyals />
      </div>
    </MainLayout>
  )
}
