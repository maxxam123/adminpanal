import { FeaturedInfo } from '../../components/featuredInfo/FeaturedInfo';
import './home.css';

export const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="homeWidget"></div>
    </div>
  );
};
