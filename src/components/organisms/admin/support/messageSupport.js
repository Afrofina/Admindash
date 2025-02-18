import React from 'react'
import { Image, Text, Input } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'

export default function messageSupport() {
    return (
        <div className='flex flex-col pl-10 pr-4 pt-6 h-screen pb-24'>
            <div className='bg-[#333333] px-4 py-3 rounded-md flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <Image src={"/admin/support/avatar.svg"} width={42} />
                    <Text className="!text-[14px] custom-font !tracking-widest text-white" align="left">
                        Erica Terrey
                    </Text>
                </div>
                <Text className="!text-[16px] custom-font !tracking-widest text-white pr-5">
                    Vendors
                </Text>
            </div>

            <div className='flex-grow w-full px-4 pt-5 space-y-4 overflow-auto'>
                <TextIcon iconSrc="/support/chat.svg" iconWidth={38} text="Hey, where are you" textClass="text-black bg-[#EFEFEF] !text-[18px] sf-pro py-2 px-4 rounded-md" mainClass="flex items-center space-x-3 py-2" />
                <div className='flex justify-end'>
                    <Text className="text-white bg-[#6A00D3] !text-[18px] sf-pro py-2 px-4 rounded-md">
                        Almost at the airport
                    </Text>
                </div>
                <TextIcon iconSrc="/support/chat.svg" iconWidth={38} text="Alright text let me know when you arrive" textClass="text-black bg-[#EFEFEF] !text-[18px] sf-pro py-2 px-2 rounded-md" mainClass="flex items-center space-x-3 py-2" />
            </div>

            <div className='flex items-center space-x-2 border border-[#929292] rounded-md px-3 py-3 mt-4'>
                <Image src="/support/attach.svg" width={24} />
                <Input className="bg-transparent hover:outline-none placeholder-[#969696] text-[20px] w-full" placeholder="write a message " />
            </div>
        </div>
    )
}
