import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../ContextApi/User";

const UserItem = (props) => {
  const UserCtx = useContext(UserContext);

  const [Path, SetPath] = useState("");

  const clicked = useCallback(async () => {
    // console.log("clicked");
    UserCtx.Selected({
      value:  props.value,
      name:  props.name,
    });

    const value = UserCtx.value;
    SetPath(value);
  }, []);

  //updates

  return (
    <tr class="text-gray-700">
          {/* <td class="px-4 py-3 text-xs border">
        <span class="px-2 py-1 font-bold leading-tight text-green-700  rounded-sm text-xl" >
          {" "}
          {props.id}{" "}
        </span>
      </td> */}
      <td class="px-4 py-3 border">
        <div class="flex items-center text-sm">
          <div class="relative w-8 h-8 mr-3 rounded-full md:block">
            <img
              class="object-cover w-full h-full rounded-full"
              src={props.Pimage}
              loading="lazy"
            />
            <div
              class="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            ></div>
          </div>
          <div>
            <p class="font-semibold text-black">{props.name}</p>
          </div>
        </div>
      </td>

      <td class="px-4 py-3 text-ms font-semibold border text-black">{props.address}</td>

  

      <td class="px-4 py-3 text-sm border">{props.date} {props.time}</td>

      <td class="px-4 py-3 text-sm border">
        <Link to="/Report">
          <button className= "text-black hover:text-orange" onClick={clicked}>
           Details
          </button>
        </Link>
      </td>
    </tr>
  );
};
export default UserItem;
