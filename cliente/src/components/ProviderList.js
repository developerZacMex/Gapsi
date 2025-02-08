import React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import { Button, Container, ListItem, ListItemText } from '@material-ui/core';
import 'react-virtualized/styles.css';

const ProviderList = ({ providers = [], onDelete }) => {
  const rowRenderer = ({ key, index, style }) => {
    const provider = providers[index];
    return (
      <ListItem key={key} style={style} button>
        <ListItemText
          primary={`${provider.name} - ${provider.businessName}`}
          secondary={provider.address}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onDelete(provider.name)}
        >
          Eliminar
        </Button>
      </ListItem>
    );
  };

  return (
    <Container style={{ height: '100vh', border: '1px solid red' }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            rowCount={providers.length}
            rowHeight={50}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </Container>
  );
};

export default ProviderList;