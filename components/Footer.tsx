import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';
const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Link href="/" className='flex justify-center items-center'>
                        <Image src="/logo.svg" alt="Car Hub Logo" width={472} height={72} className="object-contain" />
                    </Link>

                    <p className="text-base tex-gray-700">Email: contact@tinasoft.vn<br />
                        Số điện thoại: +(84) 246 329 5589<br />
                        Địa chỉ văn phòng: Tầng 4, Tòa nhà Ellipse Tower,<br />
                        110 Trần Phú, Hà Đông, Hà Nội
                    </p>
                </div>
                <div className="footer__links pt-32 mr-32">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="font-bold">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link key={item.title} href={item.url} className="text-gray-500">
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10">
                <p className="">&copy; 2023 TINASOFT VIỆT NAM</p>
                <div className="footer__copyrights-link">
                    <Link href="/" className="text-gray-500"> Privacy Policy</Link>
                    <Link href="/" className="text-gray-500">Refund Policy</Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer;