import React from 'react'
import Dashboard from '../../../Pages/Staff/Dashboard'
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useState } from 'react';
import SecurityDashboard from '../../../Api/RolebasedAuth/StaffLogin/Dashboard';

export default function StaffDashboard() {


  const [totalParking, setTotalParking] = useState(0);
  const [totalResidence, setTotalResidence] = useState(0);
  const [totalVisitor, setTotalVisitor] = useState(0);

  const token = localStorage.getItem("token");
  const society_id = jwtDecode(token).society_id;
  const cid = jwtDecode(token).cid;
  console.log(society_id);
  const countResidence = async()=>{
    const result = await SecurityDashboard.countResidence(society_id);
    if(result.code===200){
      setTotalResidence(result.message);
    }
  }
  const countParking = async()=>{
    const result = await SecurityDashboard.countResidence(cid);
    if(result.code===200){
      setTotalParking(result.message);
    }
  }
  const countVisitor = async()=>{
    const result = await DashboardManagement.countResidence(society_id);
    if(result.code===200){
      setTotalVisitor(result.message);
    }
  }

  useEffect(()=>{
    countResidence();
    countParking();
    countVisitor();
  },[])
  return <Dashboard totalParking={totalParking} totalResidence={totalResidence} totalVisitor={totalVisitor}></Dashboard>
}
