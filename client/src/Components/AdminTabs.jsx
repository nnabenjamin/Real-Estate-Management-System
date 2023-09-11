import React, {useState} from 'react';
import {Navbar, Container, Tabs, Tab} from 'react-bootstrap/';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import courseImg from "../images/course-img-3.png"
import lecturer from "../images/profile-2.png"
import CourseDetailTab from './CourseDetailTab';
import ClassWorkComponent from './ClassWorkComponent';


export default function AdminTabs() {
    const [key, setKey] = useState('overview');

    return (
      <Tabs
        defaultActiveKey="overview"
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 admin"
      >
        <Tab eventKey="overview" title={`All`} className="overflow-auto" style={{height: "40vh"}}>
          <ClassWorkComponent />
          <ClassWorkComponent />
          <ClassWorkComponent />
        </Tab>
        <Tab eventKey="content" title="Submitted"  className="overflow-auto" style={{height: "40vh"}}>
          <ClassWorkComponent />
          <ClassWorkComponent />
          <ClassWorkComponent />
        </Tab>
        <Tab eventKey="classwork" title="Graded" className="overflow-auto" style={{height: "40vh"}}>
          <ClassWorkComponent />
          <ClassWorkComponent />
          <ClassWorkComponent />
        </Tab>
        <Tab eventKey="forum" title="Missing" className="overflow-auto" style={{height: "40vh"}}>
          <ClassWorkComponent />
          <ClassWorkComponent />
          <ClassWorkComponent />
        </Tab>
      </Tabs>
    );
}
