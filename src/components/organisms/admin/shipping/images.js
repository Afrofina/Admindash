import React from 'react'
import { Text, Image, Button } from '@/components/atoms'
import Link from 'next/link'
export default function Images() {
    return (
        <div>
            <div className='w-full'>
                <Text className="!text-[#101010] !text-[18px] custom-font !tracking-widest pb-6" align="left">
                Package content.
                </Text>
                <Text className="sf-pro !text-[18px] text-black" align="left">
                    3 canned coke packets
                </Text>
                <div className='!w-[136px] !h-[136px] px-3 pt-2 mt-4' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
                    <div className='flex space-x-1 justify-end'>
                        <Image src={"/ship/subtractWhite.svg"} width={20} />
                        <Image src={"/ship/addWhite.svg"} width={20} />
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4 border-t border-black pt-4 mt-4'>
                    <div className='!w-full !h-[74px]' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                    </div>
                    <div className='!w-full !h-[74px]' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                    </div>
                    <div className='!w-full !h-[74px]' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                    </div>
                    <div className='!w-full !h-[74px]' style={{ backgroundImage: `url('/ship/package.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>

                    </div>
                </div>
                <div className='flex justify-center pt-6' >
                    <Link href={'/ecom/ship/track-shipping/view-images'}>
                        <Button className='text-black text-[18px] sf-pro border border-black py-2 px-8 rounded-sm'>
                            View images
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
