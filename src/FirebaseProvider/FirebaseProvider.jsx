import {createContext} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut, updateProfile} from "firebase/auth";
import auth from "../firebase/firebase.config.js";
// import PropTypes from "prop-types";
import {useState, useEffect} from "react";

export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const FirebaseProvider = ({children}) => {

    // const navigate = useNavigate()
    // const location = useLocation()
    // const from = location?.state || '/'

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // const handleSocialLogin = (socialProvider) => {
    //     socialProvider().then(result => {
    //         if (result.user) {
    //             navigate(from)
    //         }
    //     })
    // }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                // console.log('User is signed in')
            } else {
                // console.log('No user is signed in')
                setUser(null)
            }
        })
    })

    const allValues = {
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        updateUserProfile,
        logout,
        user
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