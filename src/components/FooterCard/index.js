import EventCard from "../EventCard";
import { useData } from "../../contexts/DataContext";


function FooterCard () {
    const { data } = useData()
    const lastEvent = data?.events[data.events.length - 1]

      if (!data) {
        return <div>Désolé, nous rencontrons une erreur.</div>;
      }

    return(
        <EventCard
          imageSrc={lastEvent.cover}
          title={lastEvent.title}
          periode={lastEvent.periode.substring(9)}
          label= {lastEvent.type}
          small
        />
    )
}

export default FooterCard