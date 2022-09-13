import React from "react"
import {Route, Switch} from "react-router-dom"
import { JournalList } from "./journal/JournalList"

export const ApplicationViews = () => {
    return (
        <>
                <Route exact path = "/" > <JournalList/> </Route>
        
        </>
    )
}