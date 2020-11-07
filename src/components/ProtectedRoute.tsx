import React from "react";
import {Redirect} from "react-router-dom"
import {useStateValue} from "./MyContext"

interface  IProps {
    component: any;
    path?: string
}

const ProtectedRoute: React.FC<IProps> = ( {component, path} ): JSX.Element => {

    // @ts-ignore
    const [{ basket, user }] = useStateValue();
    const Component = component;
    const isAuthed = user
    
    return  isAuthed ? (
        <Component />
    ) : (
        <Redirect to="/login"/>
    );
    
}

export default ProtectedRoute;