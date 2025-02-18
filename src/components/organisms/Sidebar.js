'use client'
import React from 'react'
import { Image, Text } from '../atoms'
import { TextIcon } from '../molecules'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Sidebar() {
    const pathname = usePathname()
    return (
        <div className='bg-[#FEFBFF] shadow-md relative h-full flex flex-col w-full'>
            <div className='border-r border-black pt-8'>
                <Image src={'/logo-short.svg'} width={120} height={120} className={'mx-auto '} />
            </div>
            <div className='flex justify-end -mr-[9.5px] -mt-[1px] z-[99999] '>
                <Image src={'/sidebar/left.svg'} width={21} height={21} className='cursor-pointer' />
            </div>
            <div className=' pt-2 border-r border-black flex-grow relative'>
                
            <Link href={'/shipping'} className='w-full'>
                    <TextIcon iconClasses=''
                        mainClass={`${pathname?.includes('/shipping') ? 'bg-primary' : ''} pb-1 flex items-center space-x-1 pl-6 py-2 rounded-full w-full`}
                        text="Shipping"
                        textClass="text-black  text-sm pl-1"
                        textVariant="subtitle2"
                        iconSrc="/sidebar/ship.svg"
                    />

                </Link>
                <Link href={'/partners/vendors'}>
                    <TextIcon iconClasses='' mainClass={`${pathname?.includes('/partners') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center space-x-1 pl-6 py-2 rounded-full`} text="Partners" textClass="text-black  text-sm pl-1" textVariant="subtitle2" iconSrc="/sidebar/partner.svg" />
                </Link>

                <Link href={'/products'}>
                    <TextIcon iconClasses=''
                        mainClass={`${pathname?.includes('/products') ? 'bg-primary' : ''}  pb-1 mt-8 flex items-center space-x-1 pl-6 py-2 rounded-full `}
                        text="Products"
                        textClass="text-black  text-sm pl-1"
                        textVariant="subtitle2"
                        iconSrc="/sidebar/shop.svg"
                    />

                </Link>
                <Link href={'/royals'}>
                    <TextIcon iconClasses=''
                        mainClass={`${pathname?.includes('/royals') ? 'bg-primary' : ''}  pb-1 mt-8 flex items-center space-x-1 pl-6 py-2 rounded-full `}
                        text="Royals"
                        textClass="text-black  text-sm pl-1"
                        textVariant="subtitle2"
                        iconSrc="/sidebar/royal.svg"
                    />

                </Link>
                <Link href={'/payments/utilities'}>
                    <TextIcon iconClasses=''
                        mainClass={`${pathname?.includes('/payments') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center space-x-1 pl-6 py-2 rounded-full `}
                        text="Payments"
                        textClass="text-black  text-sm pl-1"
                        textVariant="subtitle2"
                        iconSrc="/sidebar/wallet.svg"
                    />

                </Link>
                <Link href={'/support'}>
                    <TextIcon iconClasses='-mt-1'
                        mainClass={`${pathname?.includes('/support') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center space-x-1 pl-6 py-2 rounded-full`}
                        text="Support"
                        textClass="text-black  text-sm pl-1"
                        textVariant="subtitle2"
                        iconSrc="/sidebar/support.svg" />


                </Link>
                <div className='absolute bottom-0 pb-4'>
                    <Link href={'/ecom/settings'}>
                        <TextIcon iconClasses='-mt-1'
                            mainClass={`${pathname?.includes('/settings') ? 'bg-primary' : ''} pb-1 mt-8 flex items-center space-x-1 pl-6 py-2 rounded-full`}
                            text="Settings"
                            textClass="text-black  text-sm"
                            textVariant="subtitle2"
                            iconSrc="/sidebar/settings.svg" />


                    </Link>
                    <Link href={'/ecom/auth/sign-in'}>
                        <TextIcon iconClasses='-mt-1'
                            mainClass={`${pathname === '/bank-accounts' ? 'font-medium border-b-2 border-white' : ''} pb-1 mt-4 flex items-center space-x-1 pl-6 py-2 rounded-full`}
                            text="Logout"
                            textClass="text-black  text-sm"
                            textVariant="subtitle2"
                            iconSrc="/sidebar/logout.svg" />


                    </Link>
                </div>
            </div>
        </div>
    )
}
