import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProviders, deleteProvider } from '../redux/actions/providerActions';
import ProviderList from '../components/ProviderList';

const ProviderContainer = () => {
  const dispatch = useDispatch();
  const providers = useSelector(state => state.providers.providers);

  useEffect(() => {
    dispatch(getProviders(1, 100));
  }, [dispatch]);

  const handleDelete = (name) => {
    dispatch(deleteProvider(name));
  };

  return <ProviderList providers={providers} onDelete={handleDelete} />;
};

export default ProviderContainer;