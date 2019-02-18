const api = {
  get: () => {
    return Promise.resolve([
      {id : 1, name: 'Xiaomi', price: 20, img: "xiaomi.jpg"},
      {id : 2, name: 'Nexus', price: 40, img: "nexus.png"},
      {id : 3, name: 'Nokia', price: 60, img: "nokia.jpg"},
      {id : 4, name: 'Samsung S10', price: 80, img: "samsungs10.png"},
      {id : 5, name: 'Iphone 6', price: 100, img: "iphone6.png"},
      {id : 6, name: 'macBookPro', price: 800, img: "macbook.jpg"},
      {id : 7, name: 'Imac', price: 1500, img: "imac.jpg"},
      {id : 8, name: 'Iphone X', price: 1300, img: "iphonex.png"},
      {id : 9, name: 'Samsung s9', price: 960, img: "samsungs9.jpg"},
      {id : 10, name: 'Ipad Pro', price: 700, img: "ipadpro.jpg"}
    ])
  }
}

export default api;