const ProductCarousel = () => {
  return (
    <div
      className="carousel slide"
      id="carouselDemo"
      data-bs-wrap="true"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item ">
          <img src="" alt="" className="w-100" />
          <div className="carousel-caption">
            <h5>Title Slide 0</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur rerum totam dolores porro eveniet provident eaque
              architecto? Ea aperiam sit, amet aliquam error excepturi velit
              aspernatur magnam officia inventore minima.
            </p>
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
    </div>
  );
};

export default ProductCarousel;
