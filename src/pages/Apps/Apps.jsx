import { useState, useEffect } from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import { Link, useLoaderData } from "react-router";

import appError from '../../assets/App-Error.png'

const formatInternationalNumber = (number, locale = "en-US", options = {}) => {
    return new Intl.NumberFormat(locale, {
        notation: "compact",
        compactDisplay: "short",
        ...options,
    }).format(number);
};

const Apps = () => {
    const apps = useLoaderData();

    // State for search
    const [searchTerm, setSearchTerm] = useState("");

    const [filteredApps, setFilteredApps] = useState(apps);

    const [loading, setLoading] = useState(false);

    // Handle search filtering
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            setLoading(true); 

            const results = apps.filter((app) =>
                app.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

            setFilteredApps(results);
            setLoading(false); 
        }, 400);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm, apps]);

    return (
        <div>
            <div className="max-w-[1200px] mx-auto px-4 py-10">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">
                        ({filteredApps.length}) Apps Found
                    </h3>

                    <label className="input">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            required
                            placeholder="Search App"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </label>
                </div>

                <div className="py-6 text-center">
                    <h3 className="font-bold text-5xl">Our All Applications</h3>
                    <p className="pt-6 text-[#627382] font-medium">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                {/* Loading animation */}
                {loading && (
                    <div className="text-center py-6">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                        <p className="mt-2 text-gray-600">Searching...</p>
                    </div>
                )}

                {/* No Apps Found */}
                {!loading && filteredApps.length === 0 && (


                    <div>

                        <div className="mt-10 flex justify-center relative">

                            <img className="w-[250px] md:w-[300px] lg:w-[500px]" src={appError} />

                        </div>

                        <div className='text-center py-6'>

                            <h3 className='text-5xl font-bold'>OOPS!, APP NOT FOUND</h3>
                            <p className='text-gray-400 py-8 font-medium'>The App you are requesting is not found on our system.  please try another apps</p>


                            <Link to="/apps"><button className='gradient-btn gradient-btn-outline text-amber-50 font-semibold px-8 py-3 rounded-sm '>Go Back!</button></Link>


                        </div>



                    </div>





                )}


                {/* if loading or successfull search Results */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {!loading &&
                        filteredApps.map((app) => (
                            <Link to="/app-details" key={app.id}>
                                <div className="bg-white rounded-sm shadow-sm hover:shadow-2xl transition duration-300 p-5">
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={app.image}
                                            alt={app.title}
                                            className="object-contain"
                                        />
                                    </div>

                                    <h2 className="text-lg font-semibold text-center">
                                        {app.title}
                                    </h2>

                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center gap-2">
                                            <img src={downloadIcon} className="w-4 h-4" />
                                            <span className="text-sm font-medium text-gray-700">
                                                {formatInternationalNumber(app.downloads, "en-US", {
                                                    useGrouping: true,
                                                })}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <img src={ratingsIcon} className="w-4 h-4" />
                                            <span className="text-sm font-medium text-gray-700">
                                                {app.ratingAvg}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Apps;
