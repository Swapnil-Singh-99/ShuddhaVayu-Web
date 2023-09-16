import React ,{useState , useReducer} from "react";
import UserContext from "./User";

const DefaultValue= {
    value:'',
    name:''
  }


  const UserSelected = (state,action)=>{
    if(action.type==="SelectedCategory"){
        const UpdatedValue  = action.user.value;
        const Updatedname  = action.user.name;
        return {
            value:UpdatedValue,
            name:Updatedname
        }
    }

  }

const UserProvider = (props)=>{
    const [UserState, dispatch] = useReducer(UserSelected, DefaultValue);

    const UserSelection =(user)=>{
        dispatch({ type: "SelectedCategory", user: user });

    }
    

    const UpdatedObject = {
        
        name:UserState.name,
        value:UserState.value,
        
        Selected:UserSelection
        
    }


    return (
      <UserContext.Provider value={UpdatedObject}>
        {props.children}
      </UserContext.Provider>
    );

}
export default UserProvider