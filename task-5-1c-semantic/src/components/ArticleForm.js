import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import InputField from './InputField';

const ArticleForm = ({ articleData, onArticleChange }) => {
  const handleFieldChange = (field, value) => {
    onArticleChange({ ...articleData, [field]: value });
  };

  const handleImageChange = (e) => {
    onArticleChange({ ...articleData, image: e.target.files[0] });
  };

  return (
    <Form>
      <InputField
        label="Title"
        value={articleData.title}
        onChange={(value) => handleFieldChange('title', value)}
        placeholder="Enter a descriptive title"
      />
      
      <Form.Field style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          <label 
            style={{ 
              fontWeight: '500', 
              color: '#333', 
              minWidth: '120px',
              paddingTop: '0.5rem',
              textAlign: 'left'
            }}
          >
            Add an image
          </label>
          <div style={{ flex: 1 }}>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              fluid
            />
          </div>
        </div>
      </Form.Field>
      
      <InputField
        label="Abstract"
        value={articleData.abstract}
        onChange={(value) => handleFieldChange('abstract', value)}
        placeholder="Enter a 1-paragraph abstract"
        rows={4}
      />
      
      <InputField
        label="Article Text"
        value={articleData.content}
        onChange={(value) => handleFieldChange('content', value)}
        placeholder="Enter your article content..."
        rows={8}
      />
      
      <InputField
        label="Tags"
        value={articleData.tags}
        onChange={(value) => handleFieldChange('tags', value)}
        placeholder="Please add up to 3 tags to describe what your article is about"
      />
    </Form>
  );
};

export default ArticleForm;