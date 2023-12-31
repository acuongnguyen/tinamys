"use client";
import Image from 'next/image';
import CustomButton from './CustomButton';
import { useEffect } from 'react';
import { useGlobalContext } from '@/app/Context/store';
import Link from 'next/link';

const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className='hero'>
            <div className='flex-1.5 flex pt-24 padding-x justify-center items-center flex-col'>
                <h1 className='2xl:text-[48px] sm:text-[64px] text-[50px]'>
                    Thay đổi cách quản lý công việc
                </h1>
                <h1 className='hero__title'>
                    Mapping your Success
                </h1>
                <p className="hero__subtitle">Quản lý mục tiêu của công ty, nhóm, nhân sự một cách dễ dàng và tiện lợi</p>
                <p className="hero__subtitle">Cho phép lập mục tiêu theo chu kì năm, quý, tháng, tuần</p>
                <p className="hero__subtitle">Quản lý checkin tiến độ mục tiêu, dự án công ty, nhóm</p>
                <p className="hero__subtitle">Tự động nhắc việc và thông báo đến những người liên quan</p>

                <Link href="/login" passHref>
                    <CustomButton
                        title="Trải nhiệm ngay!"
                        containerStyles="bg-primary-blue text-white rounded-full mt-10"

                    />
                </Link>
                <div className=""><Image src="/image-section-one.png" alt="image-section one" width={1440} height={400} ></Image></div>


            </div>
            <div className="hero__image-container">
                <div className="hero__image">

                </div>
            </div>
        </div>
    )
}
export default Hero;