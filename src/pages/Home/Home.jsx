import { Suspense } from "react";
import Hero from "../../components/Hero/Hero";
import { useLoaderData } from "react-router";
import TrendingApps from "../../components/TrendingApps/TrendingApps";



const Home = () => {
    const trendingApps = useLoaderData();
    // console.log(trendingApps);

    return (
        <div>
            <Hero></Hero>

            <Suspense fallback={<>"Loading....."</>}>
                <TrendingApps trendingApps={trendingApps}></TrendingApps>
            </Suspense>

        </div>
    );
};

export default Home;