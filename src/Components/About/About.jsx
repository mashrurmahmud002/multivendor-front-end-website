import React from 'react';
import AboutBanner from './AboutBanner';
import MarketoWhyWeExist from './AboutExists';
import MarketoAtAGlance from './AboutAtGlance';
import MarketoAudiences from './AboutMarketAudience';
import MarketoPrinciples from './MarketoPlace';
import MarketoStory from './MarketoStory';
import MarketoTrust from './MqarketoTrust';
import MarketoCTA from './MarketoCTA';


const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <MarketoWhyWeExist/>
            <MarketoAtAGlance/>
            <MarketoAudiences/>
            <MarketoPrinciples/>
            <MarketoStory/>
            <MarketoTrust/>
            <MarketoCTA/>
        </div>
    );
};

export default About;