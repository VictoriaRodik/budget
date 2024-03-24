import React from 'react';
import { GlobalStyle } from './styles';
import { Wrapper } from './styles';
import Home from '../Home';
import About from '../About';
import Statistics from '../Statistics';
import Settings from '../Settings';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { open } from '../../utils/indexDB';
import Header from '../Header/Index';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        open().then(() => {
            this.setState({
                loading: false
            })
        }).catch(() => {
            console.error('Error')
        });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        };
        return (
            <BrowserRouter>
                <Wrapper>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/statistics" element={<Statistics />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Wrapper>
            </BrowserRouter>
        );
    };
};

export default App;
