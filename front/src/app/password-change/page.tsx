'use client'

import PasswordChangeView from "@/views/passwordChange/passwordChangeView"
import Unauthorized from "@/components/Unauthorized";
import { useAuth } from "@/contexts/AuthContext"


const PasswordChangeRoute = () => {
    const data = useAuth()

    if(!data.usuario) {
        return(
            <>
                <Unauthorized />
            </>
        )
    } else {
        return(
            <>
                <PasswordChangeView />
            </>
        )
    }
};

export default PasswordChangeRoute;