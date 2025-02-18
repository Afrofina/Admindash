import React from 'react'
import { Text,Input, Textarea, Button } from '@/components/atoms'
export default function newProductForm() {
    return (
        <div className=''>
            <Text className="text-black !text-[24px] custom-font !tracking-widest">
                New product category.
            </Text>
            <Text className="text-black !text-[18px] sf-pro">
                Add new product category and sub-category.
            </Text>
            <div className='space-y-5  pt-10'>
            <Input placeholder="Category name "/>
            <Input placeholder="Sub-category"/>
            <Textarea placeholder="Tags"/>
            <Button className="!text-white bg-black !text-[18px] rounded-sm w-full py-2">
            Add Product 
            </Button>
            </div>

        </div>
    )
}
