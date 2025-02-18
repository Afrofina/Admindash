import React from 'react'
import { MainLayout } from '@/components/layouts'
import { SearchPartners, SidebarPartners, PersonalInfoPartners, VendorDetailPartner } from '@/components/organisms'
import { Button ,Text,Image} from '@/components/atoms'
export default function page() {
    return (
        <MainLayout pageTitle={'Partners'}>
            <div className='h-full flex'>
                <SidebarPartners />
                <div className='w-full h-full overflow-auto px-8 pt-6 pb-8 space-y-5'>
                    <PersonalInfoPartners title={'U-cargo agent details'} />
                    <div className='flex justify-center bg-[#F9F9FA] p-5 rounded-xl shadow py-32'>

                        <div className='w-1/2 space-y-6'>
                            <Text className="!text-black !text-[28px] custom-font !tracking-widest">
                            Would you like to accept or decline this users request to become a U-cargo agent 
                            </Text>
                            <div className='flex items-end space-x-3'>
                                <Button className='text-white !text-[18px] bg-black w-full text-center py-1 rounded-lg'>
                                    Accept Request
                                </Button>
                                <Button className='text-white !text-[18px] bg-[#FF0000] w-full text-center py-1 rounded-lg'>
                                    Decline
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center bg-[#F9F9FA] p-5 rounded-xl shadow py-32'>

                        <div className='w-1/2 space-y-4 flex flex-col items-center'>
                            <Image src="/admin/partners/confirm.svg" width={32}/>
                            <Text className="!text-black !text-[32px] custom-font !tracking-widest">
                            User accepted 
                            </Text>
                            <Text className="!text-black !text-[18px]">
                            You have accepted Jonathan’s request to become a 
U-cargo agent.
                            </Text>
                            <div className='w-full flex items-end space-x-3'>
                                <Button className='text-black !text-[18px] border border-black w-full text-center py-1.5 rounded-md'>
                                Notify via email
                                </Button>
        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
