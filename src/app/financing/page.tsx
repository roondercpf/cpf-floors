'use client'

import Image from "next/image";
import Link from "next/link";

import "@/app/sass/Financing.scss"

function Financing() {
    return ( 
        <>
            <>
                <div className="financing-main-banner">
                    <div className="financing-text">
                        <h2>Pay Now,<br></br> Buy Overtime</h2>
                        <p>Access the flexible financing program for dealers, contractors, subcontractors, and builders.</p>
                        <Link href="/become-a-dealer" className="link-light">Contact Now!</Link>
                    </div>
                    <div className="financing-img">
                        <Image src="/financing/financing-main-banner.svg" width={600} height={600} alt="CPF Floors Financing" ></Image>
                    </div>
                </div>
            </>

            <>
                <div className="bluetape-section">
                    <Image src="/financing/bluetape.svg" width={120} height={120} alt="Bluetape Logo"></Image>
                    <p>Keep your store’s cashflow thriving and grow your business  faster! When you join our dealer network, you can get multiple benefits,  including super friendly financing terms.
                    Get 0% interest for the first 30 days, and take 30, 60 or 90 days to pay.</p>
                </div>
                <div className="bluetape-card-section">
                    <div className="bluetape-card">
                        <Image src="/financing/financing-card-1.png" width={300} height={300} alt="Bluetape sction"></Image>
                        <h3>Fast Approval</h3>
                        <p>Prequalify in seconds without affecting your credit score and manage your line of credit conveniently from any device.</p>
                    </div>
                    <div className="bluetape-card">
                        <Image src="/financing/financing-card-2.png" width={300} height={300} alt="Bluetape sction"></Image>
                        <h3>Materials When You Need</h3>
                        <p>Say goodbye to juggling jobs and schedules due to cash flow constraints.</p>
                    </div>
                    <div className="bluetape-card">
                        <Image src="/financing/financing-card-3.png" width={300} height={300} alt="Bluetape sction"></Image>
                        <h3>Take on Bigger Jobs</h3>
                        <p>Easy access to financing puts your business in a better position for long-term success.</p>
                    </div>
                </div>
            </>
            <>
                <div className="bluetape-become-container">
                    <div className="bluetape-become">
                        <h2>Become a Dealer</h2>
                        <p>& Transform Spaces with Style</p>
                        <Link href="/become-a-dealer" className="link-light">Contact Now!</Link>
                    </div>
                </div>
            </>
        </>
     );
}

export default Financing;