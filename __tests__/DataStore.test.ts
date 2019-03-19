import { DataStore } from '../src/modules/dataStore/dataStore'
import { Data } from '../src/modules/dataStore/modules/model/storeData'

describe('test', ()=> {
  test('addData test', () => {
    const dataStore = new DataStore()
    const name = 'testname'
    const description = 'testdesc'
    dataStore.addData(name, description)
    expect(dataStore.disp()[0].name).toBe(name)
    expect(dataStore.disp()[0].description).toBe(description)
  })
})