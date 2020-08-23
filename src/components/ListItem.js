import {Actions} from 'react-native-router-flux';
import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({employee: this.props.employee});
  }



  render() {
    const { name, phone } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}       {phone}
              {JSON.stringify(this.props.employee)}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;