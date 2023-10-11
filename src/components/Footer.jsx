import Logo from './Logo';

const Footer = () => {
    return (
        <div className="relative w-full flex justify-between items-start gap-3">
            <div className="w-1/2 flex flex-col gap-3">
                <Logo />
                <p className="md:w-72">Get out there & discover your next slope, mountain & destination!</p>
            </div>
            <div className="md:w-1/3 flex justify-between gap-3">
                <div className="flex flex-col gap-2">
                    <h2 className="text-accent">More on The Blog</h2>
                    <ul className="text-xs font-normal flex flex-col gap-2">
                        <li>About MNTN</li>
                        <li>Contributors & Writers</li>
                        <li>Write For Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-accent">More on MNTN</h2>
                    <ul className="text-xs font-normal flex flex-col gap-2">
                        <li>The Team</li>
                        <li>Jobs</li>
                        <li>Press</li>
                    </ul>
                </div>
            </div>
            <span className="absolute bottom-[-20px] left-0 text-xs text-gray-500">Copyright 2019 MNTN, Inc. Terms & Privacy</span>
        </div>
    );
};

export default Footer;
