import { useEffect, useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert,
} from 'reactstrap';
import { register } from '../actions/authSlice';
import { useDispatch } from 'react-redux';

const Register = ({ isAuthenticated }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null,
    });

    // If authenticated, close modal
    useEffect(() => {
        if (data.modal) {
            if (isAuthenticated) {
                setData({ ...data, modal: false });
            }
        }
    }, [data, isAuthenticated]);

    const toggle = () => setData({ ...data, modal: !data.modal });

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = data;
        const newUser = { name, email, password };
        // Attempt to register
        dispatch(register(newUser));
    };
    return (
        <div className='container'>
            <Button color='info' className='btn btn-sm'>
                <NavLink onClick={toggle} href='#'>
                    <span className='text-dark'>
                        <b>Register</b>
                    </span>
                </NavLink>
            </Button>
            <Modal isOpen={data.modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Register</ModalHeader>
                <ModalBody>
                    {data.msg ? <Alert color='danger'>{data.msg}</Alert> : null}
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for='name'>Name</Label>
                            <Input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Name'
                                className='mb-3'
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                            <Label for='email'>Email</Label>
                            <Input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Email'
                                className='mb-3'
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                            <Label for='password'>Password</Label>
                            <Input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='Password'
                                className='mb-3'
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                            <Button color='dark' style={{ marginTop: '2rem' }} block>
                                Register
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Register;
