import './styles/index.less'
import Button from './components/button'
import CheckBox from './components/checkbox'
import Icon from './components/icon'

const components = {
  Button,
  CheckBox,
  Icon
}

const install = function (Vue) {
  if (install.installed) {
    return
  }
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

// auto install by cdn
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
