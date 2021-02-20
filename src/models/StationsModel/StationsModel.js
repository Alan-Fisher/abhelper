/* eslint-disable  max-len */
import { message } from 'antd'
import {
  observable, configure, makeObservable,
} from 'mobx'

// import { pageExample } from './pageExample'

configure({ enforceActions: 'observed' })

export class StationsModel {
  constructor() {
    Object.freeze(this.initialState)
    this.init()
    makeObservable(this, {
      stations: observable,
      favoriteStations: observable,
    })
  }

  initialState = {
    stations: undefined,
    favoriteStations: [
      { code: 1007, address: 'Сатпаева - Ленина' },
      { code: 1009, address: 'Абая - Ленина' },
      { code: 1006, address: 'Жолдасбекова - Ленина' },
      { code: 1002, address: 'Хаджимукана - Ленина' },
      { code: 1008, address: 'Сатпаева - Фурманова' },
      { code: 1010, address: 'М. Абая' },
      { code: 1001, address: 'Терренкур - Омарова' },
      { code: 2004, address: 'Весновка - Аль-Фараби' },
      { code: 2005, address: 'Esentai Mall' },
      { code: 2037, address: 'Атакент' },
      { code: 2036, address: 'Ботсад' },
      { code: 2035, address: 'КазГУ' },
    ],
  }

  getStations() {
    setTimeout(() => this.getABPageHtml() // TODO: remove timeout!
      .then((html) => this.parseStationsFromHtml(html)), 300)
  }

  async getABPageHtml() {
    const baseUrl = process.env.REACT_APP_BASE_URL

    // return pageExample
    return fetch(`${baseUrl}/ab`)
      .then((response) => response.text()
        .then((html) => html)
        .catch((e) => message.error(e)))
      .catch((e) => message.error(e))
  }

  parseStationsFromHtml(minimizedHtml) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(minimizedHtml, 'text/html')
    const table = doc.querySelector('tbody')
    const rows = [...table.querySelectorAll('tr')]

    const stations = rows.map(row => {
      const getInnerTextBySelector = (node, selector) => node.querySelector(selector).innerText
      const getCode = () => parseInt(getInnerTextBySelector(row, 'th[class="code"]'), 10)
      const isFavorite = !!(this.favoriteStations
        .filter(({ code }) => code === getCode()).length)

      const getAddress = () => {
        let addressFromPage = getInnerTextBySelector(row, 'td[class="address"]')

        this.favoriteStations.forEach(({ code, address }) => {
          if (code === getCode()) { addressFromPage = address }
        })

        return addressFromPage
      }

      return {
        code: getCode(),
        name: getInnerTextBySelector(row, 'td[class="name"]'),
        address: getAddress(),
        availableBikes: parseInt(getInnerTextBySelector(row, 'td[class="avl-bikes"]'), 10),
        freeSlots: parseInt(getInnerTextBySelector(row, 'td[class="free-slots"]'), 10),
        totalSlots: row.getAttribute('data-total-slots'), // TODO: lies sometimes (?)
        isInactive: row.getAttribute('data-inactive') === '1',
        latitude: row.getAttribute('data-latitude'),
        longitude: row.getAttribute('data-longitude'),
        isFavorite,
      }
    })

    const sortingOrder = this.favoriteStations.map(({ code }) => code).reverse()
    const sortedStations = stations
      .sort((a, b) => sortingOrder.indexOf(b.code) - sortingOrder.indexOf(a.code))

    this.set('stations', sortedStations)
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
