import _ from 'lodash';
import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  state = { showModal: false };
  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcomming shift is on ${shift}`);
  }

  onConfirmAccept() {
    const {uid} = this.props.employee;
    this.props.employeeDelete({uid});
  }

  onConfirmDecline() {
    console.log('Attempting Decline');
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button afterPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button afterPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button afterPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onConfirmAccept.bind(this)}
          onDecline={this.onConfirmDecline.bind(this)}
        >
          Are you sure you want to delete this employee? It will kill them!
        </Confirm>
      </Card>
    );
  }
}

const mapStateProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateProps, {
  employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);