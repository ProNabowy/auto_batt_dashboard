import { Dropdown } from 'primereact/dropdown'
import React from 'react'

export default function IdentifyDropdownBox({ data, isDisapled, selectedOption, setSelectedOptions, options, isReversed }) {
    return (
        <div className={`flex items-center justify-between mb-2 ${isReversed ? "flex-row-reverse" : ""}`}>

            <div className='w-[48%]'>

                <label className='text-[#8B6464] block'>{data.labelsName[0]}</label>

                <Dropdown disabled={isDisapled} value={selectedOption} onChange={(e) => setSelectedOptions(e.value)} options={options} optionLabel="name"
                    placeholder={data.defaultValue[0]} className='w-full !border-[#8B6464]' />

            </div>

            <div className='w-[48%]'>

                <label className='text-[#8B6464] block'>{data.labelsName[1]}</label>

                <input type='text' defaultValue={data.type === "add" ? "" : data.defaultValue[1]} disabled={isDisapled} className='p-2 border border-[#8B6464] rounded-[5px] w-full' />

            </div>


        </div>
    )
}
