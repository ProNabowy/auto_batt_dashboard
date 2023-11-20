import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import React, { useState } from 'react'
import DataTable from '../../components/DataTable/DataTable';
import { data, reels, gridItem } from './data';
import { Link } from 'react-router-dom';


export default function Reels() {

    const [selectedReels, setSelectedReels] = useState();

    const [date, setDate] = useState(null);


    return (
        <section className='reels'>

            <div className='flex items-center justify-between'>

                <Link to={'reels-add'} className='flex items-center p-3 px-5 rounded-[5px] bg-[#FFE0D0] text-[#B70B28]'>

                    <div className='w-[20px] h-[20px] rounded-full flex items-center justify-center border border-[#B70B28] me-2'>

                        <FontAwesomeIcon icon={faPlus} className='text-[11px]' />

                    </div>

                    <span>Add Reel</span>

                </Link>

                <div className='flex items-center justify-between max-w-[80%]'>


                    <div className='flex items-center me-5' style={{ width: "calc(95% / 3)" }}>

                        <label className='text-[#8B6464] block'>Search:</label>

                        <input className='ms-2 w-full p-2 px-3 border border-[#B70B28] rounded-[5px] placeholder:text-[#8B6464] bg-white' placeholder='Search' />

                    </div>

                    <div className='flex items-center me-3' style={{ width: "calc(95% / 3)" }}>

                        <label className='me-3 text-[#8B6464] font-medium'>Service:</label>

                        <div className='flex-1'>

                            <Dropdown value={selectedReels} className='w-full' onChange={(e) => setSelectedReels(e.value)} options={reels} optionLabel="name"
                                placeholder="select" />

                        </div>

                    </div>
                    <div className='flex items-center me-3' style={{ width: "calc(95% / 3)" }}>

                        <label className='me-3 text-[#8B6464] font-medium'>Service:</label>

                        <div className='flex-1'>

                            <Calendar value={date} placeholder='2/7/2023 - 12/7/2023' onChange={(e) => setDate(e.value)} showIcon />

                        </div>

                    </div>

                </div>

            </div>

            <div className='mt-10'>

                <DataTable data={data} gridItem={gridItem} countOfRows={12} />

            </div>


        </section>
    )
}
