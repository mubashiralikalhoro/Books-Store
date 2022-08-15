import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

// reducers
import user from './reducer/user';
import cart from './reducer/cart';
import favorite from './reducer/favorite';
import notification from './reducer/notification';
import resources from './reducer/resources';
import myOrders from './reducer/myOrders';

// config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'cart', 'fav', 'notification', 'resources', 'myOrders'],
};

//  root reducer
const rootReducer = combineReducers({
  user: user,
  cart: cart,
  fav: favorite,
  notification: notification,
  resources: resources,
  myOrders: myOrders,
});

const persiReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persiReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
