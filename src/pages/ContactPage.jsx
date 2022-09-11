import React from 'react'
import Banner from '../components/Banner/Banner'
import CreditFooter from '../components/Footer/CreditFooter'
import HostelFooter from '../components/Footer/HostelFooter'
import MapBox from '../components/MapBox/MapBox'

export default function ContactPage() {
    return (
        <>
            <Banner />
            <MapBox />
            <HostelFooter />
            <CreditFooter />
        </>
    )
}
