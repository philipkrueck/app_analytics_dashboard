import React from 'react'
import Downloads from './Downloads'
import ActiveUsers from './ActiveUsers'
import Reviews from './Reviews'
import UserBehavior from './UserBehavior'
import Ranking from './Ranking'
import InAppPurchases from './InAppPurchases'

function Dashboard() {
    return (
        <div>
            <Downloads />        
            <ActiveUsers />
            <Reviews />
            <UserBehavior />
            <Ranking />
            <InAppPurchases />    
        </div>
    )
}

export default Dashboard;
