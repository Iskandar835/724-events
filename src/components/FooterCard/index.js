import EventCard from "../EventCard";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";


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
          date={getMonth(new Date(lastEvent.date))}
          label= {lastEvent.type}
          small
        />
    )
}

export default FooterCard