import React, { Suspense, lazy } from 'react'
import BreadcrumbNav from '../../layouts/BreadcrumbNav/BreadcrumbNav'
import Header from '../../layouts/Header/Header'
import { Route, Routes } from 'react-router-dom'

const ProductsPage = lazy(() => import('../../pages/Products'));
const Services = lazy(() => import('../../pages/Services'));
const Reels = lazy(() => import('../../pages/Reels'));
const Teams = lazy(() => import('../../pages/Teams'));
const Profile = lazy(() => import('../../pages/Profile'));


const EditProduct = lazy(() => import('../../pages/EditProduct'));
const ProductView = lazy(() => import('../../pages/ProductView'));
const AddProduct = lazy(() => import('../../pages/AddProduct'));
const ServicesView = lazy(() => import('../../pages/ServicesView'));
const ReelsView = lazy(() => import('../../pages/ReelsView'));
const TeamViews = lazy(() => import('../../pages/TeamViews'));

export default function MainContent({ isExpanded }) {
    return (
        <div className={`p-5 px-10 bg-[#ffffff] ${isExpanded ? "lg:ms-[260px]" : "lg:ms-[80px]"}`} style={{ transition: "0.5s" }}>

            <div className='container'>

                <Header />

                <BreadcrumbNav></BreadcrumbNav>

                <Suspense>

                    <Routes>

                        <Route path='products' element={<ProductsPage />} />

                        <Route path='products/view-product' element={<ProductView />} />

                        <Route path='products/edit-product' element={<EditProduct />} />

                        <Route path='products/add-product' element={<AddProduct />} />


                        <Route path='services' element={<Services />} />

                        <Route path='services/services-view' element={<ServicesView isDisapled={true} data={{ btns: { btn1: "Delete", btn2: "Edit" }, type: 'view' }} />} />

                        <Route path='services/services-edit' element={<ServicesView isDisapled={false} data={{ btns: { btn1: "dismiss", btn2: "save changes" }, type: 'edit' }} />} />

                        <Route path='services/services-add' element={<ServicesView isDisapled={false} data={{ btns: { btn1: "Cancel", btn2: "submit" }, type: 'add' }} />} />



                        <Route path='reels' element={<Reels />} />

                        <Route path='reels/reels-view' element={<ReelsView isDisapled={true} data={{ btns: { btn1: "Delete", btn2: "Edit" }, type: 'view' }} />} />

                        <Route path='reels/reels-edit' element={<ReelsView isDisapled={false} data={{ btns: { btn1: "dismiss", btn2: "save changes" }, type: 'edit' }} />} />

                        <Route path='reels/reels-add' element={<ReelsView isDisapled={false} data={{ btns: { btn1: "Cancel", btn2: "submit" }, type: 'add' }} />} />



                        <Route path='teams' element={<Teams />} />

                        <Route path='teams/teams-view' element={<TeamViews isDisapled={true} data={{ btns: { btn1: "Delete", btn2: "Edit" }, type: 'view' }} />} />

                        <Route path='teams/teams-edit' element={<TeamViews isDisapled={false} data={{ btns: { btn1: "dismiss", btn2: "save changes" }, type: 'edit' }} />} />

                        <Route path='teams/teams-add' element={<TeamViews isDisapled={false} data={{ btns: { btn1: "Cancel", btn2: "submit" }, type: 'add' }} />} />



                        <Route path='profile' element={<Profile isDisapled={true} data={{ btns: { btn1: "Delete", btn2: "Edit" }, type: 'view' }} />} />

                        <Route path='profile/profile-edit' element={<Profile isDisapled={false} data={{ btns: { btn1: "dismiss", btn2: "save changes" }, type: 'edit' }} />} />

                    </Routes>

                </Suspense>


            </div>

        </div>
    )
}
