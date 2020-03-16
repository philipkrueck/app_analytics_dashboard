import React, { useState } from 'react'
import Downloads from '../Downloads/Downloads'
import ActiveUsers from '../Active Users/ActiveUsers'
import Reviews from '../Reviews/Reviews'
import UserBehavior from '../User Behavior/UserBehavior'
import Ranking from '../Ranking/Ranking'
import InAppPurchases from '../In-App Purchases/InAppPurchases'
import DeltaComponent from '../General/DeltaComponent'
import IconBewertung from '../General/images/Bewertung.svg'
import IconDownload from '../General/images/Downloads.svg'
import IconAktiveBenutzer from '../General/images/Aktive Nutzer.svg'
import IconInAppPurchases from '../General/images/In-App-Purchases.svg'
import IconRanking from '../General/images/Ranking.svg'
import IconNutzerverhalten from '../General/images/Sessiondauer.svg'

function Dashboard() {
    const pages = ["Downloads", "Bewertungen", "Aktive Nutzer", "Nutzerverhalten", "Ranking", "In-App-Purchases", "Dashboard"];
    const [selectedPage, setSelectedPage] = useState(pages[6]);
    const DummyData = ["64582438", "97346328", "836276", "99732548234"];
    const shuffledDownloads = DummyData[Math.floor(Math.random()*DummyData.length)];

    function handleSelectionChange(e) {
        console.log(e)
        setSelectedPage(e.target.value)
    }

    function backButton() {
        if (selectedPage !== "Dashboard") {
            return (
                <div>
                    <button value={pages[6]} onClick={handleSelectionChange}>Return</button>
                </div>
            );
        }
    }

    function getPage() {
        // eslint-disable-next-line default-case
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
                <div class={"Dashboard"} id={"selectPages"}>
                    <h1 class={"DashboardHeading"}>Dashboard</h1>
                    <h2 class={"DashboardHeading"}>Analytics</h2>
                    <div class={"DashboardKPI"} >
                        <h4>Downloads</h4>
                        <img src={IconDownload}></img>
                        <button class={"DashboardButton"} value={pages[0]} onClick={handleSelectionChange}></button>
                        <div id="delta-component">
                            <DeltaComponent percentageValue={0.01}/>
                            <p>{shuffledDownloads}</p>
                        </div>
                    </div>
                    <div class={"DashboardKPI"} >
                        <h4>Bewertung</h4>
                        <img src={IconBewertung}></img>
                        <button class={"DashboardButton"} value={pages[1]} onClick={handleSelectionChange}></button>
                        <p>test</p>
                    </div>
                    <div class={"DashboardKPI"} >
                        <h4>Aktive Nutzer</h4>
                        <img src={IconAktiveBenutzer}></img>
                        <button class={"DashboardButton"} value={pages[2]} onClick={handleSelectionChange}></button>
                        <p>test</p>
                    </div>
                    <div class={"DashboardKPI"} >
                        <h4>Nutzerverhalten</h4>
                        <img src={IconNutzerverhalten}></img>
                        <button class={"DashboardButton"} value={pages[3]} onClick={handleSelectionChange}></button>
                        <p>3h 47min</p>
                    </div>
                    <div class={"DashboardKPI"} >
                        <h4>Ranking</h4>
                        <img src={IconRanking}></img>
                        <button class={"DashboardButton"} value={pages[4]} onClick={handleSelectionChange}></button>
                        <p>267</p>
                    </div>
                    <div class={"DashboardKPI"} >
                        <h4>In-App Purchases</h4>
                        <img src={IconInAppPurchases}></img>
                        <button class={"DashboardButton"} value={pages[5]} onClick={handleSelectionChange}></button>
                        <p>test</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {backButton()}
            {getPage()}
        </div>
    );
}

export default Dashboard;
