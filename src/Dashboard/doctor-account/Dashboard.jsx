import { useState } from "react";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import {Base_URL} from "../../config";
import Tabs from "./Tabs";
import './Dashboard.css'
import useFetchData from '../../hooks/useFetchData';


const Dashboard=()=> {
  const{ data,loading,error} = useFetchData(`${Base_URL}/doctors`);
  console.log(data, 'data'); 
  const[tab,setTab] = useState("overview");
  return (
    <div className="displayall">
      (
        <div className="displayleft"> 
        <Tabs tab={tab} setTab={setTab}/>
        <div className="displayright">
          {data.isApproved === "pending" && (
            <div>Your account is still being reviewed by the admin.</div>
          )}
         
          <div>
            {tab=='overview' && <div><h1>Overview     </h1></div>}
            {tab=='appointments' && <div>appintments</div>}
            {tab=='settings' && <div>profile settings</div>}
          </div>
        </div></div>
       
      )
    </div>
  )
}

export default Dashboard
