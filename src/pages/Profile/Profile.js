import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { countries, cities, lang } from './data';
import IdentityInputBox from '../../components/IdentityInputBox/IdentityInputBox';
import IdentifyDropdownBox from '../../components/IdentifyDropdownBox/IdentifyDropdownBox';

export default function Profile({ isDisapled, data }) {

    const toast = useRef(null);

    const [,setToggleShowBtn] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState();

    const [selectedCity, setSelectedCity] = useState();

    const [selectedLanguages, setSelectedLanguages] = useState();



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

        <section>

            <div className='border border-[#B70B28] bg-white py-8 rounded-[5px]'>

                <div className='border-b px-8'>

                    <h2 className='text-[#8B6464] font-medium mb-5'>Profile Details</h2>

                    <div className='flex items-center'>

                        <img src={require(data.type !== "add" ? './user.png' : "./default-add-img.png")} className='me-5 w-[140px]' />

                        <div>
                            <label htmlFor='upload-user-img' className='block w-fit bg-[#B70B28] text-white font-medium text-[18px] p-2 px-7 rounded-[50px]'>
                                Change Photo
                            </label>
                            <input type='file' id='upload-user-img' className='hidden' />

                        </div>
                    </div>

                </div>

                <div className='my-10 px-8'>

                    <IdentityInputBox isDisapled={true} data={{ labelsName: ['First Name', 'Last Name'], defaultValue: ['John', 'Doe'] }} />

                    <IdentityInputBox isDisapled={true} data={{ labelsName: ['Email', 'Phone Number'], defaultValue: ['john.doe@gmail.com', '+020 674 758 7365'] }} />

                    <IdentifyDropdownBox
                        data={{ labelsName: ['Country', 'Organization'], defaultValue: ['USA', 'PIXINVENT'] }}
                        selectedOption={selectedCity}
                        setSelectedOptions={setSelectedCity}
                        options={cities}
                        isDisapled={isDisapled}
                    />

                    <IdentifyDropdownBox
                        data={{ labelsName: ['City', 'Zip Code'], defaultValue: ['California', '34753'] }}
                        selectedOption={selectedCountry}
                        setSelectedOptions={setSelectedCountry}
                        options={countries}
                        isDisapled={isDisapled}
                    />

                    <IdentifyDropdownBox
                        isReversed={true}
                        data={{ labelsName: ['Address', 'Language'], defaultValue: ['Address', 'English'] }}
                        selectedOption={selectedLanguages}
                        setSelectedOptions={setSelectedLanguages}
                        options={lang}
                        isDisapled={isDisapled}
                    />

                </div>

                <div className='flex items-center justify-end mt-10 px-8'>

                    <button onClick={() => {
                        if (data?.type === "view") {
                            confirm()
                        }
                    }} className='font-medium p-3 px-20 rounded-[5px] capitalize bg-[#FFE0D0] text-[#FF1716] me-5'>{data?.btns?.btn1}</button>

                    <Link to={data?.type === "view" ? "/profile/profile-edit" : ""}>

                        <button className='font-medium p-3 px-20 rounded-[5px] capitalize bg-[#FF1716] text-white'>{data?.btns?.btn2}</button>

                    </Link>

                </div>

            </div>

            <Toast ref={toast} />

            <ConfirmDialog />

        </section>
    )
}
