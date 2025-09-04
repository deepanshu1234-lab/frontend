import React from 'react';
import { Segment, Form, Radio } from 'semantic-ui-react';

const PostTypeSelector = ({ postType, onPostTypeChange }) => {
  return (
    <Segment style={{ backgroundColor: '#f8f8f9', marginBottom: '1rem' }}>
      <Form>
        <Form.Field>
          <label style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>
            Select Post Type:
          </label>
        </Form.Field>
        <Form.Group inline>
          <Form.Field>
            <Radio
              label='Question'
              name='postType'
              value='question'
              checked={postType === 'question'}
              onChange={(e, { value }) => onPostTypeChange(value)}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Article'
              name='postType'
              value='article'
              checked={postType === 'article'}
              onChange={(e, { value }) => onPostTypeChange(value)}
            />
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
};

export default PostTypeSelector;