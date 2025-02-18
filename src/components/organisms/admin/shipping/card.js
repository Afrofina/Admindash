import React from 'react'
import { Text, Image } from '@/components/atoms'
import { TextIcon } from '@/components/molecules'
export default function Card({ iconSrc, cardColor, title, value, isGraph, graph }) {
    return (
        <div className={`${cardColor} p-5 lg:rounded-2xl rounded-0  pr-8 pt-6 pb-2`}>
            <div className={`flex items-start space-x-4`}>
                <Image src={iconSrc} width={76} />
                <div className='w-full'>
                    <div className='flex items-center justify-between '>
                        <Text align="left" className="text-[#333333] sf-pro !tracking-widest !text-[16px] ">
                            {title}
                        </Text>
                    </div>
                    <Text align="left" className="text-[#333333] custom-font !tracking-widest !text-[24px] py-3 ">
                        {value}
                    </Text>

                </div>
            </div>
            <Text align="left" className="text-[#333333] sf-pro !tracking-widest !text-[16px] pt-6">
                {graph}
            </Text>
            <div className='flex items-center justify-between '>
                <Text align="left" className="text-[#333333] custom-font !tracking-widest !text-[18px] py-3 ">
                    500
                </Text>
                {isGraph && <TextIcon iconSrc="/wallets/progress.svg" text="+5.5%" iconWidth={35} textClass="!text-[16px] text-[#119537] sf-pro " mainClass="flex items-center space-x-2 " />
                }
            </div>
        </div>
    )
}
Card.defaultProps = {
    graph: 'This Month'
}