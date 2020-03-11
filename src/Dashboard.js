import React, { useState } from 'react'
import Downloads from './Downloads'
import ActiveUsers from './ActiveUsers'
import Reviews from './Reviews'
import UserBehavior from './UserBehavior'
import Ranking from './Ranking'
import InAppPurchases from './InAppPurchases'

function Dashboard() {
    const pages = ["Downloads", "Bewertungen", "Aktive Nutzer", "Nutzerverhalten", "Ranking", "In-App-Purchases", "Dashboard"];
    const [selectedPage, setSelectedPage] = useState(pages[0]);

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
                    <h1>Dashboard</h1>
                )
        }
    }

    return (
        <div>
            <select id={"selectPages"} onChange={handleSelectionChange}>
            <option value={pages[0]}>{pages[0]}</option>
            <option value={pages[1]}>{pages[1]}</option>
            <option value={pages[2]}>{pages[2]}</option>
            <option value={pages[3]}>{pages[3]}</option>
            <option value={pages[4]}>{pages[4]}</option>
            <option value={pages[5]}>{pages[5]}</option>
            <option value={pages[6]}>{pages[6]}</option>
        </select>
        {getPage()}
        </div>
    );
}

export default Dashboard;
