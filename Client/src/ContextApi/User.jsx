import React from "react";

const UserContext = React.createContext(

    {   name:'',
         value: '',
         
        Selected:(user)=>{}
    }
);

export default UserContext
