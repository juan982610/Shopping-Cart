import { BASE_URL_PRODUCTS } from '../constanst'

async function fetchProducts(){
    try {
        const response = await fetch(BASE_URL_PRODUCTS)

        const data = await response.json(); 
        return (
            data.map(products => ({
                    id:products.id,
                    title:products.title,
                    description:products.description,
                    price:products.price,
                    type: typeof products.price,
                    discountPercentage:2.92,
                    rating:products.rating.rate,
                    stock:products.rating.cout,
                    brand:"Golden",
                    category:products.category,
                    thumbnail:products.image,
                    images:[
                        products.image
                    ]
            }))
        )
    } catch (error) {
        console.error('Error when making fetch request:', error);
        throw error; 
    }
    
}

export default fetchProducts