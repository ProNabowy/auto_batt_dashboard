import React from 'react'

export default function IdentityInputBox({ data, isDisapled }) {
    return (
        <div className='flex items-center justify-between mb-2'>

            <div className='w-[48%]'>

                <label className='text-[#8B6464] block'>{data.labelsName[0]}</label>

                <input type='text' defaultValue={data.type === "add" ? "" : data.defaultValue[0]} disabled={isDisapled} className='p-2 border border-[#8B6464] rounded-[5px] w-full' />

            </div>

            <div className='w-[48%]'>

                <label className='text-[#8B6464] block'>{data.labelsName[1]}</label>

                <input type='text' defaultValue={data.type === "add" ? "" : data.defaultValue[1]} disabled={isDisapled} className='p-2 border border-[#8B6464] rounded-[5px] w-full' />

            </div>

        </div>
    )
}
