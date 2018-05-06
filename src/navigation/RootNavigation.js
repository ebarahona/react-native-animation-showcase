import { createStackNavigator } from 'react-navigation'
import * as screens from '../screens'

export default createStackNavigator({
  home: {
    screen: screens.Home,
  },
  day1: {
    screen: screens.Day1,
  },
  day2: {
    screen: screens.Day2,
  },
  day3: {
    screen: screens.Day3,
  },
  day4: {
    screen: screens.Day4,
  },
}, {
  initialRouteName: 'day4',
})