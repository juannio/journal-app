import { signInWithGoogle, signInWithEmail, registerEmailAndPassword } from "../../firebase/providers"
import { chekingCredentials, login, logout } from "../index"

export const startGoogleSingIn = () => {

    return async (dispatch) => {

        dispatch(chekingCredentials());

        signInWithGoogle()
            .then(({ ok, user }) => {
                dispatch(login(user));
            })
            .catch(err => {
                dispatch(logout(err.errorMessage));
            });
    }
}

export const startEmailAndPasswordSignIn = ({ email: userEmail, password }) => {

    return async (dispatch) => {

        dispatch(chekingCredentials());

        signInWithEmail({ userEmail, password })
            .then(({ ok, user }) => {
                dispatch(login(user));
            })
            .catch(err => {
                dispatch(logout(err.errorMessage));
            });
    }
}

export const startCreatingAccount = (formState) => {

    return async (dispatch) => {

        dispatch(chekingCredentials());

        registerEmailAndPassword(formState)
            .then(({ ok, user }) => {
                dispatch(login(user));
            })
            .catch(err => {
                dispatch(logout(err.errorMessage));
            });
    }
}