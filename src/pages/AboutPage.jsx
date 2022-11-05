import React from 'react'
import AboutBox from '../components/AboutBox/AboutBox'
import Banner from '../components/Banner/Banner'
import CreditFooter from '../components/Footer/CreditFooter'
import HostelFooter from '../components/Footer/HostelFooter'

export default function AboutPage() {
    return (
        <>
                <Banner />
                <AboutBox />
                <HostelFooter />
                <CreditFooter />
        </>
    )
}
