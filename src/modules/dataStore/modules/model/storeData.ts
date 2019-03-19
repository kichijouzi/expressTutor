export type Data = {
  name: string
  description: string
}

export class StoreData {

  constructor(private name: string, private description: string){}

  public getData() : Data {
    return { name: this.name, description: this.description }
  }

  public setName(name: string) : void {
    this.name = name
  }

  public setDescription(description: string) : void {
    this.description = description
  }

}