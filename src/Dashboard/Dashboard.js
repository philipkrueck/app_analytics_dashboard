import React, { useState } from 'react'
import Downloads from '../Downloads/Downloads'
import ActiveUsers from '../Active Users/ActiveUsers'
import Reviews from '../Reviews/Reviews'
import UserBehavior from '../User Behavior/UserBehavior'
import Ranking from '../Ranking/Ranking'
import InAppPurchases from '../In-App Purchases/InAppPurchases'
import DeltaComponent from '../General/DeltaComponent'
import IconDownload from '../General/images/Downloads.svg'
import IconAktiveBenutzer from '../General/images/Aktive Nutzer.svg'
import IconInAppPurchases from '../General/images/In-App-Purchases.svg'
import IconRanking from '../General/images/Ranking.svg'
import IconNutzerverhalten from '../General/images/Sessiondauer.svg'
import StarComponent from '../General/StarComponent'

function Dashboard() {
    const pages = ["Downloads", "Bewertungen", "Aktive Nutzer", "Nutzerverhalten", "Ranking", "In-App-Purchases", "Dashboard"];
    const [selectedPage, setSelectedPage] = useState(pages[6]);
    const DummyDataDownloads = ["64582438", "97346328", "836276", "99732544"];
    const shuffledDownloads = DummyDataDownloads[Math.floor(Math.random()*DummyDataDownloads.length)];
    const DummyDataActiveUsers = ["8732 WAU", "1000 WAU", "733 WAU"];
    const shuffledActiveUsers = DummyDataActiveUsers[Math.floor(Math.random()*DummyDataActiveUsers.length)];
    const DummyDataInAppPurchases = ["659,73 €", "892,09 €", "9922,81 €"];
    const shuffledInAppPurchases = DummyDataInAppPurchases[Math.floor(Math.random()*DummyDataInAppPurchases.length)];
    const DummyDataStars = ["3.66", "3.84", "4.09", "4.45"];
    const shuffledStars = DummyDataStars[Math.floor(Math.random()*DummyDataStars.length)];

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
                        <div class={"DeltaComponent"} id="delta-component">
                            <p>{shuffledDownloads}</p>
                            <DeltaComponent percentageValue={shuffledStars}/>
                        </div>
                    </div>
                    <div class={"DashboardKPI"} >
                        <h4>Bewertung</h4>
                        <StarComponent percentageStars={shuffledStars}/>
                        <button class={"DashboardButton"} value={pages[1]} onClick={handleSelectionChange}></button>
                        <p>{shuffledStars} Sterne</p>
                    </div>
                    <div class={"DashboardKPI"} >
                        <h4>Aktive Nutzer</h4>
                        <img src={IconAktiveBenutzer}></img>
                        <button class={"DashboardButton"} value={pages[2]} onClick={handleSelectionChange}></button>
                        <div class={"DeltaComponent"} id="delta-component">
                            <p>{shuffledActiveUsers}</p>
                            <DeltaComponent percentageValue={-1.2}/>
                        </div>
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
                        <div class={"DeltaComponent"} id="delta-component">
                            <p>{shuffledInAppPurchases}</p>
                            <DeltaComponent percentageValue={0.0}/>
                        </div>
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
