import React from 'react'
import Facilities from '../components/Facilities/Facilities';
import CreditFooter from '../components/Footer/CreditFooter';
import HostelFooter from '../components/Footer/HostelFooter';
import Slider from '../components/Slider/Slider';

export default function HomePage() {

    return (
        <>
            <Slider />
            <Facilities />
            <HostelFooter />
            <CreditFooter />
        </>
    )
}
