import React from 'react'
import { MainLayout } from '@/components/layouts'
import { CardOrganismShipping, TableShipping, TabsShipping } from '@/components/organisms'
export default function page() {
    return (
        <MainLayout pageTitle={'Shipping'}>
            <div className='overflow-auto h-full'>
                <CardOrganismShipping />
                <TabsShipping tabs={['Delivered', 'On Route', 'Returned']} />
                <TableShipping />
            </div>
        </MainLayout>
    )
}
