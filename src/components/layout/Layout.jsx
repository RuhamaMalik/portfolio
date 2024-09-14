import './Layout.css';
import ProfileIntroCard from './../cards/profileIntro/ProfileIntroCard';
import { NavLink, useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import About from '../../pages/about/About';
import Contact from '../../pages/contact/Contact';
import Resume from '../../pages/resume/Resume';
import Works from '../../pages/works/Works';
import Skills from '../../pages/skills/Skills';

const Layout = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get("tab") || "0";
    
    const [visibleTab, setVisibleTab] = useState(currentTab);

    const changeTab = (tab) => {
        setTimeout(() => {
            setSearchParams({ tab });
            setVisibleTab(tab); // Wait for fade-out animation before updating visibleTab
        }, 800); // Slight delay to handle fade-out animation
    };

    const [showTabs, setShowTabs] = useState(false);

    return (
        <>
       
        <div className="layout">
        <div className="left">
        <div className={`link   ${showTabs ? 'show' : ''} rounded`}>
            <NavLink className={`link ml-1 lg:ml-0 font-bold ${currentTab === "0" ? 'activeLink' : ""}`} to="/?tab=0" onClick={() => changeTab("0")}>ABOUT </NavLink>
            <NavLink className={`link ml-1 lg:ml-0 font-bold ${currentTab === "1" ? 'activeLink' : ""}`} to="/?tab=1" onClick={() => changeTab("1")}>RESUME</NavLink>
            <NavLink className={`link ml-1 lg:ml-0 font-bold ${currentTab === "2" ? 'activeLink' : ""}`} to="/?tab=2" onClick={() => changeTab("2")}>WORKS</NavLink>
            <NavLink className={`link ml-1 lg:ml-0 font-bold ${currentTab === "3" ? 'activeLink' : ""}`} to="/?tab=3" onClick={() => changeTab("3")}>SKILLS</NavLink>
            <NavLink className={`link ml-1 lg:ml-0 font-bold ${currentTab === "4" ? 'activeLink' : ""}`} to="/?tab=4" onClick={() => changeTab("4")}> CONTACT</NavLink>
        </div>
    </div>

            <div className="center">
                <ProfileIntroCard />
            </div>

            <div className="right">
                <div className="content">
                    {visibleTab === "0" ? (
                        <About isVisible={ currentTab === "0"} />
                    ) : visibleTab === "1" ? (
                        <Resume isVisible={ currentTab === "1"} />
                    ) : visibleTab === "2" ? (
                        <Works isVisible={ currentTab === "2"} />
                    ) : visibleTab === "3" ? (
                        <Skills isVisible={ currentTab === "3"} />
                    ) : visibleTab === "4" ? (
                        <Contact isVisible={ currentTab === "4"} />
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>

        </>
    );
};

export default Layout;
