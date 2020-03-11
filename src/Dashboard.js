import React, { useState } from 'react'
import Downloads from './Downloads'
import ActiveUsers from './ActiveUsers'
import Reviews from './Reviews'
import UserBehavior from './UserBehavior'
import Ranking from './Ranking'
import InAppPurchases from './InAppPurchases'

function Dashboard() {
    const pages = ["Downloads", "Bewertungen", "Aktive Nutzer", "Nutzerverhalten", "Ranking", "In-App-Purchases", "Dashboard"];
    const [selectedPage, setSelectedPage] = useState(pages[6]);

    function handleSelectionChange(e) {
        setSelectedPage(e.target.value)
    }

    function getPage() {
        switch (selectedPage) {
            case pages[0]:
                return <Downloads />
            case pages[1]:
                return <Reviews />
            case pages[2]:
                return <ActiveUsers />
            case pages[3]:
                return <UserBehavior />
            case pages[4]:
                return <Ranking />
            case pages[5]:
                return <InAppPurchases />
            case pages[6]: 
                return (
                <div id={"selectPages"}>
                    <h1>Dashboard</h1>
                    <div><button value={pages[0]} onClick={handleSelectionChange}>Downloads</button></div>
                    <div><button value={pages[1]} onClick={handleSelectionChange}>Bewertungen</button></div>
                    <div><button value={pages[2]} onClick={handleSelectionChange}>Aktive Nutzer</button></div>
                    <div><button value={pages[3]} onClick={handleSelectionChange}>Nutrzerverhalten</button></div>
                    <div><button value={pages[4]} onClick={handleSelectionChange}>Ranking</button></div>
                    <div><button value={pages[5]} onClick={handleSelectionChange}>In-App Purchases</button></div>
                </div>
                )
        }
    }
    return (
        <div>
            <div>
                <button value={pages[6]} onClick={handleSelectionChange}>Return</button>
            </div>
            {getPage()}
        </div>
    );
}

export default Dashboard;
