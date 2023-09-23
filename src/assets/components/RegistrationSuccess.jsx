import '../styles/registrationsuccess.css'
import { NavLink } from 'react-router-dom';
import Try from '../images/try-success.png'

function RegistrationSuccess() {
    return (
        <div className="registration-success">
            <div className="registration-success--body">
                <h2>Registration Successful!</h2>
                <p>Your account has been successfully created.</p>
                <img src={Try} />
                <NavLink to="/login">Log In</NavLink>
            </div>
        </div>
    );
}

export default RegistrationSuccess;
