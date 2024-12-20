import {React, StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import  HelloWorld  from './HelloWorld.jsx';
import Container from './Container.jsx';

createRoot(document.getElementById('root')).render(
        <StrictMode>
            <Container>
                <HelloWorld/>
            </Container>
        </StrictMode>
    )