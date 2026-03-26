
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";


import { useState } from "react";
import { useLoaderData } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";
import toast from "react-hot-toast";

import { getStoredDataFromLS } from "../../utils/localStorage";

const formatInternationalNumber = (number, locale = "en-US", options = {}) => {
    return new Intl.NumberFormat(locale, { notation: "compact", compactDisplay: "short", ...options, }).format(number);
};

const Installation = () => {

    const allApps = useLoaderData();

    const storedAppIds = getStoredDataFromLS();

    const installedApps = allApps.filter(app => storedAppIds.includes(app.id));

    const [appsState, setAppsState] = useState(installedApps);

    const [sortType, setSortType] = useState("Default");

    const handleSort = (type) => {
        setSortType(type);

        let sorted = [...appsState];


        if (type === "small-to-large") {
            sorted.sort((a, b) => a.size - b.size);
        }

        if (type === "large-to-small") {
            sorted.sort((a, b) => b.size - a.size);
        }

        setAppsState(sorted);
    };

    const handleUninstall = (id) => {
        const storedIds = getStoredDataFromLS().filter(appId => appId !== id);

        localStorage.setItem("installedApps", JSON.stringify(storedIds));

        setAppsState(prev => prev.filter(app => app.id !== id));

        toast.success("App Uninstalled Successfully");
    };




    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">

            {/* top head */}
            <div className="text-center space-y-3">
                <h3 className="font-bold text-3xl md:text-5xl">
                    Your Installed Apps
                </h3>
                <p className="text-gray-500 text-sm md:text-lg">
                    Explore all apps you have installed
                </p>
            </div>

            {/* top section*/}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">

                {/* top left bar */}
                <div className="text-sm md:text-base font-medium">
                    {installedApps.length} App Found
                </div>

                {/* right dropdown */}
                <div className="w-full md:w-auto">
                    <div className="dropdown dropdown-bottom w-full md:w-auto">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn w-full md:w-auto flex justify-between"
                        >
                            {sortType} <MdKeyboardArrowDown />
                        </div>

                        <ul
                            tabIndex={-1}
                            className="dropdown-content menu bg-base-100 rounded-box z-10 w-full md:w-52 p-2 shadow"
                        >


                            <li>
                                <button onClick={() => handleSort("small-to-large")}>
                                    Small to  Large
                                </button>
                            </li>

                            <li>
                                <button onClick={() => handleSort("large-to-small")}>
                                    Large to Small
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            {/* listing apps from local torage */}
            <div className="space-y-4 mt-6">

                {appsState.length === 0 ? (
                    <p className="text-center text-gray-400">
                        No installed apps found
                    </p>
                ) : (
                    appsState.map(app => (
                        <div
                            key={app.id}
                            className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 p-4 border bg-white
                             border-gray-200 rounded-lg hover:shadow-md transition"
                        >

                            {/* left side section */}
                            <div className="flex items-center gap-4 w-full">

                                {/* left side image */}
                                <div className="w-14 h-14 bg-gray-200 rounded flex items-center justify-center">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-10 object-contain"
                                    />
                                </div>

                                {/* apps info */}
                                <div>
                                    <h4 className="font-semibold text-sm md:text-base">
                                        {app.title}
                                    </h4>

                                    <div className="flex gap-3 text-xs md:text-sm text-gray-500 mt-1">
                                        <span className="flex gap-1 items-center"><img className="w-4 h-4" src={downloadIcon} alt="" /> {formatInternationalNumber(app.downloads)}</span>
                                        <span className="flex gap-1 items-center"><img className="w-4 h-4" src={ratingsIcon} alt="" /> {app.rating}</span>
                                        <span>{app.size} MB</span>
                                    </div>
                                </div>
                            </div>

                            {/* right side button uninstall that remove from local storage */}
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded transition"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))
                )}

            </div>
        </div>
    );
};

export default Installation;