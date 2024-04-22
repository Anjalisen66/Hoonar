import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className='bg-neutral-900 h-96'>
                <div className='px-40 py-16 flex gap-40'>
                    <div className='flex-col gap-3'>
                        <div className='text-white text-3xl font-bold pb-5'>Hoonar</div>
                        <div className='text-slate-500 text-sm py-4'>Enter your email to get notified by ArtBit for latest updates.</div>
                        <div className='text-2xl text-slate-500 flex gap-2 py-3 '>
                            <FaTwitter />
                            <AiFillInstagram />
                            <IoLogoLinkedin />
                        </div>
                        <div className='text-slate-500 flex border-1 h-14 w-64 py-2'>
                            <input className='text-sm text-slate-500  bg-grey-500 rounded-full  px-2' type="search" placeholder='Email Address' />
                            <div className='text-purple-400 text-lg'><FaCircleArrowRight /></div>
                        </div>
                    </div>

                    <div className='flex gap-24'>
                        <div className='text-slate-500 '>
                            <div className="font-bold py-2 text-white">Logo </div>
                            <div className='pb-1'>Home</div>
                            <div className='py-1 '>About Us</div>
                            <div className='py-1'>Services</div>
                            <div className='py-1'>Projects</div>
                        </div>

                        <div className='text-slate-500'>
                            <div className="font-bold py-2 text-white">Other </div>
                            <div className='pb-1'>Privacy Policy</div>
                            <div className='py-1'>Terms and Conditions</div>
                            <div className='py-1'>Others</div>
                            <div className='py-1'>Others</div>

                        </div>
                        <div className='text-slate-500'>
                            <div className="font-bold py-2 text-white">Resources </div>
                            <div className='pb-1'>Platform Status</div>
                            <div className='py-1 '>Partners</div>
                            <div className='py-1'>Taxes</div>
                            <div className='py-1'>Newsletters</div>

                        </div>
                    </div>
                </div>
                <div className='text-white text-xs text-center'>© Boost Engine, Inc @ All Rights Reserved</div>
            </div>
        </>
    )
}

export default Footer