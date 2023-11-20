import React, { useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { renderHeader } from '../../assets/utlis/utlis';

import {
    data, cities, idBodyTemplate,
    productBodyTemplate, markaBodyTemplate, companyBodyTemplate,
    carBodyTemplate, priceBodyTemplate, statusBodyTemplate, actionsBodyTemplate, getCustomers
} from './data';
import { useCustomEffect } from '../../hooks';

const CustomerService = {
    getCustomersMedium: function () {
        return new Promise((resolve, reject) => {
            resolve(data);
        });
    }
};

export default function ProductsPage() {

    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);

    const { useReplacePagnitToText, useFetchData } = useCustomEffect();

    useReplacePagnitToText();
    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        });
        setGlobalFilterValue('');
    };

    useFetchData(CustomerService, setCustomers, getCustomers, setLoading, initFilters);

    const header = renderHeader(filters, setFilters, setGlobalFilterValue, globalFilterValue, selectedCity, setSelectedCity, cities);

    return (

        <DataTable value={customers} paginator showGridlines rows={7} loading={loading} dataKey="id"
        
            filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
            emptyMessage="No Products Found.">

            <Column field="id" header="ID" className='lg:w-[30px] !px-[15px]' body={idBodyTemplate} />

            <Column field='representative' header="PRODUCT NAME" className='lg:w-[100px] !px-[15px]' body={productBodyTemplate} />

            <Column field='marka' header="MARKA" className='lg:w-[100px] !px-[15px]' body={markaBodyTemplate} />

            <Column field='batt-company' header="BATT-COMPANY" className='lg:w-[50px] !px-[15px]' body={companyBodyTemplate} />

            <Column field="car-style" header="CAR STYLE" className='lg:w-[80px] !px-[15px]' body={carBodyTemplate} />

            <Column field="STATUS" header="STATUS" className='lg:w-[60px] !px-[15px]' body={statusBodyTemplate} />

            <Column field="Price" header="PRICE" className='lg:w-[80px] !px-[15px]' body={priceBodyTemplate} />

            <Column field="ACTION" header="ACTION" className='lg:w-[50px] !px-[15px]' body={actionsBodyTemplate} />

        </DataTable>

    );
}
