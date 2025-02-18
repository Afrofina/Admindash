import React from 'react'
import { Button, Image, Text } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function profileDetail() {
    return (
        <div className='grid grid-cols-7 px-10 pt-8 space-x-5'>
            <Image src={'/admin/royals/profile.svg'} width={324} height={327} className={'w-full col-span-2'} />
            <div className='bg-[#F9F9FA] col-span-5 rounded-3xl p-8'>
                <div className='flex justify-between items-center pb-2 pt-4'>
                    <Text className="!text-[#333333] sf-pro !text-[24px]">
                        John Rahul Mendenz
                    </Text>
                    <Button className="bg-[#00FA02] text-black px-6 py-2 rounded-md">
                        Paid
                    </Button>
                </div>
                <div className='space-y-4 py-4'>
                    <TextIcon iconSrc="/settings/message.svg" iconWidth={30} text="Johnrahul@gmail.com" textClass="text-[#333333] sf-pro !text-[20px]" mainClass="flex items-center space-x-3" />
                    <TextIcon iconSrc="/settings/phone.svg" iconWidth={30} text="+233-559-256-3001" textClass="text-[#333333] sf-pro !text-[20px]" mainClass="flex items-center space-x-3" />
                </div>
                <Text className="text-[#333333] sf-pro !text-[20px]" align="left">
                    21st street oyarifa accra, madina , ghana
                </Text>
                <div className='flex justify-between items-center pt-4'>
                    <Text className="text-[#FF0000] sf-pro !text-[20px]">
                        Subscription date : 20th July 2023
                    </Text>
                    <Button className="border border-[#FF0000] text-[#FF0000] px-4 py-1.5 rounded-lg">
                        Remove subscriber.
                    </Button>
                </div>
            </div>
        </div>
    )
}
