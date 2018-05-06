import React from 'react'
import { FlatList, Text, View } from 'react-native'

export default class FadeOutCard extends React.Component {

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
      { key: 'fadeOutCard' },
      { key: 'springButton' },
    ]

    return <FlatList
      data={screens}
      renderItem={this.renderItem}/>

  }
}
