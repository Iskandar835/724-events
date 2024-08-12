import PropTypes from "prop-types";

import "./style.scss";

const EventCard = ({
  imageSrc,
  imageAlt,
  periode,
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
        <div className="EventCard__month">{periode}</div>
      </div>
    </div>
  );

EventCard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  periode: PropTypes.string,
  title: PropTypes.string,
  small: PropTypes.bool,
  label: PropTypes.string,
};

EventCard.defaultProps = {
  imageSrc: "/images/image_par_defaut.png",
  imageAlt: "image de l'evenement",
  periode: "date",
  title: "Nom de l'évenement",
  label: "type d'évenement",
  small: false
}

export default EventCard;
