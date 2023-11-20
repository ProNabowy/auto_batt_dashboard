import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Header() {
    return (
        <header className='relative shadow rounded-[10px] overflow-hidden mb-5'>

            <input type='text' className='w-full p-3 ps-10' placeholder='Search (Ctrl+/)' />

            <FontAwesomeIcon icon={faSearch} className='absolute left-2 text-[#8B6464] top-[50%] translate-y-[-50%]'></FontAwesomeIcon>

        </header>
    )
}
