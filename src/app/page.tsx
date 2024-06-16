import React from 'react';
import { ActiveLabel, Status } from './components/active-label';

const Home = () => {
  return (
    <main>
      <h1 className="font-mono text-yellow-800 text-xl">Hello Next.js</h1>
      <ActiveLabel status={Status.active}>Active</ActiveLabel>
      <ActiveLabel status={Status.notActive}>Not active</ActiveLabel>
      <ActiveLabel status={Status.pending}>Pending</ActiveLabel>
      <ActiveLabel status={Status.suspended}>Suspended</ActiveLabel>
    </main>
  );
};

export default Home;
