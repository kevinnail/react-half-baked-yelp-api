import './Rest.css';
export const RestaurantListItem = ({ name, rating, image_url, url, location }) => {
  return (
    <div className="restaurant">
      <img src={image_url} alt={name} />
      <div>
        <p>{name}</p>
        <p>{location.address1}</p>
        <p> {location.city}</p>
        <p>{location.state}</p>
        <p> {location.zip_code}</p>
        <p>{Array(Math.floor(rating)).fill('⭐️')}</p>

        <a href={url} className="links">
          More Info
        </a>
      </div>
    </div>
  );
};
