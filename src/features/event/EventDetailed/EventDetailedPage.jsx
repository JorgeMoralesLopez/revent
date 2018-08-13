import React from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react';
import EventDeatiledHeader from './EventDetailedHeader';
import EventDeatiledInfo from './EventDetailedInfo';
import EventDeatiledChat from './EventDetailedChat';
import EventDeatiledSidebar from './EventDetailedSidebar';

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0 ) {
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return {
    event
  }
}



const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDeatiledHeader event={event} />
        <EventDeatiledInfo event={event} />
        <EventDeatiledChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDeatiledSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  )
}

export default connect(mapStateToProps)(EventDetailedPage);
