import React from 'react'
import { Animated, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default class Day5 extends React.Component {
  componentWillMount() {
    this.animatedValue1 = new Animated.Value(60)
    this.animatedValue2 = new Animated.Value(60)
    this.animatedValue3 = new Animated.Value(60)
    this.animatedValue4 = new Animated.Value(60)
  }

  getRandom = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  handlePressIn = () => {
  }

  handlePress = () => {
    Animated.parallel([
      Animated.spring(this.animatedValue1, {
        toValue: this.getRandom(40, 120),
        friction: 1,
        tension: 300,
      }),
      Animated.spring(this.animatedValue2, {
        toValue: this.getRandom(40, 120),
        friction: 1,
        tension: 300,
      }),
      Animated.spring(this.animatedValue3, {
        toValue: this.getRandom(40, 120),
        friction: 1,
        tension: 300,
      }),
      Animated.spring(this.animatedValue4, {
        toValue: this.getRandom(40, 120),
        friction: 1,
        tension: 300,
      }),
    ]).start()
  }

  render() {

    const animatedStyle = {
      borderTopLeftRadius: this.animatedValue1,
      borderTopRightRadius: this.animatedValue2,
      borderBottomLeftRadius: this.animatedValue3,
      borderBottomRightRadius: this.animatedValue4,
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress} onPressIn={this.handlePressIn}>
          <Animated.View style={[ animatedStyle, styles.box ]}/>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#ff8f93',
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
