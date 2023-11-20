import { Dropdown } from 'primereact/dropdown'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ServicesCard from '../../components/ServicesCard/ServicesCard';

export default function Services() {

  const [selectedService, setSelectedService] = useState();

  const service = [
    { name: 'select 1', code: 'NY' },
    { name: 'select 2', code: 'RM' },
    { name: 'select 3', code: 'LDN' },
    { name: 'select 4', code: 'IST' },
    { name: 'select 5', code: 'PRS' }
  ];

  return (
    <section>

      <div className='flex items-center justify-between'>

        <Link to={'services-add'} style={{ width: 'fit-content', marginRight: "20px" }} >
          <div className='bg-[#FFE0D0] text-[#B70B28] p-4 py-2 w-fit rounded-[6px] flex justify-between items-center'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.74998 4.8001C8.74998 4.38588 8.41419 4.0501 7.99998 4.0501C7.58576 4.0501 7.24998 4.38588 7.24998 4.8001L8.74998 4.8001ZM7.24998 11.2001C7.24998 11.6143 7.58576 11.9501 7.99998 11.9501C8.41419 11.9501 8.74998 11.6143 8.74998 11.2001H7.24998ZM11.2 8.7501C11.6142 8.7501 11.95 8.41431 11.95 8.0001C11.95 7.58588 11.6142 7.2501 11.2 7.2501V8.7501ZM4.79998 7.2501C4.38576 7.2501 4.04998 7.58588 4.04998 8.0001C4.04998 8.41431 4.38576 8.7501 4.79998 8.7501V7.2501ZM13.65 8.0001C13.65 11.1205 11.1204 13.6501 7.99998 13.6501V15.1501C11.9488 15.1501 15.15 11.9489 15.15 8.0001H13.65ZM7.99998 13.6501C4.87957 13.6501 2.34998 11.1205 2.34998 8.0001H0.849976C0.849976 11.9489 4.05114 15.1501 7.99998 15.1501V13.6501ZM2.34998 8.0001C2.34998 4.87969 4.87957 2.3501 7.99998 2.3501V0.850098C4.05114 0.850098 0.849976 4.05126 0.849976 8.0001H2.34998ZM7.99998 2.3501C11.1204 2.3501 13.65 4.87969 13.65 8.0001H15.15C15.15 4.05126 11.9488 0.850098 7.99998 0.850098V2.3501ZM7.24998 4.8001L7.24998 8.0001H8.74998L8.74998 4.8001L7.24998 4.8001ZM7.24998 8.0001V11.2001H8.74998V8.0001H7.24998ZM11.2 7.2501H7.99998V8.7501H11.2V7.2501ZM7.99998 7.2501H4.79998V8.7501H7.99998V7.2501Z" fill="white" />
            </svg>
            <span className='ms-2 text-[12px]'>Add Services</span>
          </div>
        </Link>


        <div className='flex items-center'>

          <div className='flex items-center me-3'>

            <label className='me-3 text-[#8B6464] font-medium'>Search:</label>

            <input type='text' className='bg-white border border-[#DBDADE]  placeholder:text-[#E1CBCB] p-2 rounded-[3px]' placeholder='Search by id' />

          </div>
          <div className='flex items-center me-3'>

            <label className='me-3 text-[#8B6464] font-medium'>Service:</label>

            <Dropdown value={selectedService} onChange={(e) => setSelectedService(e.value)} options={service} optionLabel="name"
              placeholder="select" />

          </div>

        </div>

      </div>
      <div className='grid grid-cols-12 gap-3 my-10'>

        {
          [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
            return <ServicesCard key={item} />
          })
        }

      </div>

    </section>
  )
}
