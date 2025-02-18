import React from 'react'
import { Image, Text, Button } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function vendorDetail() {
    return (
        <div className='grid grid-cols-7 gap-16 bg-[#F9F9FA] p-5 rounded-xl shadow'>
            <div className='col-span-4 '>
                <Text className="text-black !text-[20px] sf-pro" align="left">
                    Vendor details
                </Text>
                <div className='space-y-2 pt-6'>
                    <div className='flex justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Business name
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Jodesign.co
                        </Text>
                    </div>
                    <div className='flex justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Store or business category
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Clothing
                        </Text>
                    </div>
                    <div className='flex justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Business email
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Jodesign@gmail.com
                        </Text>
                    </div>
                    <div className='flex justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Phone number
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            +233 559206177
                        </Text>
                    </div>
                </div>
                <Text className="text-black !text-[20px] sf-pro pt-10" align="left">
                    Vendor address
                </Text>
                <div className='space-y-2 pt-3'>
                    <div className='flex justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Address
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">

                            Jodesign street 203
                        </Text>
                    </div>
                    <div className='flex justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Apt, floor, building
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            blk 20
                        </Text>
                    </div>
                    <div className='flex justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            City
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Accra
                        </Text>
                    </div>
                    <div className='flex justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            State or region
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Greater accra
                        </Text>
                    </div>
                    <div className='flex justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Country
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Ghana
                        </Text>
                    </div>
                </div>
            </div>
            <div className='col-span-3 flex items-end space-x-3'>
                <Button className='text-white !text-[18px] bg-black w-full text-center py-1 rounded-lg'>
                    Accept Request
                </Button>
                <Button className='text-white !text-[18px] bg-[#FF0000] w-full text-center py-1 rounded-lg'>
                    Decline
                </Button>
            </div>
        </div>
    )
}
