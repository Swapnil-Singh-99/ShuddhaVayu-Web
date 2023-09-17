import React, { useState, useContext, useEffect,useCallback } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../ContextApi/User";

const UserItem = (props) => {

  const UserCtx = useContext(UserContext);

  const [Path, SetPath] = useState("");

  const clicked=  useCallback(async()=>{
    console.log('clicked')
    UserCtx.Selected({
      value: await props.value,
      name: await props.name
    })
   
    const value = UserCtx.value;
    SetPath(value);
  },[]);

  //updates
  

  return (
    <div key={props.id} className="group relative bg-silver rounded-3xl border-2 border-black">
        <div className="flex justify-between py-4  px-2">
        <div>
       Report ID: {props.id}

        </div>
      <div>
      {props.date_time}

      </div>

        </div>
       
      <div className="mt-4 flex justify-between py-4  px-2 ">
        <div>
          <h3 className="text-xl text-gray-700 font-bold px-2">{props.name}</h3>
        </div>
        <div>
          <h3 className="text-xl text-gray-700 font-bold px-2">{props.location}</h3>
        </div>
       
      </div>
      <div class="flex justify-center items-center ">
  <div class=" hover:bg-blue-500 py-2 ">
         <Link to="/Report" >
         <button className="hover:text-green font-semibold" onClick={clicked}>
          Details

          </button>
          </Link>
          
        
  </div>
</div>

     
    </div>
  );
};
export default UserItem;
