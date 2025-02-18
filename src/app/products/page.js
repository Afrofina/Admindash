import React from 'react'
import { MainLayout } from '@/components/layouts'
import { SearchPartners, ProductsTable } from '@/components/organisms'
import { Button } from '@/components/atoms'
import Link from 'next/link'
export default function page() {
  return (
    <MainLayout pageTitle={'Products'}>
      <div className='h-full flex'>
        <div className='w-full h-full overflow-auto px-3 pb-8'>
          <div className='flex justify-between items-center py-4'>
            <div className='w-1/3'>
              <SearchPartners placeholder={'Search product '} />
            </div>
            <Link href={'/products/new-product'}>
              <Button className="bg-black text-white sf-pro !font-extralight px-4 py-2 rounded-md" >
                Add new product
              </Button>
            </Link>
          </div>
          <ProductsTable />
        </div>
      </div>
    </MainLayout>
  )
}
