
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalPage } from "../pages/JournalPage.jsx"

export const JournalRoutes = () => {
    const { status } = useSelector(state => state.authentication)

    return (
        <Routes>
            <Route path="/" element={status == 'authenticated' ? <JournalPage /> : <Navigate to="/auth/login" />} />

                <Route path="/*" element={<Navigate to="/" />} />
         </Routes>
    )
}
