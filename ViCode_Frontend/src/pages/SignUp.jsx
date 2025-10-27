//We use react-hook-form bcz if we use useState then we set values manually but react-hook-form did this for us automatically.
//zod give good validation than react-hook-form.
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {registerUser} from '../auth_slice'
import { useEffect } from 'react';

// create validation, bcz we not want to make request from backend for validation
const SignUpSchema = z.object({
    firstName:z.string().min(3,"Minimum character should be 3"),
    emailId:z.string().email("Invalid Email"),
    password:z.string().min(8,"Weak Password")

})

function SignUp(){

    const {isAuthenticated} = useSelector((state)=> state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated,navigate]);
    
    const {register,handleSubmit,formState: { errors }} = useForm({resolver:zodResolver(SignUpSchema)});
    const submitData = (data)=>{
        dispatch(registerUser(data));
    }
    
    return(
        <div className="min-h-screen flex items-center justify-center p-4"> {/* Centering container */}
            <div className="card w-96 bg-base-100 shadow-xl"> {/* Existing card styling */}
                <div className="card-body">
                    <h2 className="card-title justify-center text-3xl">Leetcode</h2> {/* Centered title */}
                    <form onSubmit={handleSubmit(submitData)}>
                        {/* Existing form fields */}
                        <div className="form-control">
                        <label className="label mb-1">
                            <span className="label-text">First Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John"
                            className={`input input-bordered ${errors.firstName && 'input-error'}`}
                            {...register('firstName')}
                        />
                        {errors.firstName && (
                            <span className="text-error">{errors.firstName.message}</span>
                        )}
                        </div>

                        <div className="form-control  mt-4">
                        <label className="label mb-1">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className={`input input-bordered ${errors.emailId && 'input-error'}`}
                            {...register('emailId')}
                        />
                        {errors.emailId && (
                            <span className="text-error">{errors.emailId.message}</span>
                        )}
                        </div>

                        <div className="form-control mt-4">
                        <label className="label mb-1">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className={`input input-bordered ${errors.password && 'input-error'}`}
                            {...register('password')}
                        />
                        {errors.password && (
                            <span className="text-error">{errors.password.message}</span>
                        )}
                        </div>

                        <div className="form-control mt-6 flex justify-center">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;


//error look like
// at starting
// {
//     const error = {
//         firstName: undefined,
//         emailId: undefined,
//         password: undefined
//     }
// }
//After fill the form error look like this
// {
//     const error = {
//         firstName: {
//             type:'string',
//             message:'Minimum character should be 3'
//         },
//         emailId: {
//             type:'string',
//             message:'Invalid Email'
//         },
//         password:  {
//             type:'string',
//             message:'Weak Password'
//         }
//     }
// }