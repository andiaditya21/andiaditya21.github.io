import React from 'react'
import Main from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import Profile from '../Profile/Profile'
import ProjectList from '../ProjectList/ProjectList'

export default function Home() {
    return (
        <>
            <Navbar/>
            <Profile />
            <div className="container" id="main" style={{paddingTop: 100}}>
                <Main/>
            </div>
            <div className="container project" id="project" style={{paddingTop: 80}}>
                <ProjectList/>
            </div>
        </>
    )
}
