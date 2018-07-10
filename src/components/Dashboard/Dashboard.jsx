import React from 'react';

import Header from 'components/Header/Header';
import SearchBox from 'components/SearchBox/SearchBox';

// TODO: Move all the place components in their own area
const Dashboard = () => (
  <div className="dashboard">
    <Header />
    <SearchBox placeholder="Search..." />
  </div>
);

export default Dashboard;
