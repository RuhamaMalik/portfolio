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

    const [visibleTab, setVisibleTab] = useState((window.innerWidth > 600) ? "0" : currentTab);
    const [showTabs, setShowTabs] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 


    // const changeTab = (tab) => {
    //     setTimeout(() => {
    //         setSearchParams({ tab });
    //         setVisibleTab(tab); // Wait for fade-out animation before updating visibleTab
    //     }, 800); // Slight delay to handle fade-out animation
    // };


    const changeTab = (tab) => {
        // If the screen width is less than or equal to 600px, scroll to the section
        if (window.innerWidth <= 1120) {
            const sectionId = getSectionId(tab); // Helper function to get the correct section ID
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Always update the URL for larger screens (and mobile for consistency)
        setTimeout(() => {
            setSearchParams({ tab });
            setVisibleTab(tab);
        }, 800); // Slight delay for fade-out animation
    };

    // Helper function to map tab values to section IDs
    const getSectionId = (tab) => {
        switch (tab) {
            case "0": return "about";
            case "1": return "resume";
            case "2": return "works";
            case "3": return "skills";
            case "4": return "contact";
            default: return "";
        }
    };


    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>

            <div className={`layout grid p-[30px] min-h-full justify-center items-center mx-auto max-w-[1600px] grid-cols-[80px_40%_54%]`}>
                <div className="left">
                    <div className={`link font-semibold ${showTabs ? 'show' : ''} rounded`}>
                        <NavLink className={`link ml-1 lg:ml-0  ${currentTab === "0" ? 'activeLink' : ""}`} to="/?tab=0" onClick={() => changeTab("0")}>ABOUT</NavLink>
                        <NavLink className={`link ml-1 lg:ml-0  ${currentTab === "1" ? 'activeLink' : ""}`} to="/?tab=1" onClick={() => changeTab("1")}>RESUME</NavLink>
                        <NavLink className={`link ml-1 lg:ml-0  ${currentTab === "2" ? 'activeLink' : ""}`} to="/?tab=2" onClick={() => changeTab("2")}>WORKS</NavLink>
                        <NavLink className={`link ml-1 lg:ml-0  ${currentTab === "3" ? 'activeLink' : ""}`} to="/?tab=3" onClick={() => changeTab("3")}>SKILLS</NavLink>
                        <NavLink className={`link ml-1 lg:ml-0  ${currentTab === "4" ? 'activeLink' : ""}`} to="/?tab=4" onClick={() => changeTab("4")}>CONTACT</NavLink>
                    </div>

                </div>

                <div className="center">
                    <ProfileIntroCard />
                </div>

                <div className="right">
                    {windowWidth > 1120 ?
                        <div className={`content `}>
                            {visibleTab === "0" ? (
                                <About isVisible={currentTab === "0"} />
                            ) : visibleTab === "1" ? (
                                <Resume isVisible={currentTab === "1"} />
                            ) : visibleTab === "2" ? (
                                <Works isVisible={currentTab === "2"} />
                            ) : visibleTab === "3" ? (
                                <Skills isVisible={currentTab === "3"} />
                            ) : visibleTab === "4" ? (
                                <Contact isVisible={currentTab === "4"} />
                            ) : (
                                ''
                            )}
                        </div>
                        :
                        <div className={`content `}>
                            <About isVisible={true} />
                            <Resume isVisible={true} />
                            <Works isVisible={true} />
                            <Skills isVisible={true} />
                            <Contact isVisible={true} />

                        </div>}
                </div>
            </div>

        </>
    );
};

export default Layout;
