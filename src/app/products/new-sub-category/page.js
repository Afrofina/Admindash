import React from 'react'
import { MainLayout } from '@/components/layouts'
import { NewSubCategoryForm } from '@/components/organisms'
export default function page() {
    return (
        <MainLayout pageTitle={'Products'}>
            <div className='flex justify-center items-center h-full'>
                <div className='w-1/3'>
                    <NewSubCategoryForm />
                </div>
            </div>
        </MainLayout>
    )
}
