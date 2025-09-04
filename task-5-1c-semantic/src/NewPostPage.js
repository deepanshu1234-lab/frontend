import React, { useState } from 'react';
import { Container, Header, Button, Divider } from 'semantic-ui-react';
import PostTypeSelector from './components/PostTypeSelector';
import ConditionalMessage from './components/ConditionalMessage';
import QuestionForm from './components/QuestionForm';
import ArticleForm from './components/ArticleForm';

const NewPostPage = () => {
  const [postType, setPostType] = useState('');
  const [questionData, setQuestionData] = useState({
    title: '',
    description: '',
    tags: ''
  });
  const [articleData, setArticleData] = useState({
    title: '',
    image: null,
    abstract: '',
    content: '',
    tags: ''
  });

  const handlePost = () => {
    if (postType === 'question') {
      console.log('Question Data:', questionData);
      alert('Question posted successfully! (Note: Data is not saved to database yet)');
    } else if (postType === 'article') {
      console.log('Article Data:', articleData);
      alert('Article posted successfully! (Note: Data is not saved to database yet)');
    }
  };

  const isFormValid = () => {
    if (postType === 'question') {
      return questionData.title.trim() && questionData.description.trim();
    } else if (postType === 'article') {
      return articleData.title.trim() && articleData.abstract.trim() && articleData.content.trim();
    }
    return false;
  };

  return (
    <Container style={{ padding: '2rem 0', minHeight: '100vh' }}>
      <Header as='h1' style={{ marginBottom: '2rem' }}>
        New Post
      </Header>
      
      <PostTypeSelector 
        postType={postType} 
        onPostTypeChange={setPostType} 
      />
      
      {postType && (
        <>
          <ConditionalMessage postType={postType} />
          
          <div>
            {postType === 'question' ? (
              <QuestionForm 
                questionData={questionData}
                onQuestionChange={setQuestionData}
              />
            ) : (
              <ArticleForm 
                articleData={articleData}
                onArticleChange={setArticleData}
              />
            )}
            
            <Divider />
            
            <div style={{ textAlign: 'right', marginTop: '2rem' }}>
              <Button
                onClick={handlePost}
                disabled={!isFormValid()}
                color={isFormValid() ? 'grey' : undefined}
                size='medium'
              >
                Post
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default NewPostPage;