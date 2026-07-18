import React, { useState } from 'react';
import TabBar from './TabBar';
import MenuButton from './MenuButton';
import FooterStats from './FooterStats';
function PlayPanel() {
    const [activeTab, setActiveTab] = useState("new-games");
    return (
        <div className='glass grid grid-cols-1 gap-5'>
            <TabBar 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div className=" grid grid-cols-1 gap-2 px-4 ">
                <MenuButton />
                <MenuButton />
                <MenuButton />
                <MenuButton />
                <MenuButton />
            </div>
            <FooterStats />
        </div>
    )
}

export default PlayPanel