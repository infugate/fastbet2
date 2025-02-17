import React from 'react'
import UserDetails from './Components/UserDetails'
import DashboardNavbar from '../Components/Navbar'
import UserForm from './Components/UserForm'
import ChangePassword from './Components/ChangePassword'
import DeleteAccount from './Components/DeleteAccount'

const Profile = () => {
    // const { profile } = useProfile();
    // const navigate = useNavigate()
    return (
            <div style={{ backgroundColor: " #0b3c68" }}>
            <DashboardNavbar />
            <UserDetails />
            <UserForm />
            <ChangePassword />
            <DeleteAccount />
        </div>       
    )
}

export default Profile