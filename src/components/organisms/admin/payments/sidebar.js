'use client'
import React from 'react'
import { TextIcon } from '@/components/molecules'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function ShipSidebar() {
    const pathname = usePathname()
    // console.log("Current route:", pathname);
    return (
        <div className='w-[175px] bg-[#FEFBFF] border-r border-black h-full pt-4 lg:block hidden'>
            <Link href={'/payments/utilities'}>
                <TextIcon iconClasses=''
                    mainClass={`${pathname?.includes('/payments') && pathname?.includes('/utilities') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center  pl-5 space-x-1 px-2 py-2 rounded-full `}
                    text="Utilities"
                    textClass="text-black  text-sm pl-1"
                    textVariant="subtitle2"
                    iconSrc="/admin/payments/utilities.svg"
                />

            </Link>
            <Link href={'/ecom/ship/u-cargo-shipper'}>
                <TextIcon iconClasses=''
                    mainClass={`${pathname?.includes('/u-cargo-shipper') && pathname?.includes('/ship') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center  pl-5 space-x-1 px-2 py-2 rounded-full `}
                    text="Send money"
                    textClass="text-black  text-sm pl-1"
                    textVariant="subtitle2"
                    iconSrc="/admin/payments/money.svg"
                />

            </Link>
            <Link href={'/ecom/ship/standard-shipping'}>
                <TextIcon iconClasses=''
                    mainClass={`${pathname?.includes('/standard-shipping') && pathname?.includes('/ship') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center  pl-5 space-x-1 px-2 py-2 rounded-full `}
                    text="Withdrawals"
                    textClass="text-black  text-sm pl-1"
                    textVariant="subtitle2"
                    iconSrc="/admin/payments/withdrawel.svg"
                />

            </Link>
        </div>
    )
}
