import { faPen, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ServicesCard() {
    return (
        <div className='shadow rounded-[10px] overflow-hidden col-span-3 mb-5'>

            <img src={require('./Image.png')} className='w-full h-[233px] mb-3 object-fill' />

            <div className='p-4'>

                <h2 className='mb-3 font-medium'>Discovered on the Arabic computer</h2>

                <p className='text-[#4B465C] mb-3'>Some quick example text to build on the </p>

                <div className='flex items-center justify-between'>

                    <div className='flex items-center'>

                        <div className='w-[24px] h-[24px] me-3 bg-[#8B6464] flex items-center justify-center text-white rounded-full cursor-pointer text-[12px]'>

                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>

                        </div>

                        <div className='w-[24px] h-[24px] bg-[#8B6464] flex items-center justify-center text-white rounded-full cursor-pointer text-[12px]'>

                            <FontAwesomeIcon icon={faPen} />

                        </div>

                    </div>

                    <div className='w-[24px] h-[24px] bg-[#FF6050] flex items-center justify-center text-white rounded-full cursor-pointer text-[12px]'>

                        <FontAwesomeIcon icon={faTrash} />

                    </div>

                </div>

            </div>

        </div>
    )
}
