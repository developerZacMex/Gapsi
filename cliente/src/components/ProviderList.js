import React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';

// Se reciben las propiedades providers y onDelete

const ProviderList = ({ providers, onDelete }) => {
  const rowRenderer = ({ key, index, style }) => {
    const provider = providers[index];
    return (
      <div key={key} style={style}>
        {provider.name} - {provider.businessName} - {provider.address}
        <button onClick={() => onDelete(provider.name)}>Eliminar</button>
      </div>
    );
  };

  return (
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
  );
};

export default ProviderList;