import React from 'react';
import Header from '../Components/Header/header';
import AsideCardLeft from '../Components/Asidecard/asidecardleft';
import AsideCardRightTop from '../Components/Asidecard/aisdecardrighttop';
import AsideCardRightBottom from '../Components/Asidecard/asidecardrightbottom';
import AsideCardRight from '../Components/Asidecard/asidecardright';
import AsideCardRightMiddle from '../Components/Asidecard/asidecardmiddle';

export default function App() {

return (
        <>
        <Header />
        <AsideCardLeft />
        <div className="main-container">
        <AsideCardRightTop />
        <AsideCardRightBottom />
        <AsideCardRightMiddle />
        <AsideCardRight />
        </div>
        </>
);
}