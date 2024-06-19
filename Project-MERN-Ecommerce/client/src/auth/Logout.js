import { Fragment } from 'react';
import { logout } from '../actions/authSlice';
import { NavLink, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';

export default function Logout() {
    const dispatch = useDispatch();
    return (
        <div>
            <Fragment>
                <Button color='danger' className='btn btn-sm'>
                    <NavLink onClick={() => dispatch(logout)} href='#'>
                        <span className='text-light'>
                            <b>Logout</b>
                        </span>
                    </NavLink>
                </Button>
            </Fragment>
        </div>
    );
}
