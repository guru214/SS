import React from 'react';
import { Carousel } from 'react-bootstrap';  // Import Carousel from React Bootstrap

const CarouselComponent = () => {
  return (
    <Carousel>
      {/* First Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
         src="https://halfrate.in/cdn/shop/collections/electronicsbanner.jpg?v=1620841732"
          alt="First slide"
          style={{ height: '500px', width: '100%', objectFit: 'cover' }}  // Adjust height & width here
        />
        <Carousel.Caption>
          <h3>Electronics</h3>
          <p>Latest electronics at unbeatable prices!</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c1.wallpaperflare.com/preview/573/909/315/store-clothes-clothing-line.jpg" 
          alt="Second slide"
          style={{ height: '500px', width: '100%', objectFit: 'cover' }}  // Adjust height & width here
        />
        <Carousel.Caption>
          <h3>Fashion</h3>
          <p>Trendy fashion styles just for you!</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzW7i0NaSqkxd_WCd_IiKtbBSyALrmCBTcg&s"
          alt="Third slide"
          style={{ height: '500px', width: '100%', objectFit: 'cover' }}  // Adjust height & width here
        />
        <Carousel.Caption>
          <h3>Furniture</h3>
          <p>Comfortable and luxurious furniture available!</p>
        </Carousel.Caption>
      </Carousel.Item>

       {/* forth Slide */}
       <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1196974664/photo/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background.jpg?b=1&s=612x612&w=0&k=20&c=BjkZyLeGqKsHJCZe50HRi-i_2rVLH37FGxW-HngoyfM="  
          alt="Third slide"
          style={{ height: '500px', width: '100%', objectFit: 'cover' }}  // Adjust height & width here
        />
        <Carousel.Caption>
          <h3>Home Appliances</h3>
          <p>Comfortable and luxurious furniture available!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
