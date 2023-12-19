import './styles.css'

export const SignUpPage = () => {
    return (
        <div className='form-container'>
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input className='form-input' type="text" id='name' />
                </div>

                <div>
                    <label htmlFor="last-name">Last Name: </label>
                    <input className='form-input' type="text" id='last-name' />
                </div>

                <div>
                    <label htmlFor="user-name">User Name: </label>
                    <input className='form-input' type="text" id='user-name' />
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input className='form-input' type="email" id='email' />
                </div>

                <div>
                    <label htmlFor="age">Age: </label>
                    <input className='form-input' type="number" id='age' />
                </div>

                <div>
                    <label htmlFor="gender">Gender: </label>
                    <select className='form-input' name="gender" id="gender">
                        <option value="">Select your gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>

                <button className='btn sign-up'>Sign Up</button>
            </form>
        </div>
    )
}

