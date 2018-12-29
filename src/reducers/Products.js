const initialState = [
    {
        id: 1,
        name: 'Iphone 8 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-red-600x600.jpg',
        price: 700,
        description: 'Sản phẩm do Apple sản xuất',
        inventory: 12,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung Galaxy Note 8',
        image: 'https://cdn.tgdd.vn/Products/Images/42/106211/samsung-galaxy-note8-black-400x460.png',
        price: 650,
        description: 'Sản phẩm do Samsung sản xuất',
        inventory: 15,
        rating: 5
    },
    {
        id: 3,
        name: 'Huawei 20 Mate Pro',
        image: 'https://cdn.tgdd.vn/Products/Images/42/188963/huawei-mate-20-pro-green-400x460.png',
        price: 600,
        description: 'Sản phẩm do Huawei sản xuất',
        inventory: 18,
        rating: 4
    }
]

const products = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return [...state];
    }
}

export default products;