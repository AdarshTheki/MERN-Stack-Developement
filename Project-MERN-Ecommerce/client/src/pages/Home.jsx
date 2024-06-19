import { useDispatch, useSelector } from 'react-redux';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container } from 'reactstrap';
import { addToCart } from '../actions/cartSlice';

const Home = ({ auth }) => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.product);

    return (
        <div>
            <Container>
                <div className='row'>
                    {items?.map((item) => (
                        <div className='col-md-4' key={item._id}>
                            <Card className='mb-4'>
                                <CardBody>
                                    <CardTitle tag='h5'>{item.title}</CardTitle>
                                    <CardSubtitle tag='h6'>Rs. {item.price}</CardSubtitle>
                                    <CardText>{item.category}</CardText>
                                    {auth ? (
                                        <Button
                                            color='success'
                                            size='sm'
                                            onClick={() => dispatch(addToCart(item))}>
                                            Add To Cart
                                        </Button>
                                    ) : null}
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Home;
