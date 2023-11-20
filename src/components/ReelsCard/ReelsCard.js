import { faCaretRight, faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ReelsCard() {
    return (
        <div className='rounded-[10px] overflow-hidden shadow-lg bg-white'>

            <div className='px-1 p-3 relative min-h-[274px]'>

                <img src={require('./Rectangle 90.png')} alt='' className='w-full h-full select-none absolute left-0 top-0 object-fill' />

                <div className='w-[38px] h-[38px] cursor-pointer rounded-full flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10' style={{ background: "linear-gradient(#FF0303, #FF0303)" }}>

                    <FontAwesomeIcon icon={faCaretRight} className='text-[20px] text-white' />

                </div>

                <div className='relative z-10'>

                    <div className='flex items-center flex-wrap'>

                        <p className='text-[#DB1020] bg-white rounded-[20px] text-[10px] p-1 px-2 me-2 mb-2 font-medium'>Road emergency</p>
                        <p className='text-[#DB1020] bg-white rounded-[20px] text-[10px] p-1 px-2 me-2 mb-2 font-medium'>Road emergency</p>

                    </div>

                </div>

            </div>

            <div className='p-3 flex items-center justify-between'>

                <div>
                    <h2 className='font-medium capitalize mb-2'>reel name </h2>
                    <p className='text-[10px] text-[#8B6464] font-medium'>02 November,2020</p>
                </div>

                <div className='flex items-center'>

                    <div className='w-[27px] h-[27px] cursor-pointer bg-[#8B6464] text-white rounded-full text-[12px] flex items-center justify-center me-2'>

                        <FontAwesomeIcon icon={faEye} />

                    </div>

                    <div className='w-[27px] h-[27px] cursor-pointer bg-[#8B6464] text-white rounded-full text-[12px] flex items-center justify-center me-2'>

                        <FontAwesomeIcon icon={faPen} />

                    </div>

                    <div className='w-[27px] h-[27px] cursor-pointer bg-[#FF6050] text-white rounded-full text-[12px] flex items-center justify-center'>

                        <FontAwesomeIcon icon={faTrash} />

                    </div>

                </div>


            </div>

        </div>
    )
};
