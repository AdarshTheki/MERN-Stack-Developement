import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import store from './actions/store';
import Main from './Main';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className='App'>
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
