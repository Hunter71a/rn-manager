import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, StyleSheet, FlatList, View, Text } from 'react-native';
import ListItem from './ListItem';

import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  createDataSource(employees) {
    let employeeArr = [];
    if (employees) {
      employeeArr = Object.keys(employees).map(function (k, y) {
        let empObj = employees[k]
        empObj.uid = k;
        return empObj;
      })
    }
    return (
      <FlatList
        data={employeeArr}
        renderItem={({item}) => <ListItem employee={item}/>}
        //renderItem={({ item }) => <CardSection><Text style={styles.item}>{item.name}</Text></CardSection>}
      />
    )
  }

  render() {
    if (this.props.employees) {
      return (
        <View>
          {this.createDataSource(this.props.employees)}
        </View>
      )
    }
  }
}

const mapStateToProps = state => {
  const employees = state.employees
  return { employees };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    paddingLeft: 20,
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});


// const mapStateToProps = state => {
//   const employees = _.map(state.employees, (val, uid) => {
//     return { ...val, uid };
//   });
//   return { employees };
// };

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   marginTop: StatusBar.currentHeight || 0,
//   //},
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);