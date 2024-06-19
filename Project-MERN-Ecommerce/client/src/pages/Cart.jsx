import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Alert,
    Container,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, increaseQty, decreaseQty } from '../actions/cartSlice';
import { checkout } from '../actions/orderSlice';
import React, { Fragment } from 'react';

const CartComponent = ({ auth }) => {
    const dispatch = useDispatch();
    const { cart, isLoading } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);

    console.log(cart);

    const total = cart?.reduce((prev, curr) => prev + curr.quantity * curr.productId.price, 0);
    return (
        <div>
            {auth ? (
                <Fragment>
                    {cart?.length ? null : (
                        <Alert color='info' className='text-center'>
                            Your cart is empty!
                        </Alert>
                    )}
                </Fragment>
            ) : (
                <Alert color='danger' className='text-center'>
                    Login to View!
                </Alert>
            )}

            {auth && !isLoading && cart?.length ? (
                <Container>
                    <div className='row'>
                        {cart.map((item) => (
                            <div className='col-md-4' key={item.productId._id}>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag='h5'>{item.productId.title}</CardTitle>
                                        <CardSubtitle tag='h6'>
                                            Rs. {item.productId.price}
                                        </CardSubtitle>
                                        <CardText>Quantity: {item.quantity}</CardText>
                                        <div className='mb-2'>
                                            <Button
                                                color='primary'
                                                onClick={() =>
                                                    dispatch(increaseQty({ id: item._id }))
                                                }>
                                                +
                                            </Button>
                                            <Button
                                                color='primary'
                                                onClick={() =>
                                                    dispatch(decreaseQty({ id: item._id }))
                                                }>
                                                -
                                            </Button>
                                        </div>
                                        <Button
                                            color='danger'
                                            onClick={() => dispatch(removeCart({ id: item._id }))}>
                                            Delete
                                        </Button>
                                    </CardBody>
                                </Card>
                                <br />
                            </div>
                        ))}
                        <div class='col-md-12'>
                            <Card>
                                <CardBody>
                                    <CardTitle tag='h5'>Total Cost = Rs. {total}</CardTitle>
                                    {/* <Checkout
                                            user={user._id}
                                            amount={total}
                                        /> */}
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </Container>
            ) : null}
        </div>
    );
};

export default CartComponent;
