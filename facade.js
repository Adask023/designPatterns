// axios facade with decorator example

console.log('Hello world')

class StoreCommunication {
  constructor(id, shopName) {
    this.client = axios.create({
      baseURL: 'https://fakestoreapi.com',
      responseType: 'json',
    })
    this.id = id
    this.shopName = shopName
  }

  getRequest(path) {
    return this.client.get(path)
  }

  getAllProducts() {
    return this.getRequest('/products')
  }

  getSpecificProduct(id) {
    return this.getRequest(`/products/${id}`)
  }

  showInfo(){
    console.log(`Id: ${this.id}`)
    console.log(`Shop name: ${this.shopName}`)
  }
}

class DecoratedStoreCommunication{
  constructor(store){
    this.store = store
    this.id = store.id
    this.shopName = store.shopName
  }

  showInfo(){
    console.log(`Id: ${this.id}, Name: ${this.shopName}`)
  }
}

const store = new StoreCommunication(123, "Fishkeeping shop")
store.showInfo()

const decoratedStore = new DecoratedStoreCommunication(store)
decoratedStore.showInfo()
