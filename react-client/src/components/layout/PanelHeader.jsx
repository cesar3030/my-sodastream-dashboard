import React from 'react';

const PanelHeader = (props) => {
  return (
    <div className='panel-header panel-header-lg'>
      {props.children}
    </div>
  );
};

export default PanelHeader;