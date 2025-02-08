import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProviders, deleteProvider } from '../redux/actions/providerActions';

const ProviderList = () => {
  const dispatch = useDispatch();
  const providers = useSelector(state => state.providers.providers);

  useEffect(() => {
    dispatch(getProviders(1, 10)); // Página 1, 10 proveedores por página
  }, [dispatch]);

  return (
    <div>
      <ul>
        {providers.map(provider => (
          <li key={provider.name}>
            {provider.name} - {provider.businessName} - {provider.address}
            <button onClick={() => dispatch(deleteProvider(provider.name))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProviderList;