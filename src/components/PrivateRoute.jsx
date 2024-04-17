import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    if(!user)
        return <Navigate to='/login' state={location?.pathname || '/'}/>
    return {children}
};

export default PrivateRoute;