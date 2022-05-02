import './sliderList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
// import getMovies from '../../context/movieContext/apiCalls';
import { deleteMovies, getMovies } from '../../context/movieContext/apiCalls';
import axios from 'axios';
import { getSliders } from '../../context/sliderContext/apiCalls';
import { SlidersContext } from '../../context/sliderContext/SlidersContext';

export const SliderList = () => {
  const [data, setData] = useState(productRows);
  const [user, setUser] = useState('');
  const { sliders, dispatch } = useContext(SlidersContext);

  useEffect(() => {
    getSliders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    // deleteMovies(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'inStock', headerName: 'Stock', width: 130 },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: '/slider/' + params.row._id, slider: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={sliders}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

// getRowId={(row) => row._id}
