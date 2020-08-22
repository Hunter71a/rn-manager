import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './common';

class ListItem extends Component {
  render() {
    const {name, phone} =this.props.item;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>
          {name}       {phone}
        </Text>
      </CardSection>
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