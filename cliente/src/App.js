import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import ProviderForm from './components/ProviderForm';
import ProviderContainer from './containers/ProviderContainer';

const App = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <ProviderForm />
      <ProviderContainer />
    </div>
  );
};

export default App;