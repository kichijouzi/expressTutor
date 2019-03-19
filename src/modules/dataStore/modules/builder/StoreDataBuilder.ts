import { StoreData } from '../model/StoreData'

export class StoreDataBuilder {
  private storeName: string
  private storeDescription: string
  private ERROR_MESSAGE: string = '!!ERROR_OBJECT!!'

  constructor() {
    this.storeName = ''
    this.storeDescription = ''
  }

  setName(name: string) : void {
    this.storeName = name
  }

  setDescription(description: string): void {
    this.storeDescription = description
  }

  buildDataStore(): StoreData {
    const incorrectStatus =
      this.storeName.trim() === '' ||
      this.storeDescription.trim() === ''

    if(incorrectStatus) {
      this.setErrorModel()
    }

    return new StoreData(this.storeName, this.storeDescription)
  }

  private setErrorModel(): void {
    this.storeName = this.ERROR_MESSAGE
    this.storeDescription = this.ERROR_MESSAGE
  }
}
