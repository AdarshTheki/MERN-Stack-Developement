import { Route, Routes } from 'react-router-dom';

// import AddItem from './pages/AddItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getItems } from './actions/itemSlice';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { getCart } from './actions/cartSlice';
// import Orders from './pages/Order';

const Main = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getCart(user?._id));
        }
    }, [dispatch, isAuthenticated, user?._id]);

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home auth={isAuthenticated} />} />
                {/* <Route path='/'>
                    <Home />
                </Route>
                <Route path='/addItem'>
                    <AddItem />
                </Route>
                <Route path='/orders'>
                <Orders />
                </Route> */}
                <Route path='/cart' element={<Cart auth={isAuthenticated} />} />
            </Routes>
        </div>
    );
};

export default Main;
