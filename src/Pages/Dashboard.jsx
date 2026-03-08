import { useState } from 'react';
import ReasercherDashboard from './ReasercherDashboard';
//import CompanyDashboard from '../Components/Dashboard/CompanyDashboard';

const Dashboard = () => {

  const [ role , setRole ] = useState('researcher' );
  
  if  ( role === 'researcher' ) {
    return <ReasercherDashboard/>
  } 
  
  else {
    return <CompanyDashboard/>
  }
};

export default Dashboard;
