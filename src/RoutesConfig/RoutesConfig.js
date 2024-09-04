import { Route, Routes } from "react-router-dom"
import MainSection from "../Pages/MainSection"
import ContactPage from "../Pages/Contact"

export const RoutesConfig = ()=> {
    return (
        <>
        <Routes>
            <Route path='/' element={<MainSection/>} />
            <Route path='/contactus' element={<ContactPage/>} />
        </Routes>
        </>
    )
}