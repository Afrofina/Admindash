import React from 'react'
import { CardShipping } from '../..'
export default function cardOrganism() {
  return (
    <div className='grid grid-cols-3 gap-6 p-8'>
        <CardShipping iconSrc="/admin/royals/dollar.svg" cardColor="!bg-[#FFAD7F]" title={'Total monthly subscriptions '} graph="Monthly subscriber count " value={'$40,000'} isGraph={true}/>
        <CardShipping iconSrc="/admin/royals/subscription.svg" cardColor="!bg-[#FFF980]" title={'Total monthly subscriptions '} graph='Monthly subscriber count ' value={'$40,000'} isGraph={true}/>
   
        <CardShipping iconSrc="/admin/shipping/wallet.svg" cardColor="border !border-[#333333]" title={'Overdue payments '} graph={'Overdue payment count'} value={'40,000'} isGraph={false}/>
   
    </div>
  )
}
