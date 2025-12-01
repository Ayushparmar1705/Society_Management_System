

import { Route, Routes } from "react-router-dom";

import Layout from '../../Component/Sidebarcomponent/Layout';
import Addsocietyhook from "../../Hooks/MainAdminHooks/SocietyHook/Addsocietyhook";
import Managesocietyhook from "../../Hooks/MainAdminHooks/SocietyHook/Managesocietyhook";
import Addblockhook from "../../Hooks/MainAdminHooks/BlockHook/Addblockhook";
import Manageblockhook from "../../Hooks/MainAdminHooks/BlockHook/Manageblockhook";
import Addflathook from "../../Hooks/MainAdminHooks/FlatsHook/Addflathook";
import Manageflathook from "../../Hooks/MainAdminHooks/FlatsHook/Manageflathook";
import MainAdminLogin from "../../Pages/MainAdmin/MainAdminLogin";
import Updatesocietyhook from "../../Hooks/MainAdminHooks/SocietyHook/Updatesocietyhook";
import Updateflathook from "../../Hooks/MainAdminHooks/FlatsHook/Updateflathook";




export default function Adminroutes() {
  return (
    <div>


      <Routes>
        <Route path='/mainadmin/login' element={<MainAdminLogin></MainAdminLogin>}></Route>
        <Route path='/mainadmin/add-society' element={<Layout><Addsocietyhook></Addsocietyhook></Layout>}></Route>
        <Route path="/mainadmin/manage-society" element={<Layout><Managesocietyhook></Managesocietyhook></Layout>}></Route>
        <Route path="/mainadmin/add-block" element={<Layout><Addblockhook></Addblockhook></Layout>}></Route>
        <Route path="/mainadmin/manage-blocks" element={<Layout><Manageblockhook></Manageblockhook></Layout>}></Route>
        <Route path="/mainadmin/add-flats" element={<Layout><Addflathook></Addflathook></Layout>}></Route>
        <Route path="/mainadmin/manage-flats" element={<Layout><Manageflathook></Manageflathook></Layout>}></Route>
        <Route path="/mainadmin/update-page" element={<Layout><Updatesocietyhook></Updatesocietyhook></Layout>}></Route>
        <Route path="/mainadmin/update-flats" element={<Layout><Updateflathook></Updateflathook></Layout>}></Route>
      </Routes>

    </div>
  )
}
