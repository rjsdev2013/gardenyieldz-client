import React, {useState} from "react"
import {Route, Routes} from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import {Login} from "./auth/Login"
import {Register} from "./auth/Register"
import "./GardenYieldz.css"
import { JournalList } from "./journal/JournalList"
import PrivateRoutes from "./auth/PrivateRoutes"
import { JournalForm } from "./journal/JournalForm"
import { NavBar } from "./nav/NavBar"


export const GardenYieldz = () => {
    const [ token, setTokenState ] = useState(localStorage.getItem('token'));
  
    const setToken = (newToken) => {
      localStorage.setItem('token', newToken)
      setTokenState(newToken)
    }
  
    const setUserId = (userId) => {
      localStorage.setItem('userId', userId)
      console.log(localStorage.getItem('userId'))
    }
  
    return (
      <>
        <NavBar />
        <Routes>
          <Route exact path="/login" element={<Login token={token} setToken={setToken} setUserId={setUserId} />} />
  
          <Route exact path="/register" element={<Register token={token} setToken={setToken} />} />  

          <Route exact path="/journals" element={<JournalList />} />
          <Route exact path="/addjournal" element={<JournalForm />} />
          <Route exact path="/plants" />
  
  
          <Route element={<PrivateRoutes token={token}/>}>
            <Route exact path="/" element={<JournalList/>}/>
  
          </Route>
        </Routes>
      </>
    )
  }