import React from 'react'
import { MainLayout } from '@/components/layouts'
import { CardOrganismRoyals, TabsShipping, TableRoyals } from '@/components/organisms'
import { Text } from '@/components/atoms'
export default function page() {
  return (
    <MainLayout pageTitle={'Royal'}>
      <div className='h-full overflow-auto'>
        <CardOrganismRoyals />
        <div className='px-8 pb-12 pt-8'>
          <Text className="text-[#333333] custom-font !tracking-widest !text-[24px]" align="left">
            Subscriptions
          </Text>
          <Text className="text-[#333333] sf-pro !tracking-widest !text-[18px]" align="left">
            Manage all monthly and yearly subscriptions.
          </Text>
        </div>
        <TabsShipping tabs={['Paid', 'Pending payments', 'Overdue payments']} />
        <TableRoyals />
      </div>
    </MainLayout>
  )
}
