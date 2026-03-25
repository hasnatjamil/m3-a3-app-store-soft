
import hreoImage from '../../assets/hero.png'
import appStore from '../../assets/appStore.png'
import playStore from '../../assets/playStore.png'



const Hero = () => {
    return (
        <div>

            <div className='flex flex-col items-center text-center'>

                {/* hero headings text */}
                <div className='pt-4'>
                    <h1 className='text-5xl md:text-6xl font-bold leading-tight'>We Build <br />
                        <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span>{" "} Apps</h1>

                    <p className='mt-6 text-gray-500 max-w-3xl mx-auto'>At,HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                </div>

                {/* mobile app link  */}
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

                    <a href="https://play.google.com">
                        <button className="flex items-center gap-2 border border-gray-400 px-5 py-2 rounded-md  hover:shadow-md hover:cursor-pointer transition">
                            <img className="w-6 h-6" src={playStore} />
                            Google Play
                        </button>
                    </a>

                    <a href="https://www.apple.com/app-store/"><button className="flex items-center gap-2 border border-gray-400 px-5 py-2 rounded-md  hover:shadow-md hover:cursor-pointer transition">
                        <img className="w-6 h-6" src={appStore} />
                        App Store
                    </button>
                    </a>

                </div>

                {/* hero image */}
                <div className="mt-10 flex justify-center relative">
                    <img className="w-[280px] md:w-[600px] lg:w-[800px]" src={hreoImage} />
                </div>

            </div>


            {/* Banner */}
            <div className='w-full  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 text-white'>

                <div className="max-w-[1100px] mx-auto px-4 text-center">

                    <h3 className="text-2xl md:text-4xl font-semibold mb-10">
                        Trusted By Millions, Built For You
                    </h3>
                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div>
                            <p className="text-sm opacity-80">Total Downloads</p>
                            <h2 className="text-5xl font-bold mt-2">29.6M</h2>
                            <p className="text-sm mt-1 opacity-70">21% More Than Last Month</p>
                        </div>

                        <div>
                            <p className="text-sm opacity-80">Total Reviews</p>
                            <h2 className="text-5xl font-bold mt-2">906K</h2>
                            <p className="text-sm mt-1 opacity-70">46% More Than Last Month</p>
                        </div>

                        <div>
                            <p className="text-sm opacity-80">Active Apps</p>
                            <h2 className="text-5xl font-bold mt-2">132+</h2>
                            <p className="text-sm mt-1 opacity-70">31 More Will Launch</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>



    );
};

export default Hero;