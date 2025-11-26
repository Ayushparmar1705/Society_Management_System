import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../../Pages/Users/Home'
import SignupHook from '../../Hooks/UserHooks/SignupHook'
import LoginHook from '../../Hooks/UserHooks/LoginHook'
import OtpVerification from '../../Hooks/UserHooks/OtpVerification'
import DashboardHook from '../../Hooks/RoleBasedAuthhook/Chairman/DashboardHook'
import MemberHook from '../../Hooks/RoleBasedAuthhook/Chairman/MemberHook'

import AddstaffHook from '../../Hooks/RoleBasedAuthhook/Chairman/AddstaffHook'
import ManagestaffHook from '../../Hooks/RoleBasedAuthhook/Chairman/ManagestaffHook'

import UpdatestaffHook from '../../Hooks/RoleBasedAuthhook/Chairman/UpdatestaffHook'
import ParkingAllocationHook from '../../Hooks/RoleBasedAuthhook/Chairman/ParkingAllocationHook'
import ViewAllocateParkingHook from '../../Hooks/RoleBasedAuthhook/Chairman/ViewAllocateParkingHook'
import ManageVisitor from '../../Hooks/RoleBasedAuthhook/Residence/ManageVisitorHooks'


export default function Usersroutes() {
  return (
    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<LoginHook></LoginHook>}></Route>
      <Route path='/signup' element={<SignupHook></SignupHook>}></Route>
      <Route path='/otpverification' element={<OtpVerification></OtpVerification>}></Route>
      <Route path='/dashboard' element={<DashboardHook></DashboardHook>}></Route>
      <Route path='/member-management' element={<MemberHook></MemberHook>}></Route>
      <Route path='/add-staff' element={<AddstaffHook></AddstaffHook>}></Route>
      <Route path='/manage-staff' element={<ManagestaffHook></ManagestaffHook>}></Route>
      <Route path='/update-staff' element={<UpdatestaffHook></UpdatestaffHook>}></Route>
      <Route path='/allocate-parking' element={<ParkingAllocationHook></ParkingAllocationHook>}></Route>
      <Route path='/view-parking' element={<ViewAllocateParkingHook></ViewAllocateParkingHook>}></Route>
      <Route path='/managevisitor' element={<ManageVisitor></ManageVisitor>}></Route>
      
      
    </Routes>
  )
}
