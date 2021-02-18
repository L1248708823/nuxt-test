import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
import store from './store'
@Module({
  name: 'TestModule',
  store,
  dynamic: true,
  namespaced: true,
})
class MyModule extends VuexModule {
  wheels = 2

  @Mutation
  incrWheels(extra: number) {
    this.wheels += extra
  }

  get axles() {
    return this.wheels / 2
  }
}

export default getModule(MyModule)
