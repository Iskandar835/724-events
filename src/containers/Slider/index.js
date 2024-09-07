import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
 
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  const nextCard = () => {
    setTimeout(
      () => setIndex(index < 2 ? index + 1 : 0),
      5000
    );
  };
  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((slider, idx) => (
          <div
            key={slider.id}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={slider.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{slider.title}</h3>
                <p>{slider.description}</p>
                <div>{getMonth(new Date(slider.date))}</div>  
              </div>
            </div>
          </div>
          ))}
           <div className="SlideCard__paginationContainer"> 
              {byDateDesc?.map((check, indexSpan) => (
                <span
                  key={check.title}
                  className={`SlideCard__pagination${index === indexSpan ? "--active" : ""}`}
                />
              ))}
            </div> 
    </div>
  );
};

export default Slider;