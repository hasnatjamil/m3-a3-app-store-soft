
import { Link, Links } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";


const formatInternationalNumber = (number, locale = "en-US", options = {}) => {
    return new Intl.NumberFormat(locale, { notation: "compact", compactDisplay: "short", ...options, }).format(number);
};



const TrendingApps = ({ trendingApps }) => {

    //const [showAll, setShowAll] = useState(false)

    // const visibleApps = showAll ? trendingApps : trendingApps.filter(trendingApp => trendingApp.downloads >= 600000).filter(trendingApp => trendingApp.ratingAvg >= 4.2)

    const visibleApps = trendingApps.filter(trendingApp => trendingApp.downloads >= 420000).filter(trendingApp => trendingApp.ratingAvg >= 4.0)

    return (



        <div className="max-w-[1200px] mx-auto px-4 py-10">
            <div className="py-6 text-center">
                <h3 className="font-bold text-5xl">Trending Apps</h3>
                <p className="pt-6 text-[#627382] font-medium">Explore All Trending Apps on the Market developed by us</p>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">





                {visibleApps.map((trendingApp) => (

                    <Link to={`/app-details/${trendingApp.id}`}  key={trendingApp.id} className="block">
                        <div
                           
                            className="bg-white rounded-sm shadow-sm hover:shadow-2xl transition duration-300 p-5"
                        >

                            <div className="flex justify-center mb-4">
                                <img
                                    src={trendingApp.image}
                                    alt={trendingApp.title}
                                    className=" object-contain"
                                />
                            </div>


                            <h2 className="text-lg font-semibold text-center">
                                {trendingApp.title}
                            </h2>




                            <div className="flex justify-between items-center mt-4">


                                <div className="flex items-center gap-2">
                                    <img src={downloadIcon} className="w-4 h-4" />
                                    <span className="text-sm font-medium text-gray-700">
                                        {formatInternationalNumber(trendingApp.downloads, 'en-US', { useGrouping: true })}
                                    </span>
                                </div>


                                <div className="flex items-center gap-2">
                                    <img src={ratingsIcon} className="w-4 h-4" />
                                    <span className="text-sm font-medium text-gray-700">
                                        {trendingApp.ratingAvg}
                                    </span>
                                </div>

                            </div>
                        </div>

                    </Link>

                ))}



            </div>
            <div className="flex justify-center mt-6">

                <Link to='/apps'>
                    <button
                        className='gradient-btn gradient-btn-outline font-semibold px-8 py-3 rounded-sm'>
                        Show All
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default TrendingApps;