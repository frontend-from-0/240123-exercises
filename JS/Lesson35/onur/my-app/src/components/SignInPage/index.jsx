import './styles.css'
import { useForm } from 'react-hook-form';

export const SignInPage = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="user-name">User Name: </label>
                    <input className='form-input' type="text" id='user-name' {...register
                        ('userName',
                            {
                                required:
                                {
                                    value: true,
                                    message: 'User name is required'
                                },
                                minLength: 2
                            })} />
                    {errors.userName && <span>{errors.userName.message}</span>}
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input className='form-input' type="password" id='password'
                        {...register
                            ('password',
                                {
                                    required: { value: true, message: 'Password is required' },
                                    pattern:
                                    {
                                        value: "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
                                        message: 'Please enter a valid password'
                                    }
                                })} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <button className='btn sign-in'>Sign In</button>
            </form>
        </>
    )
}

