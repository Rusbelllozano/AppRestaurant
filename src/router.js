import MenusRestaurant from './Views/Restaurant/MenusRestaurant.js';
import selectadd from './Views/selectadd.js';
import Landing from './UIcomponents/Landing.js';
import {createSwitchNavigator} from 'react-navigation';

const MainStack = createSwitchNavigator({
    mainpage:Landing,
    menusrestaurante:MenusRestaurant,
    selectadd:selectadd
  });

export default MainStack;