// TODO: module化する
import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/gas'
import { Mutation, VuexModule, Action, Module, getModule } from 'vuex-module-decorators'

Vue.use(Vuex)

const store = new Vuex.Store({})

@Module({ dynamic: true, store: store, name: 'Item', namespaced: true })
class Item extends VuexModule {
  // count = 0

  // @Mutation
  // increment(delta: number) {
  //   this.count += delta
  // }
  // @Mutation
  // decrement(delta: number) {
  //   this.count -= delta
  // }

  @Action({ commit: '' })
  public getItem() {
    return api.getItem()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  @Action({ commit: '' })
  public updateItem(data: string) {
    return api.updateItem(data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const ItemModule = getModule(Item)
