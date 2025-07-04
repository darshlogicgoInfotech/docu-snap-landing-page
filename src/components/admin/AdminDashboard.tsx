
import { FileText, Eye, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Posts',
      value: '12',
      change: '+2 from last month',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Total Views',
      value: '1,234',
      change: '+15% from last month',
      icon: Eye,
      color: 'text-green-600'
    },
    {
      title: 'Subscribers',
      value: '456',
      change: '+8 new this month',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Engagement',
      value: '78%',
      change: '+5% from last month',
      icon: TrendingUp,
      color: 'text-orange-600'
    },
  ];

  const recentPosts = [
    { title: 'How to Scan Documents Like a Pro', views: 234, date: '2024-01-15' },
    { title: 'Top 10 Document Organization Tips', views: 156, date: '2024-01-10' },
    { title: 'The Future of Document Scanning', views: 189, date: '2024-01-05' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your blog.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-2">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{post.title}</h4>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{post.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
