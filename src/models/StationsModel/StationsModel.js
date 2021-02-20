import { message } from 'antd'
import {
  observable, configure, makeObservable,
} from 'mobx'

configure({ enforceActions: 'observed' })

export class StationsModel {
  constructor() {
    Object.freeze(this.initialState)
    this.init()
    makeObservable(this, {
      isJsonEditorVisible: observable,
    })
  }

  initialState = {
    isJsonEditorVisible: true,
  }

  getStations() {
    this.getABPageHtml()
      .then((data) => console.log(data))
  }

  getABPageHtml() {
    return fetch('https://almatybike.kz/velostation')
      .then((response) => response.text()
        .then((data) => data)
        .catch((e) => message.error(e)))
      .catch((e) => message.error(e))
  }

  hasProperty = key => Object.prototype.hasOwnProperty.call(this, key)

  set(item, value) {
    if (this.hasProperty(item)) {
      this[item] = value
    }
  }

  init() {
    for (const kvp of Object.entries(this.initialState)) {
      const [key, value] = kvp

      this[key] = value
    }
  }
}

export default new StationsModel()
