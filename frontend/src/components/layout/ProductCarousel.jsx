import { useEffect } from 'react';
import { toast } from 'sonner';
import { useGetTopProductsQuery } from '../../redux/api/productApi';

const ProductCarousel = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error]);

  if (isLoading) return null;

  return (
    <div
      className="carousel slide"
      id="carouselDemo"
      data-bs-wrap="true"
      data-bs-ride="carousel"
    >
      {data?.products?.map((product) => {
        <>
          <div className="carousel-inner">
            <div className="carousel-item ">
              <img
                src={
                  product?.images[0]
                    ? product?.images[0]?.url
                    : '/images/default_product.png'
                }
                alt={product?.name}
                className="w-100"
              />
              <div className="carousel-caption">
                <h5>{product?.name}</h5>
                <p>{product?.description}</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselDemo"
            data-bs-slide="#prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselDemo"
            data-bs-slide="#next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

          <div className="carousel-indicators">
            <button
              type="button"
              className="active"
              data-bs-target="#carouselDemo"
              data-bs-slide="0"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide="1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide="2"
            ></button>
          </div>
        </>;
      })}
    </div>
  );
};

export default ProductCarousel;
