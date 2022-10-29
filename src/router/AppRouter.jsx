import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoute } from "../auth/routes/AuthRoute"
import { FirebaseAuth } from "../firebase/config";
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { login, logout } from "../store";
import { CheckingAuth } from "../ui/components/CheckingAuth";

export const AppRouter = () => {

    const { status } = useSelector(state => state.authentication);
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, (user) => {
            if (!user) return dispatch(logout());
            const { uid, email, displayName, photoURL } = user
            dispatch(login({ uid, email, displayName, photoURL }));
        })

    }, [])

    /* if (status === 'checking') {
        return <CheckingAuth />
    } */

    console.log('router')

    return (
        <Routes>



            {
                status === 'authenticated'
                    ? <Route path="/*" element={<JournalRoutes />} />
                    : <Route path="/auth/*" element={<AuthRoute />} />
            }

            <Route path="/*" element={<Navigate to="/auth/login" />} />

            {/* Login y registro*/}
            {/* <Route path="/auth/*" element={<AuthRoute />} /> */}

            {/* JournalApp */}
            {/*<Route path="/*" element={<JournalRoutes />} />*/}

        </Routes>
    )
}
