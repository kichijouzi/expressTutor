declare module '*/store.json' {
  interface Data {
    name: string
    description: string
  }

  const value: Data[]
  export = value
}