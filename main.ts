import {
  useState
} from './index'

const log = (msg: string) => console.log(`------------------ ${ msg } -------------------`)
log('test useState start')
const [ state, setState ] = useState(1)
console.log(state.value)
setState(2)
console.log(state.value)
log('test useState end')
