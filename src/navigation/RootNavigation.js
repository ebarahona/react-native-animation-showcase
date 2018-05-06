import { createStackNavigator } from 'react-navigation'
import * as screens from '../screens'

export default createStackNavigator({
  home: {
    screen: screens.Home,
  },
  fadeOutCard: {
    screen: screens.FadeOutCard,
  },
  springButton: {
    screen: screens.SpringButton,
  },
}, {
  initialRouteName: 'home',
})