import {createContext} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import auth from "../firebase/firebase.config.js";
// import PropTypes from "prop-types";

export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const FirebaseProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const allValues = {
        createUser
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

// FirebaseProvider.prototype = {
//     children: PropTypes.node.isRequired
// }

export default FirebaseProvider;