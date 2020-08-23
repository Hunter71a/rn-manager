import React from 'react';
import { View } from 'react-native';
import ActivityIndicator from 'react-native-loading-spinner-overlay';

const Spinner = ({ spinnerSize, message }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator
        visible={true}
        size={spinnerSize || 'large'}
        textContent={message}
        textStyle={{ color: 'gray' }}
      />
    </View>
  );
}

styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,

  }
};

export { Spinner };