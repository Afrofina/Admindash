'use client'
import React, { useEffect } from 'react'
import { SidebarPayments, TabsShipping, UtilitiesTable } from '@/components/organisms'
import { MainLayout } from '@/components/layouts'
import { Text, Image } from '@/components/atoms'
import Link from 'next/link'
import { useParams } from 'next/navigation';
export default function page() {
    const params = useParams()
    //same name as name of your file, can be [slug].js; [specialId].js - any name you want
    // const { slug } = router.query;
    useEffect(() => {
        console.log('s', params?.slug)
    }, [])
    return (
        <MainLayout pageTitle={'Payment'}>
            <div className='h-full flex'>
                <SidebarPayments />
                <div className='w-full pt-10 h-full overflow-y-auto'>
                    <Text className="custom-font text-[#333333] !text-[24px] uppercase !tracking-widest" align="center">
                        {params?.slug}
                    </Text>
                    <div className='flex justify-center space-x-3 items-center pt-3 pb-12'>
                        <Image src={'/admin/payments/alert.svg'} width={24} />
                        <Text className="text-black">
                            Check and make payment for all {params?.slug} bills
                        </Text>
                    </div>
                    <TabsShipping tabs={['Paid', 'Pending payments']} />

                    <UtilitiesTable link={
                        params?.slug === 'tv' ? '/payments/utilities/tv/'
                            : params?.slug === 'school' ? '/payments/utilities/school/'
                                : params?.slug === 'hospital' ? '/payments/utilities/hospital/'
                                    : params?.slug === 'electricity' ? '/payments/utilities/electricity/'
                                        : params?.slug === 'airtime' ? '/payments/utilities/airtime/'
                                            : params?.slug === 'internet' ? '/payments/utilities/internet/'
                                                : '#'} />
                </div>
            </div>
        </MainLayout>
    )
}
