import React, { useState, useEffect } from 'react'
import styles from "../styles/layout/SearchResult.module.scss"
import ProductCounter from "./assets/svg/homepage/productCounter.svg"
import DeleteBasket from "./assets/svg/homepage/deleteBasket.svg"
import DeleteProduct from "./assets/svg/homepage/deleteProduct.svg"
import Image from 'next/image'
import Link from 'next/link'
import { products as Products } from '../data/products'
import { actionAddBasket, actionDeleteBasket, actionRemoveBasket } from '../store/basket'
import { useDispatch, useSelector } from 'react-redux'

function SearchResult({ inputValue, setShowFavoriteSearch, setInputValue }) {
    const { basketList } = useSelector((state) => state.basket);
    const data = Products.products;
    const [filteredProducts, setFilteredProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const allProducts = data.flatMap((categories) =>
            categories.subCategories.flatMap((category) => category.products || [])
        );

        if (inputValue) {
            const lowercasedInput = inputValue.toLowerCase();
            const results = allProducts.filter((product) =>
                product.name.toLowerCase().includes(lowercasedInput)
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    }, [inputValue, data]);

    const removeCart = (product) => {
        dispatch(actionRemoveBasket(product));
    };

    const deleteCart = (product) => {
        dispatch(actionDeleteBasket(product));
    };

    const handleCloseSearch = () => {
        setInputValue('');
        setShowFavoriteSearch(false);
        document.body.classList.remove('showFavoriteSearch');
    };

    return (
        <div className={styles.resultMain}>
            {filteredProducts.map((product) => (
                <div className={styles.resultItem} key={product.id}>
                    <div className={styles.searchedProduct}>
                        <Link
                            href={`/product/${product.id}`}
                            className={styles.productButton}
                            onClick={handleCloseSearch}
                        >
                            <div className={styles.searchedMain}>
                                <figure className={styles.searchedFigure}>
                                    <Image
                                        src={`/products/${product.images}`}
                                        width={32}
                                        height={32}
                                        alt={product.name}
                                    />
                                </figure>
                                <div className={styles.searchedInfo}>
                                    <h1 className={styles.productTitle}>
                                        <span className={styles.name}>{product.name}</span>
                                    </h1>
                                    <span className={styles.productInfo}>
                                        {product.shortDescription}
                                    </span>
                                    <span className={styles.productPrice}>{product.priceText}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.counterMain}>
                        <div className={styles.counterContainer}>
                            <button
                                className={styles.counterButton}
                                onClick={() => dispatch(actionAddBasket(product))}
                            >
                                <div className={styles.counterIcon}>
                                    <ProductCounter />
                                </div>
                            </button>
                            {basketList.map(
                                (basket, index) =>
                                    basket.id === product.id &&
                                    basket.basketItemCount > 0 && (
                                        <React.Fragment key={index}>
                                            {basket.basketItemCount <= 1 ? (
                                                <div className={styles.removeProduct}>
                                                    <button
                                                        type="button"
                                                        className={styles.removeButton}
                                                        onClick={() => removeCart(product)}
                                                    >
                                                        <div className={styles.removeButtonMain}>
                                                            <DeleteBasket />
                                                        </div>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className={styles.deleteProduct}>
                                                    <button
                                                        type="button"
                                                        className={styles.deleteButton}
                                                        onClick={() => deleteCart(product)}
                                                    >
                                                        <div className={styles.deleteButtonMain}>
                                                            <DeleteProduct />
                                                        </div>
                                                    </button>
                                                </div>
                                            )}
                                            <div className={styles.productCount}>
                                                {basket.basketItemCount}
                                            </div>
                                        </React.Fragment>
                                    )
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SearchResult;
