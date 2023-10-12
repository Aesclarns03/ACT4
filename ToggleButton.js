import * as React from 'react';
import { ToggleButton } from 'react-native-paper';

const ToggleButtonExample = () => {
  const [status, setStatus] = React.useState('checked');

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };

  return (
    <ToggleButton
      icon="bluetooth"
      value="bluetooth"
      status={status}
      onPress={onButtonToggle}
    />
  );
};

export default ToggleButtonExample;
