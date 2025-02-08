import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import ProviderForm from './components/ProviderForm';
import ProviderList from './components/ProviderList';

const App = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <ProviderForm />
      <ProviderList />
    </div>
  );
};

export default App;