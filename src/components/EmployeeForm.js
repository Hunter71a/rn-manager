import React, { Component } from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {CardSection, Input} from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Chump"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <View style={{ height: 75, paddingTop: 7 }}>
            <View style={{ height: 25 }}>
              <Text style={styles.pickerLabel}>Shift</Text>
            </View>
            <Picker
              style={{ flex: 1, height: 150 }}
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20,
    height: 20
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);