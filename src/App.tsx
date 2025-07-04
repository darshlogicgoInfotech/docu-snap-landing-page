
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage';
import BlogPostsPage from '@/pages/admin/BlogPostsPage';
import BlogPostFormPage from '@/pages/admin/BlogPostFormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/blog-posts" element={<BlogPostsPage />} />
        <Route path="/admin/blog-posts/new" element={<BlogPostFormPage />} />
        <Route path="/admin/blog-posts/edit/:id" element={<BlogPostFormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
