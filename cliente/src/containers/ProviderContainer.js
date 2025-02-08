import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProviders, deleteProvider } from '../redux/actions/providerActions';
import ProviderList from '../components/ProviderList';

//patrón de diseño contenedor/componente
//patrón de diseño modulo (se organiza el código en módulos con directorios como components, conrainers, redux, etc).
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