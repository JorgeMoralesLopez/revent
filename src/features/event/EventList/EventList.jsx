import React, { Component } from "react";
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    //console.log(this.props)
    const { events, deleteEvent} = this.props;
    return (
      <div>
        {events && events.map(event => {
          return <EventListItem 
                    key={event.id} 
                    event={event}  
                    deleteEvent={deleteEvent} 
                  />
        })}
        
      </div>
    );
  }
}

export default EventList;
