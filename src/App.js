import React from 'react';
import Countdown from './components/Countdown';

const App = () => {
    return (
        <div className="app">
            <Countdown targetDate="2019-12-25" />
        </div>
    );
};

export default App;
