import PropTypes from "prop-types";

import "./style.scss";

const EventCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  small = false,
  ...props
}) => (
    <div
      data-testid="card-testid"
      className={`EventCard${small ? " EventCard--small" : ""}`}
      {...props}
    >
      <div className="EventCard__imageContainer">
        <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
        <div className="EventCard__label">{label}</div>
      </div>
      <div className="EventCard__descriptionContainer">
        <div className="EventCard__title">{title}</div>
        <div className="EventCard__month">{date}</div>
      </div>
    </div>
  );

EventCard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  small: PropTypes.bool,
  label: PropTypes.string,
};

EventCard.defaultProps = {
  imageSrc: "/images/image_par_defaut.png",
  imageAlt: "image de l'evenement",
  date: "Date",
  title: "Nom de l'évenement",
  label: "type d'évenement",
  small: false
};

export default EventCard;
