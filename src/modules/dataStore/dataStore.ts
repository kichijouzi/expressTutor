import { StoreData, Data } from './modules/model/storeData'
import { StoreDataBuilder } from './modules/builder/StoreDataBuilder'
import storedData = require('./store.json')
import fs = require('fs')

export class DataStore {
  private dataList: Data[]
  constructor() {
    this.dataList = []
  }

  public loadData() {
    const data = storedData
    this.dataList = data
  }

  public addData(name: string, description: string){
    const builder = new StoreDataBuilder()
    builder.setName(name)
    builder.setDescription(description)
    const data = builder.buildDataStore().getData()
    if(data.name === '!!ERROR_OBJECT!!' && data.description === '!!ERROR_OBJECT!!'){
      return
    }
    this.dataList.push(data)
  }

  public disp(): Data[] {
    return this.dataList
  }
}
