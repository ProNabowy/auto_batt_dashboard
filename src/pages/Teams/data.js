import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TableActions from '../../components/TableActions/TableActions';
import { faPen } from '@fortawesome/free-solid-svg-icons';
export const reels = [
    { name: 'select 1', code: 'NY' },
    { name: 'select 2', code: 'RM' },
    { name: 'select 3', code: 'LDN' },
    { name: 'select 4', code: 'IST' },
    { name: 'select 5', code: 'PRS' }
];

export const data = [
    { id: 1, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Mahmoud Nabowy", role: "Frontend Developer" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 2, jobDescription: 'Customer Service', price: 350, status: "DISACTIVE", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 3, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 4, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 5, jobDescription: 'Customer Service', price: 350, status: "DISACTIVE", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 6, jobDescription: 'Customer Service', price: 350, status: "DISACTIVE", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 7, jobDescription: 'Customer Service', price: 350, status: "DISACTIVE", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 8, jobDescription: 'Customer Service', price: 350, status: "DISACTIVE", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 9, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 10, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 11, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 12, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 13, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 14, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 15, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 16, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 17, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 18, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
    { id: 19, jobDescription: 'Customer Service', price: 350, status: "active", representative: { name: "Linnie Summers", role: "Systems Administrator" }, email: 'Hal_Murazik@hotmail.com', createDate: '04/25/2018' },
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

export const userNameBodyTemplate = (rowData) => {
    const representative = rowData.representative;

    return (
        <div className="flex  gap-2">
            <img alt={representative.name} src={require(representative.name === "Mahmoud Nabowy" ? './nabowy.jpg' : './user.png')} className='w-[44px] h-[44px] rounded-full object-fill' />
            <div>

                <p className='mb-1 capitalize text-[13px] font-medium'>{representative.name}</p>
                <p className='text-[#CFCFCF] capitalize'>{representative.role?.slice(0, 21)}...</p>

            </div>
        </div>
    );
};

export const emailBodyTemplate = (rowData) => {

    return <h2 className='text-[#6f6b7d] p-2 ps-0 mb-2 text-center w-fit flex items-center rounded-[6px]'>
        <span className='me-2'>{rowData.email}</span>
    </h2>
};

export const createDateodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d] p-2 px-4 mb-2 text-center w-fit rounded-[6px]'>{rowData.createDate}</h2>
};

export const jobDescriptionBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d] mb-2 text-center w-fit rounded-[6px]'>{rowData.jobDescription}</h2>
};


export const actionsBodyTemplate = (rowData) => {

    return (
        <div className='flex items-center justify-center'>

            <TableActions asTrash={true} style={{ color: "#790101" }} rowData={rowData}></TableActions>

            <FontAwesomeIcon icon={faPen} className='text-[20px] text-[#790101] cursor-pointer  ms-5' />

        </div>
    )

};

export const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};