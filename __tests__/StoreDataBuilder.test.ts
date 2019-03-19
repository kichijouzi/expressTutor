import { StoreDataBuilder } from '../src/modules/dataStore/modules/builder/StoreDataBuilder'
import { Data } from '../src/modules/dataStore/modules/model/storeData'

const ERROR_MESSAGE = '!!ERROR_OBJECT!!'

const makeData = (name: string, description: string): Data => {
  const builder: StoreDataBuilder = new StoreDataBuilder()
  builder.setName(name)
  builder.setDescription(description)
  return builder.buildDataStore().getData()
}

describe('DataStore builder test', () => {

  describe('データ作成成功', () => {
    test('name: \'aaaa, desc: \'bbbb ', () => {
      const name = 'aaaa'
      const description = 'bbbb'
      const data: Data = makeData(name, description)

      expect(data.name).toBe(name)
      expect(data.description).toBe(description)
    })
  })

  describe('データ作成失敗', () => {
    test('name空白', () => {
      const name = ''
      const description = 'bbbb'
      const data: Data = makeData(name, description)

      expect(data.name).toBe(ERROR_MESSAGE)
      expect(data.description).toBe(ERROR_MESSAGE)
    })
    test('name半角スペース', () => {
      const name = ' '
      const description = 'bbbb'
      const data: Data = makeData(name, description)

      expect(data.name).toBe(ERROR_MESSAGE)
      expect(data.description).toBe(ERROR_MESSAGE)
    })
    test('name全角スペース', () => {
      const name = '　'
      const description = 'bbbb'
      const data: Data = makeData(name, description)

      expect(data.name).toBe(ERROR_MESSAGE)
      expect(data.description).toBe(ERROR_MESSAGE)
    })
    test('description空白', () => {
      const name = 'aaaa'
      const description = ''
      const data: Data = makeData(name, description)

      expect(data.name).toBe(ERROR_MESSAGE)
      expect(data.description).toBe(ERROR_MESSAGE)
    })
    test('description半角スペース', () => {
      const name = 'aaaa'
      const description = ' '
      const data: Data = makeData(name, description)

      expect(data.name).toBe(ERROR_MESSAGE)
      expect(data.description).toBe(ERROR_MESSAGE)
    })
    test('description全角スペース', () => {
      const name = 'aaaa'
      const description = '　'
      const data: Data = makeData(name, description)

      expect(data.name).toBe(ERROR_MESSAGE)
      expect(data.description).toBe(ERROR_MESSAGE)
    })
  })

})