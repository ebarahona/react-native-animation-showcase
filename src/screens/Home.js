import React from 'react'
import { FlatList, Text, View } from 'react-native'

export default class Home extends React.Component {

  renderItem = ({ item }) => {
    return (
      <View style={{
        flex: 1,
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
      }}>
        <Text style={{ textAlign: 'center' }} onPress={() => this.props.navigation.navigate(item.key)}>{item.key}</Text>
      </View>
    )
  }

  render() {

    const screens = [
      { key: 'Day1' },
      { key: 'Day2' },
      { key: 'Day3' },
      { key: 'Day4' },
      { key: 'Day5' },
    ]

    return <FlatList
      data={screens}
      renderItem={this.renderItem}/>

  }
}
