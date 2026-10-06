import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Register = () => {
    const[userName, setUserName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setpassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

     

    const handleRegister=(event)=>{
        event.preventDefault()
        const payload = {
            name:userName,
            email:email,
            password:password
        }
        console.log(payload)
        if(password == confirmPassword){
        localStorage.setItem("vaishu", JSON.stringify(payload))
        navigate('/')
        }else{
            //alert("password and confirm password are not same")
            toast.error("password and confirm password are not same")
        }

    }
    return (
        <>
        <div className="container w-50 mt-5">
            <div className="container p-4 rounded-5"
                 style={{backgroundColor:"#b2afaf"}}
            >
            <h3>Register here ...</h3>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label htmlFor="exampleInputUser" className="form-label">User Name</label>
                    <input type="text" className="form-control"id="exampleInputUser1"
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" 
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                    autoComplete="new-password"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" 
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary me-2">Register</button>
                <Link to='/'>If already Registered</Link>
            </form>
            </div>
        </div>
        <ToastContainer/>
        </>
    )
}

export default Register
