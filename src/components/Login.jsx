import React, { useContext, useEffect,useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { ThemeContext } from '../theme/ThemeProvider'

const Login = ({setLoggedUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [savedUser,setSavedUser] = useState()
    const navigate = useNavigate()
    const{theme} = useContext(ThemeContext)

    const handleLogin = async (event)=>{
        event.preventDefault()
        
        await fetchData()
        const payload = {
            email:email,
            password:password

        }
        console.log(payload)
        if(payload.email == email){
            if(payload.password ==password){
                setLoggedUser(savedUser)
                navigate('/dashboard')
            }else{
                toast.error("Password Incorrect")
            }
        }else{
            toast.error("Invalid email")
        }
    }

    function fetchData(){
       const savedUser1 = JSON.parse(localStorage.getItem("vaishu"))
       setSavedUser(savedUser1)
       console.log("saved user", savedUser1)
    }
    useEffect(()=>{
        console.log("*********************")
        fetchData()
    },[])
    
    return (
       
        <div className="container w-50 mt-5">
            <div className="container p-4 rounded-5"
                 style={{backgroundColor:theme === 'light' ? '#fff' : '#d2d2d2',
                    color:theme == 'light' ? '#000' : '#fff',
                    border:theme == 'light' && '1px solid black'
                  }}
            >
            <h3>Login here ...</h3>
            <form onSubmit={handleLogin}>
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
                    onChange={(e)=>setPassword(e.target.value)}
                    autoComplete="current-password"
                    />
                </div>
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <Link to="/register">If not registered</Link>
            </form>
            </div>
            <ToastContainer/>
           
        </div>
    )
}

export default Login
