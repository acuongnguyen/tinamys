"use client"
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
    const handleScroll = () => {

    }
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between sm:px-16 px-6">
                <Link href="/" className='flex justify-center items-center'>
                    <Image src="/logo.svg" alt="Car Hub Logo" width={236} height={36} className="object-contain"></Image>
                </Link>
                <CustomButton
                    title="Trải Nghiệm"
                    containerStyles="bg-primary-blue text-white rounded-xl px-6 my-3"
                    handleClick={handleScroll}
                />
            </nav>
            <hr />
        </header>
    )
}
export default Navbar;