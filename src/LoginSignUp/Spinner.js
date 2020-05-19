import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Block, Checkbox, Text, Button, Input } from 'galio-framework';

const Spinner = ({ size }) => {
  return (
    < Block center middle>
      <ActivityIndicator size={size || 'large'} />
    </ Block>
  );
};


export default Spinner ;