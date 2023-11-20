import { Dropdown } from 'primereact/dropdown'
import React, { useRef, useState } from 'react';
import {
    markas, categories, carStyle,
    carStyleTamplate
} from './data';
import { Link } from 'react-router-dom';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';


export default function AddProduct({ }) {

    const [selectedMarka, setSelectedMarka] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [data, setData] = useState({});

    const [selectedCarStyle, setSelectedCarStyle] = useState({ name: <img src={require('./images/car.png')} className='w-[58px] m-auto' />, code: 11 });

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
        <section className='grid grid-cols-12 gap-5 product capitalize'>

            <div className='col-span-3 flex items-center justify-center flex-col rounded-[6px] p-5 border border-[#8B6464] bg-white'>

                <img src={require('./images/battry.png')} className='object-fill' />

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

            </div>

            <div className='col-span-9'>

                <div className='bg-white border border-[#8B6464] p-5 rounded-[6px]'>

                    <h2 className='text-[20px] font-medium text-[#8B6464] mb-5 capitalize'>view Battery Details</h2>

                    <div className='mb-5'>

                        <p className='font-medium text-[11px] text-[#8B6464]'>Name</p>

                        <input type='text' className='font-medium w-full text-[20px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                    </div>

                    <div className='mb-5'>

                        <p className='font-medium text-[11px] text-[#8B6464]'>description</p>

                        <input type='text' className='font-medium w-full border border-[#8f7b7b] p-2 capitalize text-[14px] text-black rounded-[5px]' />

                    </div>

                    <div className='mb-5 flex items-center justify-between'>

                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>reserve capacity ( rC )</p>

                            <input type='text' className='font-medium w-full text-[11px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>
                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>ampere hours ( aH )</p>

                            <input type='text' className='font-medium w-full text-[11px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>
                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>cold cranking ambs ( CCA )</p>

                            <input type='text' className='font-medium w-full text-[11px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>
                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>physical dimension</p>

                            <input type='text' className='font-medium text-[11px] w-full border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>

                    </div>

                    <div className='mb-5 flex items-center justify-between'>

                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>wet/drry</p>

                            <input type='text' className='font-medium w-full text-[11px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>
                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>voltage</p>

                            <input type='text' className='font-medium w-full text-[11px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>
                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>terminal code</p>

                            <input type='text' className='font-medium w-full text-[11px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>
                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>European norm ( en )</p>

                            <input type='text' className='font-medium w-full text-[11px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>

                    </div>

                    <div className='mb-5 flex items-center justify-between'>

                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>price</p>

                            <input type='text' className='font-medium w-full text-[11px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>
                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>weight * height * width * length</p>

                            <input type='text' className='font-medium w-full text-[11px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>
                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>company</p>

                            <input type='text' className='font-medium w-full text-[11px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>
                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>battery category</p>

                            <input type='text' className='font-medium w-full text-[11px] border border-[#8f7b7b] p-2 capitalize text-black rounded-[5px]' />

                        </div>

                    </div>

                    <div className='mb-5 flex items-center justify-between'>

                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>marka</p>

                            <Dropdown value={selectedMarka} onChange={(e) => setSelectedMarka(e.value)} options={markas} optionLabel="name"
                                placeholder="Hyundai" />

                        </div>

                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>Car Style</p>

                            <Dropdown value={selectedCarStyle} itemTemplate={carStyleTamplate} optionGroupTemplate={carStyleTamplate} onChange={(e) => setSelectedCarStyle(e.value)} options={carStyle} optionLabel="name"
                                placeholder={<img src={require('./images/car.png')} className='w-[58px] m-auto' />} />

                        </div>
                        <div className='flex-1 me-6'>

                            <p className='font-medium text-[11px] text-[#8B6464]'>category</p>

                            <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={categories} optionLabel="name"
                                placeholder="Hyundai" />

                        </div>

                    </div>

                </div>

                <div className='flex items-center justify-end my-10'>

                    <button onClick={confirm} className='font-medium p-3 px-20 rounded-[5px] capitalize bg-[#FFE0D0] text-[#FF1716] me-5'>Delete</button>

                    <Link to={data?.type === "view" ? "/products/products-edit" : ""}>

                        <button className='font-medium p-3 px-20 rounded-[5px] capitalize bg-[#FF1716] text-white'>Add</button>

                    </Link>

                </div>

            </div>

            <Toast ref={toast} />

            <ConfirmDialog />

        </section>
    )
}
