

const data = [
  {
    "_id": "64b1a1f2d8a1f2001c123456",
    "name": "Espresso",
    "description": "Strong and rich Italian espresso shot brewed from freshly ground Arabica beans.",
    "category": "Hot Coffee",
    "price": 120,
    "sizes": ["Single", "Double"],
    "roastLevel": "Dark Roast",
    "origin": "Colombia",
    "image": "https://i.ibb.co/2Z3XbHt/espresso.jpg",
    "available": true,
    "isSpecial": true,
    "createdAt": "2025-08-31T08:30:00.000Z",
    "updatedAt": "2025-08-31T08:30:00.000Z",
    "quantity": 50
  },
  {
    "_id": "64b1a1f2d8a1f2001c654321",
    "name": "Cappuccino",
    "description": "Classic cappuccino with a balance of espresso, steamed milk, and milk foam.",
    "category": "Hot Coffee",
    "price": 180,
    "sizes": ["Small", "Medium", "Large"],
    "roastLevel": "Medium Roast",
    "origin": "Ethiopia",
    "image": "https://i.ibb.co/tcpZ4Kn/cappuccino.jpg",
    "available": true,
    "isSpecial": false,
    "createdAt": "2025-08-31T08:35:00.000Z",
    "updatedAt": "2025-08-31T08:35:00.000Z", "quantity": 50
  },
  {
    "_id": "64b1a1f2d8a1f2001c987654",
    "name": "Iced Cold Brew",
    "description": "Smooth and refreshing cold brew served over ice, perfect for hot summer days.",
    "category": "Cold Coffee",
    "price": 200,
    "sizes": ["Regular", "Large"],
    "roastLevel": "Light Roast",
    "origin": "Brazil",
    "image": "https://i.ibb.co/5rK8Ld8/coldbrew.jpg",
    "available": true,
    "isSpecial": true,
    "createdAt": "2025-08-31T08:40:00.000Z",
    "updatedAt": "2025-08-31T08:40:00.000Z", "quantity": 50
  },
  {
    "_id": "64b1a1f2d8a1f2001c246810",
    "name": "Mocha",
    "description": "A delightful blend of espresso, chocolate syrup, and steamed milk topped with whipped cream.",
    "category": "Hot Coffee",
    "price": 220,
    "sizes": ["Medium", "Large"],
    "roastLevel": "Medium-Dark Roast",
    "origin": "Kenya",
    "image": "https://i.ibb.co/nDVcP6N/mocha.jpg",
    "available": false,
    "isSpecial": false,
    "createdAt": "2025-08-31T08:45:00.000Z",
    "updatedAt": "2025-08-31T08:45:00.000Z", "quantity": 50
  }
]


const ProductManagements = () => {
  return (
    <div>
      all  products
    </div>
  );
};

export default ProductManagements;