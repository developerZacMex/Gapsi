import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProvider } from '../redux/actions/providerActions';
import { TextField, Button, Container } from '@material-ui/core';

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
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Razón Social"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Agregar Proveedor
        </Button>
      </form>
    </Container>
  );
};

export default ProviderForm;