import { AsyncStorage } from "react-native";

export const storeData = ({key, value}: any) =>
  getData(key).then((data) => {
    if (data) {
      AsyncStorage.setItem(key, JSON.stringify([value].concat(data)));
    } else {
      AsyncStorage.setItem(key, JSON.stringify([value]));
    }
  });

export const getData = (key: any) =>
  AsyncStorage.getItem(key).then((data) => {
    if (data) {
      return Object.values(JSON.parse(data));
    } else {
      return [];
    }
  });

export const removeData = (key: any) => AsyncStorage.removeItem(key);