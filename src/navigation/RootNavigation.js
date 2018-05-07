import { createStackNavigator } from 'react-navigation'
import * as screens from '../screens'

export default createStackNavigator(
  Object.values(screens).reduce((a, c) => ({
    ...a,
    [ c.displayName ]: c,
  }), {}),
  {
    initialRouteName: 'Day5',
  },
)