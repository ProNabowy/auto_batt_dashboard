import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import React, { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ServicesView({ isDisapled, data }) {

    const description = 'Our Electricity Leakage Measurement service is designed to help battery website customers identify and prevent potential safety hazards caused by electricity leaks in their batteries. Our team of experienced technicians uses specialized equipment to measure the amount of electricity that may be leaking from a battery, and provides recommendations on how to address any issues that could be found';

    const toast = useRef(null);

    const [toggleShowBtn, setToggleShowBtn] = useState(false);

    const accept = () => {
        toast.current.show({ severity: 'success', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        setToggleShowBtn(false);
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        setToggleShowBtn(false);
    }

    const confirm = () => {
        confirmDialog({
            message: 'Are you sure you want to delete this item',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    return (

        <section className='grid grid-cols-12 gap-3'>

            <div className='col-span-4 flex items-center justify-center flex-col rounded-[6px] bg-white'>

                {
                    data.type === "view" && <img src={require('./view imges.png')} className='object-fill' />
                }
                {
                    data.type === "edit" &&
                    <Fragment>

                        <img src={require('./view imges.png')} className='object-fill' />

                        <div className='mt-10 flex items-center justify-center'>

                            <div className='flex items-center justify-center me-5'>

                                <label htmlFor='uploade-product-image' className='w-[50px] h-[50px] rounded-full bg-[#93072A] cursor-pointer  flex items-center justify-center text-white'>

                                    <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>

                                </label>

                                <input type='file' id='uploade-product-image' className='w-0 opacity-0 invisible' />

                            </div>

                            <div htmlFor='uploade-product-image' className='w-[50px] h-[50px] rounded-full bg-[#93072A] cursor-pointer  flex items-center justify-center text-white'>

                                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>

                            </div>

                        </div>

                    </Fragment>
                }
                {
                    data.type === "add" &&
                    <Fragment>

                        <img src={require('./default-add-img.png')} className='object-fill' />

                        <h1 className='font-medium text-center text-[25px] my-5'>upload images here </h1>

                        <div>

                            <div className='flex items-center justify-center'>

                                <label htmlFor='uploade-product-image' className='w-[50px] h-[50px] rounded-full bg-[#93072A] cursor-pointer  flex items-center justify-center text-white'>

                                    <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>

                                </label>

                                <input type='file' id='uploade-product-image' className='w-0 opacity-0 invisible' />

                            </div>
                        </div>

                    </Fragment>
                }

            </div>

            <div className='col-span-8 relative bg-white rounded-[10px] shadow p-5'>

                <h2 className='text-[20px] text-[#8B6464] font-medium mb-5'>view service information </h2>

                <div className='mb-8'>

                    <label className='text-[#8B6464] block'>Name</label>

                    <input type='text' defaultValue={data.type === "add" ? "" : 'BMS battery coding'} disabled={isDisapled} className='p-2 border border-[#8B6464] rounded-[5px] w-full' />

                </div>

                <div className='mb-8'>

                    <label className='text-[#8B6464] block'>description</label>

                    <textarea rows={7} defaultValue={data.type === "add" ? "" : description} disabled={isDisapled} className='p-2 border border-[#8B6464] rounded-[5px] w-full' />

                </div>

                <div className='flex items-center justify-between'>

                    <button className='px-5 p-3 text-[#FF1716] bg-[#FFE0D0] rounded-[5px] me-3' onClick={() => {
                        if (data?.type === "view") {
                            confirm()
                        }
                    }}>{data.btns.btn1}</button>

                    <Link className='flex-1' to={data?.type === "view" ? "/products/products-edit" : ""}>

                        <button className='font-medium w-full p-3 px-20 rounded-[5px] capitalize bg-[#FF1716] text-white'>{data?.btns?.btn2}</button>

                    </Link>

                </div>

            </div>

            <Toast ref={toast} />

            <ConfirmDialog />

        </section>
    )
}
