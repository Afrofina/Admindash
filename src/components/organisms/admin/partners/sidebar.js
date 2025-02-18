'use client'
import React from 'react'
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function SidebarPartners() {
    const pathname = usePathname()
    // console.log("Current route:", pathname);
    return (
        <div className='w-[187px] bg-white border-r border-black pt-0 lg:block hidden'>
            <Link href={'/partners/vendors'}>
                <TextIcon iconClasses=''
                    mainClass={`${!pathname?.includes('parnters') && pathname?.includes('/vendors') ? 'bg-primary' : ''} pb-1 mt-4 flex items-center space-x-1 pl-5 py-2 rounded-full `}
                    text="Vendors"
                    textClass="text-black  text-sm pl-1"
                    textVariant="subtitle2"
                    iconSrc="/admin/partners/vendors.svg"
                />

            </Link>
            <Link href={'/partners/u-cargo'}>
                <TextIcon iconClasses=''
                    mainClass={`${pathname?.includes('u-cargo') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center space-x-1 pl-5  py-2 rounded-full `}
                    text="U-Cargo"
                    textClass="text-black  text-sm pl-1"
                    textVariant="subtitle2"
                    iconSrc="/admin/partners/ucargo.svg"
                />

            </Link>
        </div>
    )
}
