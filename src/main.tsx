import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.scss';
import ArticlePreview from './components/ArticlePreview';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ArticlePreview/>
  </React.StrictMode>,
)
