import EventCard from "../EventCard";
import { useData } from "../../contexts/DataContext";


function FooterCard () {
    const { data, error } = useData()
    const lastEvent = data?.events[data.events.length - 1]

    if (error) {
        return <div>Error: {error.message}</div>;
      }
    
      if (!data) {
        return <div>Loading...</div>;
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