import HG from '../assets/HG.jpg';
import MG from '../assets/MG.png';
import VG from '../assets/VG.png';
import BGHero from '../assets/BG Hero.png';

const Intro = () => {
    return (
        <div className="lg:h-screen">
            <img className="absolute z-[-3] left-0 top-0 w-screen" src={HG} />
            <img className="absolute z-[-2] left-0 top-28 lg:top-72 w-screen" src={MG} />
            <img className="absolute z-[-1] left-0 top-52 sm:top-72 lg:top-[500px] w-screen" src={VG} />
            <img className="absolute z-[-1] left-0 top-0 w-screen" src={BGHero} />
            <div className="w-full flex justify-between items-center mt-48">
                <div></div>
                <div className="flex flex-col gap-10 max-w-2xl">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 items-center">
                            <div className=" w-12 border-b-2 border-accent" />
                            <span className="uppercase text-accent">A hiking guide</span>
                        </div>
                        <h1 className="font-georgia text-5xl">Be Prepared For The Mountains And Beyond!</h1>
                        <div className="flex gap-2 items-center cursor-pointer">
                            <h1 className="lowercase">Scroll down</h1>
                            <svg width="12" height="12" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <p className="rotate-90 mb-6 whitespace-nowrap">Follow us</p>
                    <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.4592 6.01238C21.6896 6.35373 20.8624 6.58442 19.9944 6.68815C20.8803 6.15701 21.5609 5.31598 21.8813 4.31378C21.052 4.80564 20.1336 5.16278 19.156 5.3552C18.3732 4.52112 17.2579 4 16.0235 4C13.6534 4 11.7317 5.92147 11.7317 8.29155C11.7317 8.6279 11.7697 8.95546 11.8429 9.2696C8.27609 9.0906 5.11375 7.38203 2.99709 4.78551C2.62765 5.41935 2.41601 6.15656 2.41601 6.94309C2.41601 8.43204 3.17364 9.74563 4.32523 10.5153C3.62179 10.4929 2.95996 10.2999 2.38139 9.97846C2.38098 9.99639 2.38098 10.0143 2.38098 10.0324C2.38098 12.1118 3.86033 13.8463 5.82359 14.2406C5.46349 14.3387 5.08434 14.3912 4.69294 14.3912C4.4164 14.3912 4.14755 14.3642 3.88546 14.3142C4.43161 16.0191 6.01653 17.26 7.89454 17.2945C6.42576 18.4457 4.57527 19.1318 2.56453 19.1318C2.21812 19.1318 1.87651 19.1114 1.54077 19.0717C3.44003 20.2894 5.69591 21 8.1195 21C16.0134 21 20.3302 14.4605 20.3302 8.78918C20.3302 8.60314 20.326 8.41805 20.3177 8.23395C21.1563 7.62886 21.8839 6.87302 22.4592 6.01238Z"
                            fill="white"
                        />
                    </svg>
                    <svg className="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.8 1.90735e-05H14.2C17.4032 1.90735e-05 20 2.59677 20 5.80002V14.2C20 17.4033 17.4032 20 14.2 20H5.8C2.59675 20 0 17.4033 0 14.2V5.80002C0 2.59677 2.59675 1.90735e-05 5.8 1.90735e-05ZM5.6 2C3.61177 2 2 3.61178 2 5.6V14.4C2 16.3882 3.61177 18 5.6 18H14.4C16.3882 18 18 16.3882 18 14.4V5.6C18 3.61178 16.3882 2 14.4 2H5.6ZM15.25 3.5C15.9404 3.5 16.5 4.05965 16.5 4.75C16.5 5.44036 15.9404 6 15.25 6C14.5596 6 14 5.44036 14 4.75C14 4.05965 14.5596 3.5 15.25 3.5ZM10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15C7.23857 15 5 12.7614 5 10C5 7.23858 7.23857 5 10 5ZM10 7C8.3431 7 7 8.3432 7 10C7 11.6569 8.3431 13 10 13C11.6569 13 13 11.6569 13 10C13 8.3432 11.6569 7 10 7Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Intro;
