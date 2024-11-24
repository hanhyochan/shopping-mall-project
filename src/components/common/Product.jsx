const Product = ({data}) => {
    return (
        <div className="w-1/4 p-4">
            <button>♡</button>
            <div className="w-full h-60 aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                    src={data.images[0]}
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
            <p>{data.title}</p>
            <p>{data.price}</p>
            <p>리뷰:{data.reviews.length}</p>
        </div>
    );
};

export default Product;
