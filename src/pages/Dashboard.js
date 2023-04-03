import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <>
      <div>Hello {user?.name} </div>
      <div>Email: {user?.email}</div>
    </>
  );
};

export default Dashboard;
