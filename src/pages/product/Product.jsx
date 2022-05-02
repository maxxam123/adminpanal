import { Link } from 'react-router-dom';
// import { Chart } from '../../components/chart/Chart';
import './product.css';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

export const Product = () => {
  const location = useLocation();
  const movie = location.movie;

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await userRequest.get('order/income?pid=' + productId);
  //       res.data.map((item) =>
  //         setPStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[item._id - 1], Sales: item.total },
  //         ])
  //       );
  //     } catch (err) {}
  //   };
  //   getStats();
  // }, [productId, MONTHS]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">
              Title {': '}
              {movie.title}
            </span>
          </div>
          <div className="productInfoTop">
            <span className="productName">
              Id {': '}
              {movie._id}
            </span>
          </div>
          <div className="productInfoTop">
            <span className="productName">
              Color {': '}
              {movie.color[0]}
              {', '}
              {movie.color[1]}
              {', '}
            </span>
          </div>
          <div className="productInfoTop">
            <span className="productName">
              Size {': '}
              {movie.size[0]}
              {', '}
              {movie.size[1]}
              {', '}
            </span>
          </div>
          <div className="productInfoTop">
            <span className="productName">
              Categories {': '}
              {movie.categories[0]}
              {', '}
              {movie.categories[1]}
              {', '}
            </span>
          </div>
          <div className="producttInfoBottom"></div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="title" />
            <label>Product Description</label>
            <input type="text" placeholder="desc" />
            <label>Product Price</label>
            <input type="text" placeholder="price" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img className="productUploadImg" src={movie.img} alt="" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
