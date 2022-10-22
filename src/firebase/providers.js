import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
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

        const {user} = await signInWithEmailAndPassword(FirebaseAuth, userEmail, password);
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

// Email and password creation on Firebase
export const createEmailAndPassword = async ({ userEmail, password }) => {
    try {

        const result = await createUserWithEmailAndPassword(FirebaseAuth, userEmail, password);
        const { displayName, email, photoURL, uid } = result;

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