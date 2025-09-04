import React from 'react';
import { Form } from 'semantic-ui-react';
import InputField from './InputField';

const QuestionForm = ({ questionData, onQuestionChange }) => {
  const handleFieldChange = (field, value) => {
    onQuestionChange({ ...questionData, [field]: value });
  };

  return (
    <Form>
      <InputField
        label="Title"
        value={questionData.title}
        onChange={(value) => handleFieldChange('title', value)}
        placeholder="Start your question with how, what, why, etc."
      />
      
      <InputField
        label="Describe your problem"
        value={questionData.description}
        onChange={(value) => handleFieldChange('description', value)}
        placeholder=""
        rows={8}
      />
      
      <InputField
        label="Tags"
        value={questionData.tags}
        onChange={(value) => handleFieldChange('tags', value)}
        placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
      />
    </Form>
  );
};

export default QuestionForm;