import React from 'react'
import { Animated, View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'

export default class Day2 extends React.Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(1)
  }

  handlePressIn = () => {
    Animated.spring(this.animatedValue, {
      toValue: .5,
    }).start()
  }

  handlePressOut = () => {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
    }).start()
  }

  render() {

    const animatedStyle = {
      transform: [ { scale: this.animatedValue } ],
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <Animated.View style={[ styles.button, animatedStyle ]}>
            <Text style={styles.text}>Press Here !</Text>
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
  button: {
    backgroundColor: "#333",
    borderRadius: 5,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
})
