import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
import Store from '~/store/store'
@Module({
  name: 'TestModule',
  store: Store,
  dynamic: true,
  namespaced: true,
})
class TestModule extends VuexModule {
  wheels = 2

  @Mutation
  incrWheels(extra: number) {
    this.wheels = extra + this.wheels
    console.log(this.wheels)
  }

  get axles() {
    return this.wheels / 2
  }
}

export default getModule(TestModule)
