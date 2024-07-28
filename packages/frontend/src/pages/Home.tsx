import React from 'react';
import CoreValues from '../components/codeus/CoreValues';
import MemberList from '../components/codeus/MemberList';

const Home: React.FC = () => {
    return (
        <div>
            <CoreValues />
            <MemberList />
        </div>
    );
};

export default Home;
