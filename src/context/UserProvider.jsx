import UserContext from "./UserContext";
import { useReducer } from "react";
import userReducers from "./userReducers";
import axios  from 'axios';



const UserProvider = ({children}) => {

    const [userState, dispatch] = useReducer(userReducers, {
        token: null
    });

    const registerUser = async(user) => {
        try {
          const newUser = await axios.post("http://localhost:4000/user", user);
          if(newUser.data.success){
            // alert(newUser.data.message)
            console.log(newUser.data.token)
            dispatch({type: "REGISTER", payload: newUser.data.token})
            console.log(newUser.data)
          } 
          console.log(newUser.data.message)
        } catch (error) {
          console.log(error)
        }
      }
    
      const loginUser = async(user) => {
        try {
          const newUser = await axios.post("http://localhost:4000/user/signin", user);
          if(newUser.data.success){
            // alert(newUser.data.message)
            console.log(newUser.data.token)
            dispatch({type: "REGISTER", payload: newUser.data.token})
            console.log(newUser.data)
          }
          console.log(newUser.data.message)
        } catch (error) {
          console.log(error)
        }
      }



  return (
    <UserContext.Provider value={{registerUser, loginUser, userState}}>{children}</UserContext.Provider>
  )
}

export default UserProvider;