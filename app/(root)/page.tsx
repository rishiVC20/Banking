import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
    const loggedIn={firstName:'Rishikesh',lastName:'Chaudhari',email:'contact@gmail.com'}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently."
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={140000.39}
                />
            </header>
            RECENT TRANSACTIONS
        </div>
        <div>
            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance:123.50},{currentBalance: 500.34}]}
            />
        </div>
    </section>
  )
}

export default Home
