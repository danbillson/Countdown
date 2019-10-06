import './countdown.scss';
import React, { useState, useEffect } from 'react';
import calculateCountdown from '../../util/scripts/calculateCountdown';
import addLeadingZero from '../../util/scripts/addLeadingZero';

const Countdown = ({ targetDate }) => {
    const [date, setDate] = useState({});

    useEffect(() => {
        let timer = setInterval(
            () => setDate(calculateCountdown(targetDate)),
            1000
        );

        return () => clearInterval(timer);
    });

    const renderCountdown = () => {
        const { days, hours, min, sec } = date;
        const dateArray = [
            { key: 'days', value: days },
            { key: 'hours', value: hours },
            { key: 'minutes', value: min },
            { key: 'seconds', value: sec }
        ];

        return days
            ? dateArray.map(({ key, value }) => {
                  return (
                      <div className="countdown__block" key={key}>
                          <h1 className="countdown__number">
                              {addLeadingZero(value)}
                          </h1>
                          <h4 className="countdown__label">{key}</h4>
                      </div>
                  );
              })
            : '';
    };

    return <div className="countdown">{renderCountdown()}</div>;
};

export default Countdown;
