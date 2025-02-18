import { Image, Text } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
import React from 'react'

export default function personalDetail({title}) {
    return (
        <div className='grid grid-cols-3 gap-5'>
            <Image src={'/admin/partners/shop.svg'} className={'w-full'} width={333} height={317} />
            <div className='col-span-2 bg-[#F9F9FA] p-5 rounded-xl shadow'>
                <Text className="text-black !text-[20px] sf-pro" align="left">
                    {title}
                </Text>
                <div className='space-y-2 pt-6'>
                    <div className='flex justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Legal name
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Jodesign.co
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
                    <div className='flex justify-between'>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            Address
                        </Text>
                        <Text className="text-[#575757] sf-pro !text-[16px]">
                            21st street oyarifa accra, madina , ghana
                        </Text>
                    </div>
                </div>
                <div className='flex space-x-4 justify-end pt-16'>
                    <TextIcon text="Send email" iconWidth={30} iconSrc="/admin/partners/email.svg" textClass="text-black !text-[18px]" mainClass="flex space-x-3 px-3 border border-black py-1 rounded-lg cursor-pointer"/>
                    <TextIcon text="Contact " iconWidth={30} iconSrc="/admin/partners/call.svg" textClass="text-black !text-[18px]" mainClass="flex space-x-3 px-6 border border-black py-1 rounded-lg cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}
