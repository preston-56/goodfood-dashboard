import { LineChart, lineElementClasses, markElementClasses } from '@mui/x-charts/LineChart';
import { ratingData } from '../../data';

const RatingLineChart = () => {
  // Extracting aspect names and ratings from the data
  const aspects = ratingData.map(({ aspect }) => aspect);
  const ratings = ratingData.map(({ rating }) => rating);

  return (
    <div className="flex flex-col">

      <h2 className="text-xl font-bold mb-4 grid justify-items-start">Food Ratings</h2>
      <p className="text-gray-500 text-start mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        malesuada...
      </p>
      <LineChart
        width={500}
        height={300}
        series={[{ data: ratings, label: 'Ratings', id: 'ratingsId' }]}
        xAxis={[{ scaleType: 'point', data: aspects }]}
        sx={{
          [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
            strokeWidth: 1,
          },
          '.MuiLineElement-series-ratingsId': {
            strokeDasharray: '5 5',
          },
          [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]: {
            fill: '#fff',
          },
          [`& .${markElementClasses.highlighted}`]: {
            stroke: 'none',
          },
        }}
      />
    </div>

  );
};

export default RatingLineChart;
