import { faClose, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import React, { Fragment,  useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const categories = [
    { name: 'Road Emergency 1', code: 'NY' },
    { name: 'Road Emergency 2', code: 'RM' },
    { name: 'Road Emergency 3', code: 'LDN' },
    { name: 'Road Emergency 4', code: 'IST' },
    { name: 'Road Emergency 5', code: 'PRS' }
];

export default function ReelsView({ isDisapled, data }) {

    const toast = useRef(null);

    const [selectedCategory, setSelectedCategory] = useState();

    const [toggleShowBtn, setToggleShowBtn] = useState(false);

    const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);

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

                <h2 className='text-[20px] text-[#8B6464] font-medium mb-5'>view Real </h2>

                <div className='mb-8'>

                    <label className='text-[#8B6464] font-medium text-[11px] mb-1 block'>Name</label>

                    <input type='text' defaultValue={data.type === "add" ? "" : 'Premium - Mtx-49/h8 '} disabled={isDisapled} className='p-2 font-medium text-[20px] border border-[#8B6464] rounded-[5px] w-full' />

                </div>

                <div className='mb-8 grid grid-cols-12 gap-5'>

                    <div className='col-span-5'>

                        <label className='text-[#8B6464] font-medium text-[11px] mb-1 block'>Select Category</label>

                        <Dropdown value={selectedCategory} disabled={isDisapled} className='w-full' onChange={(e) => {
                            setSelectedCategory(e.value);
                            setSelectedCategoryItems((prev) => Array.from(new Set([...prev, e.value])));
                        }} options={categories} optionLabel="name"
                            placeholder="select" />

                    </div>

                    <div className='col-span-7'>

                        <label className='text-[#8B6464] font-medium text-[11px] mb-1 block'>Select Category</label>

                        <div className='border border-[#8B6464] rounded-[5px] p-3 min-h-[200px] flex items-start justify-between flex-wrap'>

                            {selectedCategoryItems?.length ?

                                selectedCategoryItems.map((item, index) => {
                                    return (
                                        <div key={index} className='flex items-center justify-between cursor-pointer mb-3 text-[11px] h-fit max-w-[150px] p-2 px-4 rounded-[25px] border font-medium text-[#FF9571]'>

                                            <p>{item.name}</p>

                                            <FontAwesomeIcon icon={faClose} onClick={() => {
                                                const filterItems = selectedCategoryItems.filter(selectedItem => selectedItem.name !== item.name);

                                                setSelectedCategoryItems(filterItems);

                                                if (!filterItems.length) {
                                                    setSelectedCategory(null);
                                                }

                                            }} className='ms-3' />

                                        </div>
                                    )
                                })

                                :
                                null
                            }

                        </div>


                    </div>


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
