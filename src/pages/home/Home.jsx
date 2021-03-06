import { Chart } from '../../components/chart/Chart';
import { FeaturedInfo } from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
// import { WidgetLg } from '../../components/widgetLg/WidgetLg';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { WidgetSm } from '../../components/widgetSm/WidgetSm';
import { WidgetLg } from '../../components/widgetLg/WidgetLg';

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Okt',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/user/stats');

        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });

        statsList.map((item) =>
          // res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'Active User': item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  console.log('test');
  console.log(userStats);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        // data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
