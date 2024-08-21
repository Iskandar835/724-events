import EventCard from "../EventCard";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";


function FooterCard () {
    const { data } = useData();
    const sortEvent = data?.events.sort((evtA, evtB) => new Date(evtA.date) - new Date(evtB.date));
    const lastEvent = sortEvent?.[sortEvent.length - 1];
  
      if (!data) {
        return <div>Désolé, nous rencontrons une erreur.</div>;
      }
      
    return(
        <EventCard
          imageSrc={lastEvent.cover}
          title={lastEvent.title}
          date={getMonth(new Date(lastEvent.date))}
          label= {lastEvent.type}
          small
        />
    )
}

export default FooterCard