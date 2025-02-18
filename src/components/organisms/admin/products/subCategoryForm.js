import React from 'react'
import { Text, Input, Textarea, Button } from '@/components/atoms'
export default function newProductForm() {
    return (
        <div className=''>
            <Text className="text-black !text-[24px] custom-font !tracking-widest">
                New sub category.
            </Text>
            <Text className="text-black !text-[18px] sf-pro">
                Add sub-category under this product category.
            </Text>
            <div className='space-y-5  pt-10'>
                <Text className="!text-[16px] text-black py-[16px] bg-[#CDCDCD]  px-2 rounded-md" align="left">
                    Jewelry
                </Text>
                <Input placeholder="Sub-category" />
                <Textarea placeholder="Tags" />
                <Button className="!text-white bg-black !text-[18px] rounded-sm w-full py-2">
                    Add sub-category
                </Button>
            </div>

        </div>
    )
}
