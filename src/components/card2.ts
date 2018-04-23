import { Vue, Component, Prop } from 'vue-property-decorator'

const debug = require('debug')('log:Comp/Card2')

// 必须使用装饰器的方式来指定component
@Component({
  // props: {
  //   text: String
  // }
})
class Card2 extends Vue {
  @Prop({ default: '1' }) //注意用法！
  text: string;

  ver: number = 2;

  onShow() {
    debug('onShow')
  }

  onHide() {
    debug('onHide')
  }

  mounted() { // vue hook
    debug('mounted')
  }
}

export default Card2