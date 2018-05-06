import React from 'react'
import { Animated, View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'

export default class FadeOutCard extends React.Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(1)
  }

  onPress = () => {
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 500,
    }).start()
  }

  render() {
    const animatedStyle = { opacity: this.animatedValue }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <Animated.View style={[ styles.card, animatedStyle ]}>
            <Text style={styles.text}>Click Here !</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 15,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
})
