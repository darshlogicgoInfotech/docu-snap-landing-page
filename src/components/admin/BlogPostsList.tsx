
import { useState } from 'react';
import { Edit, Trash2, Eye, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const BlogPostsList = () => {
  // Mock data - replace with actual data from your backend
  const [posts] = useState([
    {
      id: 1,
      title: 'How to Scan Documents Like a Pro',
      description: 'Learn the best practices for scanning documents with Do Scan app.',
      coverImage: '/placeholder.svg',
      date: '2024-01-15',
      status: 'published'
    },
    {
      id: 2,
      title: 'Top 10 Document Organization Tips',
      description: 'Keep your digital documents organized with these simple tips.',
      coverImage: '/placeholder.svg',
      date: '2024-01-10',
      status: 'draft'
    },
    {
      id: 3,
      title: 'The Future of Document Scanning',
      description: 'Explore how AI is revolutionizing document scanning technology.',
      coverImage: '/placeholder.svg',
      date: '2024-01-05',
      status: 'published'
    },
  ]);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      console.log('Delete post:', id);
      // Add delete logic here
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Blog Posts</h2>
        <Link to="/admin/blog-posts/new">
          <Button className="bg-[#2147A8] hover:bg-[#1d3d96] text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add New Post
          </Button>
        </Link>
      </div>

      <Card className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cover</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="h-12 w-16 object-cover rounded-md"
                  />
                </TableCell>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell className="max-w-xs truncate">{post.description}</TableCell>
                <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge
                    variant={post.status === 'published' ? 'default' : 'secondary'}
                    className={post.status === 'published' ? 'bg-green-100 text-green-800' : ''}
                  >
                    {post.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Link to={`/admin/blog-posts/edit/${post.id}`}>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(post.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default BlogPostsList;
