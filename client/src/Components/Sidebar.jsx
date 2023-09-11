import React from 'react';
import {  CDBSidebar, CDBSidebarContent,  CDBSidebarFooter,  CDBSidebarHeader,  CDBSidebarMenu,  CDBSidebarMenuItem} from 'cdbreact';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../images/bu-logo.png";
import {useCookies} from "react-cookie";



const LinkColor = {
    color: "#242424"
}

const HeaderStyle = {
    background: "#0043C8",
    color: "#FFF",
    textDecoration: "none"
}

function Sidebar(props) {
    const [cookies,setCookies] = useCookies("access_token");
    const navigate = useNavigate();
    const Logout = ()=>{
setCookies("access_token","");
window.localStorage.removeItem("userID");
navigate("/");
    }
    return (
        <div style={{display:'flex', height:'100vh', overflow:'scroll initial', zIndex: "100"}}>
            <CDBSidebar textColor='#242424' backgroundColor='#ffffff'>
                <CDBSidebarHeader style={HeaderStyle} prefix={
                    <i className="fa fa-bars fa-large"></i>
                } suffix={
                    <img src={logo} alt="logo"/>
                }>
                    <NavLink style={HeaderStyle} exact to="/dashboard">Babcock University</NavLink>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink style={LinkColor} exact to="/dashboard">
                            <CDBSidebarMenuItem icon=' bi bi-grid '  >
                                Dashboard
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink style={LinkColor} exact to="/courses">
                            <CDBSidebarMenuItem icon=' bi bi-mortarboard '>
                                Courses
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink style={LinkColor} exact to="/dashboard">
                            <CDBSidebarMenuItem icon=" bi bi-journal-text ">
                                Assignment
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink style={LinkColor} exact to="/analytics">
                             <CDBSidebarMenuItem icon=' bi bi-file-bar-graph ' >
                                Analytics
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink style={LinkColor} exact to="/dashboard">
                             <CDBSidebarMenuItem icon=' bi bi-calendar-week ' >
                                Events
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink style={LinkColor} exact to="/dashboard">
                             <CDBSidebarMenuItem icon=' bi bi-chat-dots '>
                                Messages
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{textAlign:'center', borderTop: "1px solid #070707"}} >
                    <div onClick={Logout} className="sidebar-btn-wrapper" style={{ padding :'20px 5px',cursor:"pointer" }}>
                        <i className="bi bi-box-arrow-left me-2"></i>
                        
                        Logout
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
}

export default Sidebar;