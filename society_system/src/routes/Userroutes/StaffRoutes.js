
import { Route, Routes } from 'react-router-dom'
import StaffLogin from '../../Hooks/RoleBasedAuthhook/Staff/StaffLoginHook'
import StaffDashboard from '../../Hooks/RoleBasedAuthhook/Staff/StaffDashboard'
import Addvisitorhooks from '../../Hooks/RoleBasedAuthhook/Staff/Addvisitorhooks'
import Managevisitorhooks from '../../Hooks/RoleBasedAuthhook/Staff/Managevisitorhooks'
import ViewMembersHook from '../../Hooks/RoleBasedAuthhook/Staff/ViewMembersHook'
import ViewAllocateParkingHook from '../../Hooks/RoleBasedAuthhook/Staff/ViewAllocateParkingHook'

export default function StaffRoutes() {
    return (
        <Routes>
            <Route  path='/security-login' element={<StaffLogin></StaffLogin>}></Route>
            <Route path='/view-member' element={<ViewMembersHook></ViewMembersHook>}></Route>
            <Route path='/staffdashboard' element={<StaffDashboard></StaffDashboard>}></Route>
            <Route path='/add-visitor' element={<Addvisitorhooks></Addvisitorhooks>}></Route>
            <Route path='/viewparking' element={<ViewAllocateParkingHook></ViewAllocateParkingHook>}></Route>
            <Route path='/view-visitor' element={<Managevisitorhooks></Managevisitorhooks>}></Route>
        </Routes>
    )
}
