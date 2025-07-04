
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Upload, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface BlogPost {
  id?: number;
  title: string;
  description: string;
  slug: string;
  content: string;
  coverImage: string;
  status: 'draft' | 'published';
}

const BlogPostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [post, setPost] = useState<BlogPost>({
    title: '',
    description: '',
    slug: '',
    content: '',
    coverImage: '',
    status: 'draft'
  });

  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    if (isEditing) {
      // Mock data - replace with actual API call
      setPost({
        id: 1,
        title: 'How to Scan Documents Like a Pro',
        description: 'Learn the best practices for scanning documents with Do Scan app.',
        slug: 'how-to-scan-documents-like-a-pro',
        content: '<p>Content goes here...</p>',
        coverImage: '/placeholder.svg',
        status: 'published'
      });
      setIsPublished(true);
    }
  }, [isEditing]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (title: string) => {
    setPost(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Mock upload - replace with actual upload logic
      const mockUrl = URL.createObjectURL(file);
      setPost(prev => ({ ...prev, coverImage: mockUrl }));
    }
  };

  const handleSave = (status: 'draft' | 'published') => {
    const postData = {
      ...post,
      status
    };
    
    console.log('Saving post:', postData);
    // Add save logic here
    
    navigate('/admin/blog-posts');
  };

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/admin/blog-posts')}
            className="text-gray-600 hover:text-[#2147A8]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Button>
          <h2 className="text-3xl font-bold text-gray-900">
            {isEditing ? 'Edit Post' : 'Add New Post'}
          </h2>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button
            variant="outline"
            onClick={() => handleSave('draft')}
          >
            Save as Draft
          </Button>
          <Button
            onClick={() => handleSave('published')}
            className="bg-[#2147A8] hover:bg-[#1d3d96] text-white"
          >
            {isPublished ? 'Update' : 'Publish'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={post.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter post title..."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={post.description}
                  onChange={(e) => setPost(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Short description of the post..."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={post.slug}
                  onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="post-url-slug"
                  className="mt-2"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <Label className="text-base font-medium">Content</Label>
            <div className="mt-4 bg-white rounded-md border">
              <ReactQuill
                theme="snow"
                value={post.content}
                onChange={(content) => setPost(prev => ({ ...prev, content }))}
                modules={quillModules}
                style={{ minHeight: '300px' }}
              />
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Publish Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="status">Published</Label>
                <Switch
                  id="status"
                  checked={isPublished}
                  onCheckedChange={setIsPublished}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Cover Image</h3>
            <div className="space-y-4">
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt="Cover"
                  className="w-full h-32 object-cover rounded-md"
                />
              )}
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG or GIF</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPostForm;
