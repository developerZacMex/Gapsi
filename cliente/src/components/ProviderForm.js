import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProvider } from '../redux/actions/providerActions';

const ProviderForm = () => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProvider({ name, businessName, address }));
    setName('');
    setBusinessName('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" required />
      <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Razón Social" required />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Dirección" required />
      <button type="submit">Agregar Proveedor</button>
    </form>
  );
};

export default ProviderForm;