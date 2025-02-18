import React from 'react'
import { MainLayout } from '@/components/layouts'
import { ChatLog, MessageSupportAdmin } from "@/components/organisms"
export default function page() {
    return (
        <MainLayout pageTitle={'Support'}>
            <div className='grid grid-cols-7'>
                <div className='col-span-2'>
                    <ChatLog />
                </div>
                <div className='col-span-5'>
                    <MessageSupportAdmin />
                </div>
            </div>
        </MainLayout>
    )
}
