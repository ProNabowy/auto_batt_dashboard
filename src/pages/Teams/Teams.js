import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState } from 'react';
import {
    data, idBodyTemplate, reels,
    userNameBodyTemplate, emailBodyTemplate, createDateodyTemplate,
    jobDescriptionBodyTemplate, actionsBodyTemplate, getCustomers
} from './data';
import { useCustomEffect } from '../../hooks';
import { Link } from 'react-router-dom';

const CustomerService = {
    getCustomersMedium: function () {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }
};

export default function Reels() {

    const [selectedReels, setSelectedReels] = useState();

    const [date, setDate] = useState(null);


    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);


    const { useReplacePagnitToText, useFetchData } = useCustomEffect();

    useReplacePagnitToText();
    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        });
    };

    useFetchData(CustomerService, setCustomers, getCustomers, setLoading, initFilters);


    return (
        <section className='reels'>

            <div className='flex items-center justify-between'>

                <Link to={'teams-add'} className='flex items-center p-3 px-5 rounded-[5px] bg-[#FFE0D0] text-[#B70B28]'>

                    <div className='w-[20px] h-[20px] rounded-full flex items-center justify-center border border-[#B70B28] me-2'>

                        <FontAwesomeIcon icon={faPlus} className='text-[11px]' />

                    </div>

                    <span>Add Member</span>

                </Link>

                <div className='flex items-center justify-between max-w-[80%]'>


                    <div className='flex items-center me-5' style={{ width: "calc(95% / 3)" }}>

                        <label className='text-[#8B6464] block'>Search:</label>

                        <input className='ms-2 w-full p-2 px-3 border border-[#B70B28] rounded-[5px] placeholder:text-[#8B6464] bg-white' placeholder='Search' />

                    </div>

                    <div className='flex items-center me-3' style={{ width: "calc(95% / 3)" }}>

                        <label className='me-3 text-[#8B6464] font-medium'>J.D:</label>

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

                <DataTable value={customers} paginator showGridlines rows={7} loading={loading} dataKey="id"

                    filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
                    emptyMessage="No Products Found.">

                    <Column field="id" header="ID" className='lg:w-[30px] !px-[15px]' body={idBodyTemplate} />

                    <Column field='representative' header="Full Name" className='lg:w-[200px] !px-[15px]' body={userNameBodyTemplate} />

                    <Column field='email' header="Email" className='lg:w-[100px] !px-[15px]' body={emailBodyTemplate} />

                    <Column field='createDate' header="Create Date" className='lg:w-[50px] !px-[15px]' body={createDateodyTemplate} />

                    <Column field="jobDescription" header="Job Description" className='lg:w-[80px] !px-[15px]' body={jobDescriptionBodyTemplate} />

                    <Column field="ACTION" header="ACTION" className='lg:w-[50px] !px-[15px]' body={actionsBodyTemplate} />

                </DataTable>


            </div>


        </section>
    )
}
