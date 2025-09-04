import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const ConditionalMessage = ({ postType }) => {
  return (
    <Segment style={{ backgroundColor: '#f8f8f9', marginBottom: '1rem' }}>
      <Header as='h4' style={{ marginBottom: '0.5rem' }}>
        What do you want to ask or share
      </Header>
      <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>
        This section is designed based on the type of the post. It could be developed by 
        conditional rendering. For post a{' '}
        <span style={{ color: '#2185d0' }}>question</span>, the{' '}
        <span style={{ color: '#2185d0' }}>following section would be appeared</span>.
      </div>
    </Segment>
  );
};

export default ConditionalMessage;