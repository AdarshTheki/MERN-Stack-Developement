import Text from './components/Text';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Inputs';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { List } from './components/List';
import { Toast } from './components/Toast';
import { Counter } from './components/Counter';
import { RandomNumber } from './components/RandomNumber';
import { DomRef } from './components/DomRef';
import { MutableRef } from './components/MutableRef';
import { ThemeBox } from './components/ThemeContext';
import { UserContainer } from './components/UserContext';
import { CustomInput } from './components/CustomInput';

function App() {
    const personName = {
        first: 'Bruce',
        last: 'Wayne',
    };

    const nameList = [
        {
            id: 1,
            first: 'Bruce',
            last: 'Wayne',
        },
        {
            id: 2,
            first: 'Clark',
            last: 'Kent',
        },
        {
            id: 3,
            first: 'Princess',
            last: 'Diana',
        },
    ];

    return (
        <div className='container'>
            <Greet name='Adarsh' isLoggedIn={false} messageCount={5} />
            <Person name={personName} />
            <PersonList names={nameList} />

            {/* Option select */}
            <Status status='success' />

            {/* children text render */}
            <Heading>Placeholder Text</Heading>

            {/* children component render */}
            <Oscar>
                <Heading>Oscar On Placeholder Text</Heading>
            </Oscar>

            {/* Button handle */}
            <Button
                handleClick={(e, id) => {
                    console.log('handle button', e, id);
                }}
            />

            {/* Input handle */}
            <Input value='This is inputs' handleChange={(e) => console.log(e.target.value)} />

            {/* Style Properties */}
            <Container styles={{ border: '2px solid red', padding: '0 2rem' }} />

            {/* Polymorphic: Create Custom Element */}
            <Text size='md' as='a' href='/'>
                Paragraph
            </Text>
            <Text as='label' htmlFor='someId'>
                Label
            </Text>

            <CustomInput />

            {/* Generic: lists map with handle events*/}
            <List items={nameList} handleClick={(item) => console.log(item)} />

            {/* Template Literal */}
            <Toast position='right-center' />

            {/* State: Reducer function manage */}
            <Counter />

            {/* Restrictions: Random Number */}
            <RandomNumber value={10} isPositive />

            {/* Refs: DomRef focus inputs & MutableRef stop timer */}
            <DomRef />
            <MutableRef />

            {/* Context */}
            <ThemeBox />
            <UserContainer />
        </div>
    );
}

export default App;
