import React from 'react'
import { Animated, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default class Day4 extends React.Component {
  componentWillMount() {
    this.animatedCircleOpacityValue = new Animated.Value(0)
    this.animatedCircleScaleValue = new Animated.Value(1)
    this.animatedPlusBarYValue = new Animated.Value(0)
    this.animatedPlusBarWidthValue = new Animated.Value(4)
    this.animatedPlusBarBackgroundColor = new Animated.Value(0)
  }

  handlePressIn = () => {
    Animated.parallel([
      Animated.spring(this.animatedCircleOpacityValue, {
        toValue: .3,
      }),
      Animated.spring(this.animatedCircleScaleValue, {
        toValue: 3,
      }),
    ]).start()
  }

  handlePressOut = () => {
    Animated.parallel([
      Animated.spring(this.animatedCircleOpacityValue, {
        toValue: 0,
      }),
      Animated.spring(this.animatedCircleScaleValue, {
        toValue: 1,
      }),
      Animated.sequence([
        Animated.timing(this.animatedPlusBarYValue, {
          toValue: -50,
          duration: 200,
        }),
        Animated.parallel([
          Animated.spring(this.animatedPlusBarWidthValue, {
            toValue: 200,
          }),
          Animated.timing(this.animatedPlusBarBackgroundColor, {
            toValue: 150,
          }),
        ]),
      ]),
    ]).start()
  }

  render() {

    const interpolateColor = this.animatedPlusBarBackgroundColor.interpolate({
      inputRange: [ 0, 150 ],
      outputRange: [ 'rgba(157, 173, 183,1)', 'rgba(255,255,255,1)' ],
    })

    const animatedPlusBarStyle = {
      transform: [ { translateY: this.animatedPlusBarYValue } ],
      width: this.animatedPlusBarWidthValue,
      backgroundColor: interpolateColor,
    }

    const animatedCircleStyle = {
      opacity: this.animatedCircleOpacityValue,
      transform: [
        { scale: this.animatedCircleScaleValue },
      ],
    }

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <Animated.View style={[ styles.plusBar1 ]}>
            <Animated.View style={[ styles.plusBar2, animatedPlusBarStyle ]}>
              <Animated.View style={[ styles.circle, animatedCircleStyle ]}/>
            </Animated.View>
          </Animated.View>
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
  plusBar1: {
    backgroundColor: 'rgba(157, 173, 183, 1.00)',
    width: 40,
    height: 4,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusBar2: {
    backgroundColor: 'rgba(157, 173, 183, 1.00)',
    width: 4,
    height: 40,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#99aeb8',
  },
  circle: {
    width: 10,
    height: 10,
    opacity: 0,
    borderRadius: 10,
    backgroundColor: '#919191',
  },
})
