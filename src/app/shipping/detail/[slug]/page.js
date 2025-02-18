import React from 'react'
import { MainLayout } from '@/components/layouts'
import { TrackingShipping, ProfileShipping,ImagesShipping } from '@/components/organisms'
import { Text } from '@/components/atoms'
export default function page() {
    return (
        <MainLayout pageTitle={'Shipping'}>
            <div className='grid grid-cols-12 h-full overflow-auto px-8 py-8 gap-3'>
                <div className='col-span-5 space-y-5 h-full'>
                    <div className='bg-[#F9F9FA] px-3 py-4 rounded-xl shadow'>
                        <ProfileShipping />
                    </div>
                    <div className='bg-[#F9F9FA] px-3 py-4 rounded-xl shadow pt-8'>
                    <ImagesShipping/>
                    </div>
                </div>
                <div className='bg-[#F9F9FA] px-8 py-8 rounded-xl shadow col-span-7'>
                    <Text className="!text-[#101010] !text-[18px] custom-font !tracking-widest pb-6" align="left">
                        Tracking Number :D45DAFAD
                    </Text>
                    <Text className="!text-[#101010] !text-[18px] custom-font !tracking-widest pb-6" align="left">
                        Delivery Route
                    </Text>
                    <TrackingShipping steppers={[
                        {
                            title: 'Pick-up',
                            description: 'Your packaged has been picked-up by afrofina at Abena creek  block 6 Oyarifa, Accra Ghana ',
                            status: 'Successful',
                            icon: '/ship/ship.svg'
                        },
                        {
                            title: 'Out for delivery',
                            description: 'Package has reached our facility in Dallas Texas',
                            status: 'Successful',
                            icon: '/ship/ship.svg'
                        },
                        {
                            title: 'Estimated time for delivery',
                            description: '',
                            status: 'Successful',
                            icon: '/ship/ship.svg'
                        },
                        {
                            title: 'Pick-up',
                            description: 'Your packaged has been picked-up by afrofina at Abena creek  block 6 Oyarifa, Accra Ghana ',
                            status: 'Successful',
                            icon: '/ship/ship.svg'
                        }
                    ]} />
                </div>
            </div>
        </MainLayout>
    )
}
