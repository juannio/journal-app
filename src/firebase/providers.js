import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

// Do not remember the user
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

// Google authentication and sing in
export const signInWithGoogle = async () => {
    try {
        const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
        /*         const {accessToken, providerId } = GoogleAuthProvider.credentialFromResult(result);
         */
        const { displayName, email, photoURL, uid } = user;

        return {
            ok: true,
            user: {
                displayName,
                email,
                photoURL,
                uid
            }
        }
    } catch (err) {
        throw ({
            ok: false,
            errorMessage: err.message
        })
    }
}

// Email and password sign in
export const signInWithEmail = async ({ userEmail, password }) => {
    try {

        const { user } = await signInWithEmailAndPassword(FirebaseAuth, userEmail, password);
        const { displayName, email, photoURL, uid } = user;

        return {
            ok: true,
            user: {
                displayName,
                email,
                photoURL,
                uid
            }
        }
    } catch (err) {
        throw ({
            ok: false,
            errorMessage: err.code
        })
    }
}

// Register with email and password
export const registerEmailAndPassword = async ({ email: userEmail, password, displayName: name }) => {
    try {

        await createUserWithEmailAndPassword(FirebaseAuth, userEmail, password);        
        await updateProfile(FirebaseAuth.currentUser, {
            displayName: name,
        });
        
        const { displayName, email, photoURL, uid } = FirebaseAuth.currentUser;


        return {
            ok: true,
            user: {
                displayName,
                email,
                photoURL,
                uid
            }
        }
    } catch (err) {
        throw ({
            ok: false,
            errorMessage: err.message
        })
    }
}