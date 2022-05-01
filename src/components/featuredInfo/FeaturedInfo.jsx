import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
// import { useEffect, useState } from 'react';
// import { userRequest } from '../../requestMethod';
import './featuredInfo.css';

export const FeaturedInfo = () => {
  // const [income, setIncome] = useState([]);
  // const [perc, setPerc] = useState(0);

  // useEffect(() => {
  //   const getIncome = async () => {
  //     try {
  //       const res = await userRequest.get('order/income');
  //       const list = res.data.sort((a, b) => {
  //         return a._id - b._id;
  //       });
  //       setIncome(list);
  //       setPerc((list[1].total * 100) / list[0].total - 100);
  //     } catch {}
  //   };
  //   getIncome();
  // }, []);

  // console.log(income);

  return (
    <div className="featuredInfo">
      {/* <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">This Month $ {income[1]?.total}</span>
          <span className="featuredMoneyRate">
            % {Math.floor(perc)}{' '}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Last month $ {income[0]?.total}</span>
      </div> */}
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,41</span>
          <span className="featuredMoneyRate">
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Costs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,41</span>
          <span className="featuredMoneyRate">
            21.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};
