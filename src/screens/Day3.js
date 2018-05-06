import React from 'react'
import { Animated, View, StyleSheet } from 'react-native'

export default class Day3 extends React.Component {

  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(1)
  }

  componentDidMount() {
    Animated.loop(Animated.parallel([
      Animated.spring(this.animatedValue1, {
        toValue: 500,
        friction: 5,
      }),
      Animated.spring(this.animatedValue2, {
        toValue: 2,
        friction: 3,
      }),
    ])).start()
  }

  render() {
    const animatedStyle = {
      transform: [
        { translateY: this.animatedValue1 },
        { scale: this.animatedValue2 },
      ],
    }

    return (
      <View style={styles.container}>
        <Animated.View style={[ styles.box, animatedStyle ]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#333',
    width: 30,
    height: 30,
  },
})
