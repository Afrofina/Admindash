import React from 'react'
import { SidebarPayments } from '@/components/organisms'
import { MainLayout } from '@/components/layouts'
import { Text, Image } from '@/components/atoms'
import Link from 'next/link'
export default function page() {
    const data = [{
        icon: '/admin/payments/tv.svg',
        text: 'Tv',
        link: '/payments/utilities/tv'
    },
    {
        icon: '/admin/payments/school.svg',
        text: 'School',
        link: '/payments/utilities/school'
    },
    {
        icon: '/admin/payments/hospital.svg',
        text: 'Hospital',
        link: '/payments/utilities/hospital'
    },
    {
        icon: '/admin/payments/airtime.svg',
        text: 'Airtime',
        link: '/payments/utilities/airtime'
    },
    {
        icon: '/admin/payments/wifi.svg',
        text: 'Internet',
        link: '/payments/utilities/internet'
    },
    {
        icon: '/admin/payments/electricty.svg',
        text: 'electricity',
        link: '/payments/utilities/electricity'
    },
]
    return (
        <MainLayout pageTitle={'Payment'}>
            <div className='h-full flex'>
                <SidebarPayments />
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='grid grid-cols-3 gap-8 w-8/12'>
                        {data?.map((val) => (
                            <div className='flex flex-col space-y-6 items-center border border-[#FAECFF] py-4 rounded-md cursor-pointer'>
                                <Image src={val?.icon} width={30} height={30} />
                                <Text className="!text-[22px] text-black sf-pro font-medium">
                                    {val?.text}
                                </Text>
                                <Link href={val?.link}>
                                    <Text className="!text-[18px] text-[#333333] sf-pro !font-extralight">
                                        Check payments
                                    </Text>
                                </Link>
                            </div>))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
