import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Statistics = () => {
    const loaderData = useLoaderData()
    const data = loaderData.map(d => {
        return {
            name: d.estate_title,
            uv: d.area
        }
    })
    return (
        <div className='flex w-11/12 mx-auto container items-center justify-center md:min-h-[calc(100vh-104px)] flex-col lg:min-h-[calc(100vh-104px)]'>
            <Helmet>
                <title>Neko&apos;s Island | Statistics</title>
            </Helmet>
            <div className='my-12 text-center' data-aos="fade-up" data-aos-duration="1000">
                <h1 className='text-3xl font-bold'>Our Living <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300% font-madimi'>Area by Name</span></h1>
                <p className='opacity-70'>This graph shows names in x axis and areas in y axis</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <BarChart
                    width={600}
                    height={500}
                    data={data}
                    margin={{
                        top: 0,
                        right: 50,
                        left: 100,
                        bottom: 120,
                    }}>
                    <Bar dataKey="uv" fill="#8884d8" />
                    <XAxis className='text-sm' dataKey="name" angle={-45} textAnchor='end' />
                    <YAxis className='text-sm' dataKey="uv" />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;