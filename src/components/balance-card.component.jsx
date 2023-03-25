import React, { Fragment } from 'react'
import { useState } from 'react';
import { currencyFormatter } from '../utils';
import logo from '../assets/logo.svg';
import { useTracker } from '../context/TrackerContext';
export default function BalanceCard() {
    const { getBalance } = useTracker();
    const balance = getBalance();

    return (
        <Fragment>
            <div className="header-container card">
                <div className="header-left">
                    <p>My balance</p>
                    <span className="balance" id="balance">{currencyFormatter.format(balance)}</span>
                </div>
                <div className="header-right">
                    <img src={logo} alt="logo icon with 1 outline circle and filled color circle" />
                </div>

            </div>
        </Fragment>

    )
}
