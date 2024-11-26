import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSelectedProduct } from '../api/productApi';

const ProductDetail = () => {
    const { productId } = useParams()
    const [selectedProduct, setSelectedProduct] = useState('')

    useEffect(() => {
        const fetchSelectedProduct = async () => {
            const selectedProductData = await getSelectedProduct(productId)
            setSelectedProduct(selectedProductData)
        } 
        fetchSelectedProduct()
    }, [])

    console.log(selectedProduct)

    return (
        <div>
            하이하이
        </div>
    );
};

export default ProductDetail;