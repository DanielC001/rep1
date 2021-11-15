import React from 'react'
import Sidebar from '../components/Sidebar'
const PrivateLayout = ({children}) => {
    return (
        <div>
            <Sidebar></Sidebar>
            {children}
        </div>
    )
}

export default PrivateLayout;
