import { defineStore } from 'pinia';

// defineStore 第一个参数是id，必需且值唯一
export const useUserStore = defineStore('user', {
  //state返回一个函数，防止作用域污染
  state: () => {
    return {
      userInfo: {
        name: 'zhangsan',
        age: 23,
      },
      token: 'S1',
    };
  },
  getters: {
    newName: (state) => state.userInfo.name + 'vip',
  },
  actions: {
    //更新整个对象
    updateUserInfo(userInfo: { name: string; age: number }) {
      this.userInfo = userInfo;
    },
    //更新对象中某个属性
    updateAge(age: number) {
      this.userInfo.age = age;
    },
    //更新基础数据类型
    updateToken(token: string) {
      this.token = token;
    },
  },
  // 开始数据持久化 persist: true or object
  // 默认会将store中的所有字段都缓存，可以通过paths点符号路径数组指定要缓存的字段
  // persist: {
  //   paths: ['userInfo.name'], //存储userInfo的name
  // },
  // 默认存储到localStorage的key值就是store模块id值。可以修改key值和存储位置
  persist: {
    key: 'storeUser', // 修改存储的键名，默认为当前 Store 的 id
    storage: window.sessionStorage, // 存储位置修改为 sessionStorage
  },
});
