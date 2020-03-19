import React, {useState} from 'react'
import Dashboard from '../Dashboard/Dashboard'
import BackButton from './BackButton'
import Downloads from '../Downloads/Downloads'
import ActiveUsers from '../Active Users/ActiveUsers'
import Reviews from '../Reviews/Reviews'
import UserBehavior from '../User Behavior/UserBehavior'
import Ranking from '../Ranking/Ranking'
import InAppPurchases from '../In-App Purchases/InAppPurchases'

export const pages = {
    downloads: "Downloads",
    activeUsers: "Aktive Nutzer",
    inAppPurchases: "In-App Purchases",
    ranking: "Ranking",
    reviews: "Bewertungen", 
    userBehavior: "Nutzerverhalten", 
    dashboard: "Dash Board"
}

export default function Page() {
    const [selectedPage, setSelectedPage] = useState(pages.dashboard);

    function handleBackButtonClick() {
        setSelectedPage(pages.dashboard);
    }

    function getPage() {
        switch (selectedPage) {
            case pages.downloads:
                return (
                    <div>
                        <BackButton onClick={handleBackButtonClick}/>
                        <Downloads />
                    </div>
                );
            case pages.reviews:
                return (
                    <div>
                        <BackButton onClick={handleBackButtonClick}/>
                        <Reviews />
                    </div>
                );
            case pages.activeUsers:
                return (
                    <div>
                        <BackButton onClick={handleBackButtonClick}/>
                        <ActiveUsers />
                    </div>
                );
            case pages.userBehavior:
                return (
                    <div>
                        <BackButton onClick={handleBackButtonClick}/>
                        <UserBehavior />
                    </div>
                );
            case pages.ranking:
                return (
                    <div>
                        <BackButton onClick={handleBackButtonClick}/>
                        <Ranking />
                    </div>
                );
            case pages.inAppPurchases:
                return (
                    <div>
                        <BackButton onClick={handleBackButtonClick}/>
                        <InAppPurchases />
                    </div>
                );
            case pages.dashboard:
                return (
                    <Dashboard didChangeSelection={(newPage) => {setSelectedPage(newPage)}}/>
                );
        }
    }

    return (getPage());
}
