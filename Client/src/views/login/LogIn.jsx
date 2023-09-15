import { useState } from "react"
import validation from "../../helpers/validation.js"
import styles from "./login.module.css"

export default function LogIn ({login}){
    const [userData,setUserData] = useState({
        email:"",
        password:"",
     })

     const[errors,setErrors]=useState({
        email:"Email required",
        password:"Password required",
     })

    function handleChange(event){
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
          ...userData,
            [event.target.name]: event.target.value
        }))
    }
    function submitHandler(event){
        event.preventDefault()
        login(userData)
     
    }

    function disableHandler (){
        let disabled;
        for(let error in errors){
            if(errors[error]=== ""){
                disabled = false
            } 
            else{
                disabled=true;
                break;
            }
        }
        return disabled;
        
    }

    return(
      <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={submitHandler}>
        <div>
          <label>USERNAME</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="wubalubadubdub@flarg.com"
          />
          <span>{errors.email}</span>
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        {errors.password && <span>{errors.password}</span>}
        <button disabled={disableHandler()} type="submit">
          SUBMIT
        </button>
      </form>
    </div>
    )
}
