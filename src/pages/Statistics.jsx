import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const loaderData = useLoaderData()
    const data = loaderData.map(d => {
        return {
            name: d.estate_title,
            uv: d.area
        }
    })
    return (
        <div className='flex w-11/12 mx-auto container items-center justify-center md:min-h-[calc(100vh-104px)] lg:min-h-[calc(100vh-104px)]'>
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
                <YAxis className='text-sm' dataKey="uv"  />
            </BarChart>
        </div>
    );
};

export default Statistics;