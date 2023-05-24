export function getProduct(products) {
    fetch('http://localhost:3001/products')
        .then(data => data.json())
        .then(data => {
            data.map((categories) => {
                return (
                    categories.subCategories.map((category) => {
                        return (
                            category.products?.map((product) => {
                                return (
                                    products.push(product)
                                )
                            })
                        )
                    })
                )
            })
        });
}