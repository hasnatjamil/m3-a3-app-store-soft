import { Link } from 'react-router';
import errorImage from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div>


            <div className="mt-10 flex justify-center relative">
                <img className="w-[250px] md:w-[300px] lg:w-[500px]" src={errorImage} />

            </div>
            <div className='text-center py-6'>
                <h3 className='text-5xl font-bold'>Oops, page not found!</h3>
                <p className='text-gray-400 py-8 font-medium'>The page you are looking for is not available.</p>


                <Link to="/"><button className='gradient-btn gradient-btn-outline text-amber-50 font-semibold px-8 py-3 rounded-sm '>Go Back!</button></Link>


            </div>
        </div>
    );
};

export default ErrorPage;