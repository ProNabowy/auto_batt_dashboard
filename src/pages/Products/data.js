import TableActions from '../../components/TableActions/TableActions';

export const data = [
    { id: 1, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 2, ['car-style']: 'image', price: 350, status: "DISACTIVE", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 3, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 4, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 5, ['car-style']: 'image', price: 350, status: "DISACTIVE", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 6, ['car-style']: 'image', price: 350, status: "DISACTIVE", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 7, ['car-style']: 'image', price: 350, status: "DISACTIVE", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 8, ['car-style']: 'image', price: 350, status: "DISACTIVE", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 9, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 10, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 11, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 12, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 13, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 14, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 15, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 16, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 17, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 18, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
    { id: 19, ['car-style']: 'image', price: 350, status: "active", representative: { name: "Edgar Jones", role: "Systems Administrator" }, marka: 'Hyundai', ['batt-company']: 'Moura' },
];

export const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export const idBodyTemplate = (rowData) => {
    return (
        <div className="flex align-items-center gap-2">
            <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
        </div>
    );
};

export const productBodyTemplate = (rowData) => {
    const representative = rowData.representative;

    return (
        <div className="flex  gap-2">
            <img alt={representative.name} src={require('./images/product-img.png')} className='w-[44px] h-[44px] rounded-full' />
            <div>

                <p className='mb-1 capitalize text-[13px] font-medium'>{representative.name}</p>
                <p className='text-[#CFCFCF] capitalize'>{representative.role?.slice(0, 21)}...</p>

            </div>
        </div>
    );
};

export const markaBodyTemplate = (rowData) => {

    return <h2 className='text-[#6f6b7d] p-2 ps-0 mb-2 text-center w-fit flex items-center rounded-[6px]'>
        <span className='me-2'>{rowData.marka}</span>
        <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3928 0.803665C5.10087 0.803665 0 3.35432 0 6.49977C0 9.64545 5.10087 12.1963 11.3928 12.1963C17.6842 12.1963 22.7853 9.64568 22.7853 6.49977C22.7851 3.35455 17.684 0.803665 11.3928 0.803665ZM10.3119 2.07145C11.6123 1.60586 15.4756 2.07145 16.9762 2.80138C17.4564 3.26788 14.8348 4.76663 11.7132 5.4163C7.25018 6.32781 9.37127 2.84163 10.3119 2.07145ZM2.64741 8.82084C1.66634 8.1124 -0.254694 6.08495 2.92762 3.97724C4.60864 2.98433 5.54906 2.76068 6.70963 2.51783C7.27027 2.39571 7.67038 2.53795 7.17002 2.96375C6.10948 4.07854 3.90801 7.76664 3.70818 8.57798C3.54764 9.12566 3.2277 9.26676 2.64741 8.82084ZM11.8125 11.1725C9.93169 11.3747 5.74934 10.7468 5.66896 10.2002C5.74934 8.8819 12.3131 6.693 13.4936 7.90911C13.9944 8.86154 13.0338 11.1115 11.8125 11.1725ZM21.3789 7.34084C20.8982 8.45587 19.2774 9.71314 15.8757 10.5645C15.3548 10.6852 15.1748 10.3614 15.5148 10.0573C16.0757 9.71291 18.7773 5.13251 19.1174 4.21987C19.3176 3.75337 19.6976 3.93653 19.9381 4.11856C21.019 4.82769 21.8393 5.98319 21.3789 7.34084Z" fill="#295BA7" />
        </svg>
    </h2>
};

export const companyBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d] p-2 px-4 mb-2 text-center w-fit rounded-[6px]'>{rowData['batt-company']}</h2>
};

export const carBodyTemplate = (rowData) => {
    return <img alt={rowData['car-style']} src={require('./images/car.png')} className='w-[60px]' />
};
export const priceBodyTemplate = (rowData) => {
    return <h2 className='text-black font-medium text-[16px]'>{rowData.price} EGP</h2>
};

export const statusBodyTemplate = (rowData) => {
    return (
        <div className={`${rowData.status === "active" ? "bg-[#d7eadc] text-[#28C76F]" : "bg-[#f6d7d8] text-[#ea5455]"} rounded-[6px] font-medium uppercase text-center p-2`}>
            {rowData.status}
        </div>
    )
};

export const actionsBodyTemplate = (rowData) => {

    return <TableActions rowData={rowData}></TableActions>

};

export const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};