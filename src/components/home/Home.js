import React from 'react';
import './Home.css'; // Import CSS file for animations

function Home() {
  return (
    <div className="home-container">
      <div className="content-container">
        <h1>Welcome to our Event Management Platform!</h1>
        <p>
          Discover and manage your events with ease. Whether it's personal gatherings, professional conferences, or community meetups, we've got you covered.
        </p>
        <p>
          Plan, organize, and stay on top of your schedule. With our intuitive interface and powerful features, managing events has never been simpler.
        </p>
        <p>
          Sign up now to start exploring and managing your events!
        </p>
      </div>
      <div className="image-container">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="image-wrapper">
            <img src='https://on-productions.co.uk/wp-content/uploads/On_Event_Production_provide_full_creative_production_for_Blue_Square_Event3.jpg' alt="Image1" className="animated-image" />
            <img src='https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg' alt="Image2" className="animated-image" />
            <img src='https://wallpapercave.com/wp/wp2349409.jpg' alt="Image3" className="animated-image" />
            <img src='https://images.yourstory.com/cs/1/eb1786d0-a7a9-11e9-b510-6f7c0abb0d14/audience-band-celebration-22634361567750376859.jpg?fm=png&auto=format' alt="Image4" className="animated-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
