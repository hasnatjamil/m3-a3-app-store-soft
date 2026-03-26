
import {  useState } from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";

import { useLoaderData } from 'react-router';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip

} from "recharts";
import { getStoredDataFromLS, saveDataToLS } from "../../utils/localStorage";
import toast from "react-hot-toast";



const formatInternationalNumber = (number, locale = "en-US", options = {}) => {
    return new Intl.NumberFormat(locale, { notation: "compact", compactDisplay: "short", ...options, }).format(number);
};


const AppDetails = () => {
    const appDetails = useLoaderData();


    //console.log(appDetails);

    //sorting rating to decending order
    const chartData = appDetails.ratings
        .map(item => ({
            name: item.name,
            value: item.count
        }))
        .sort((a, b) => b.value - a.value);





    const [installedApps, setInstalledApps] = useState(getStoredDataFromLS());

    const isDisabled = installedApps.includes(appDetails.id);

    const handleSaveToLocalStorage = (id) => {
        saveDataToLS(id);
        setInstalledApps(getStoredDataFromLS());
         toast.success("App Installed Successfully!");
    };



 
    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-12">

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">

                {/* App Image -left content */}
                <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-gray-100 flex items-center justify-center rounded">
                    <img
                        src={appDetails.image}
                        alt={appDetails.title}
                        className="w-[120px] md:w-[180px] object-contain"
                    />
                </div>

                {/* Right Content */}
                <div className="flex-1 text-center md:text-left">

                    <h1 className="text-2xl md:text-3xl font-bold mb-2">
                        {appDetails.title}
                    </h1>

                    <p className="text-sm mb-4">
                        Developed by{" "}
                        <span className="gradient-text font-medium">
                            {appDetails.companyName}
                        </span>
                    </p>

                    <hr className="border-gray-200 mb-6" />

                    {/* Stattistics content */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12 mb-6">

                        {/* Downloads */}
                        <div className="flex flex-col items-center md:items-start">
                            <img src={downloadIcon} alt="" className="w-5 md:w-6 mb-1" />
                            <p className="text-xs md:text-sm text-gray-500">Downloads</p>
                            <p className="text-xl md:text-2xl font-bold">{formatInternationalNumber(appDetails.downloads)}</p>
                        </div>

                        {/* Ratings */}
                        <div className="flex flex-col items-center md:items-start">
                            <img src={ratingsIcon} alt="" className="w-5 md:w-6 mb-1" />
                            <p className="text-xs md:text-sm text-gray-500">Average Ratings</p>
                            <p className="text-xl md:text-2xl font-bold">{appDetails.ratingAvg}</p>
                        </div>

                        {/* Reviews */}
                        <div className="flex flex-col items-center md:items-start">
                            <img src={reviewIcon} alt="" className="w-5 md:w-6 mb-1" />
                            <p className="text-xs md:text-sm text-gray-500">Total Reviews</p>
                            <p className="text-xl md:text-2xl font-bold">{formatInternationalNumber(appDetails.reviews)}</p>
                        </div>

                    </div>

                    {/* Install now Button */}
                    <button
                        onClick={() => handleSaveToLocalStorage(appDetails.id)}
                        className={`w-full md:w-auto px-6 py-3 rounded font-medium transition 
                            ${isDisabled ? "bg-gray-400 text-white cursor-not-allowed"
                                : "bg-green-500 hover:bg-green-600 text-white"}`} disabled={isDisabled} >
                        {
                            isDisabled ? `Installed (${appDetails.size} MB)` : `Install Now (${appDetails.size} MB)`}
                    </button>




                </div>
            </div>

            <hr className="mt-8 border-gray-300" />

            {/* rating section*/}
            <div className="mt-12">
                <h2 className="text-lg font-semibold mb-4 pb-2">
                    Ratings
                </h2>

                <div className="w-full h-[260px]">
                    <ResponsiveContainer>
                        <BarChart data={chartData} layout="vertical">

                            <XAxis
                                type="number"
                                axisLine={false}
                                tickLine={false}
                            />

                            <YAxis
                                type="category"
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                            />

                            <Tooltip />

                            <Bar
                                dataKey="value"
                                fill="#ff7a00"

                            />

                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>


            {/* description */}
            <div className="mt-10 border-t">
                <h2 className="text-lg font-semibold mb-4  pb-2">
                    Description
                </h2>

                <div className="text-gray-600 text-sm leading-relaxed space-y-5">
                    {appDetails.description.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AppDetails;