import React from 'react'
import DeltaComponent from '../General/DeltaComponent'
import IconDownload from '../General/images/Downloads.svg'
import IconAktiveBenutzer from '../General/images/Aktive Nutzer.svg'
import IconInAppPurchases from '../General/images/In-App-Purchases.svg'
import IconRanking from '../General/images/Ranking.svg'
import IconNutzerverhalten from '../General/images/Sessiondauer.svg'
import StarComponent from '../General/StarComponent'
import { pages } from '../General/Page'

function Dashboard(props) {

    const downloads = [64582438, 68582438];
    const activeUsers = [8732, 8332];
    const stars = [4.5, 4.3]
    const inAppPurchases = [659.73, 892.09];

    function didSelectTile(e) {
        props.didChangeSelection(e.target.value)
    }

    return (
        <div class={"Dashboard"} id={"selectPages"}>
            <h1 class={"DashboardHeading"}>Dashboard</h1>
            <h2 class={"DashboardHeading"}>Analytics</h2>
            <div class={"DashboardKPI"} >
                <h4>Downloads</h4>
                <img src={IconDownload} alt={""}></img>
                <button class={"DashboardButton"} value={pages.downloads} onClick={didSelectTile}></button>
                <div class={"DeltaComponent"} id="delta-component">
                    <p>{downloads[0]}</p>
                    <DeltaComponent newValue={downloads[0]} oldValue={downloads[1]}/>
                </div>
            </div>
            <div class={"DashboardKPI"} >
                <h4>Bewertung</h4>
                <StarComponent stars={stars[0]}/>
                <button class={"DashboardButton"} value={pages.reviews} onClick={didSelectTile}></button>
                <div class={"DeltaComponent"} id="delta-component">
                    <p>{stars[0]} Sterne</p>
                    <DeltaComponent newValue={stars[0]} oldValue={stars[1]}/>
                </div>
            </div>
            <div class={"DashboardKPI"} >
                <h4>Aktive Nutzer</h4>
                <img src={IconAktiveBenutzer} alt={""}></img>
                <button class={"DashboardButton"} value={pages.activeUsers} onClick={didSelectTile}></button>
                <div class={"DeltaComponent"} id="delta-component">
                    <p>{activeUsers[0] + " WAU"}</p>
                    <DeltaComponent newValue={activeUsers[0]} oldValue={activeUsers[1]}/>
                </div>
            </div>
            <div class={"DashboardKPI"} >
                <h4>Nutzerverhalten</h4>
                <img src={IconNutzerverhalten} alt={""}></img>
                <button class={"DashboardButton"} value={pages.userBehavior} onClick={didSelectTile}></button>
                <p>3h 47min</p>
            </div>
            <div class={"DashboardKPI"} >
                <h4>Ranking</h4>
                <img src={IconRanking} alt={""}></img>
                <button class={"DashboardButton"} value={pages.ranking} onClick={didSelectTile}></button>
                <p>267</p>
            </div>
            <div class={"DashboardKPI"} >
                <h4>In-App Purchases</h4>
                <img src={IconInAppPurchases} alt={""}></img>
                <button class={"DashboardButton"} value={pages.inAppPurchases} onClick={didSelectTile}></button>
                <div class={"DeltaComponent"} id="delta-component">
                    <p>{inAppPurchases[0] + "€"}</p>
                    <DeltaComponent newValue={inAppPurchases[0]} oldValue={inAppPurchases[1]}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
