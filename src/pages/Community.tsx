
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, Heart, Share2, Users, TrendingUp, ChevronsUp, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

// Mock community posts data
const communityPosts = [
  {
    id: "1",
    title: "How to approach dynamic programming problems?",
    content: "I've been struggling with dynamic programming for weeks. Any tips on how to identify when to use DP and how to structure the solution?",
    author: {
      name: "Alex Johnson",
      avatar: "https://via.placeholder.com/40/4F46E5/FFFFFF?text=AJ",
      role: "Student"
    },
    timestamp: "3 hours ago",
    likes: 24,
    comments: 12,
    tags: ["Dynamic Programming", "Algorithms", "Study Tips"]
  },
  {
    id: "2",
    title: "Just landed a job at Google after using TUF+!",
    content: "After 6 months of dedicated study using TUF+, I'm excited to share that I've accepted an offer from Google! The graph algorithms section was particularly helpful for my interviews.",
    author: {
      name: "Priya Sharma",
      avatar: "https://via.placeholder.com/40/4F46E5/FFFFFF?text=PS",
      role: "Software Engineer"
    },
    timestamp: "1 day ago",
    likes: 156,
    comments: 43,
    tags: ["Success Story", "Interview Experience", "Google"]
  },
  {
    id: "3",
    title: "Efficient approach for the 'Merge K Sorted Lists' problem?",
    content: "I'm trying to optimize my solution for the 'Merge K Sorted Lists' problem. Currently using a priority queue, but wondering if there's a more efficient approach?",
    author: {
      name: "Michael Chen",
      avatar: "https://via.placeholder.com/40/4F46E5/FFFFFF?text=MC",
      role: "CS Student"
    },
    timestamp: "2 days ago",
    likes: 38,
    comments: 21,
    tags: ["Linked Lists", "Heap", "Problem Solving"]
  }
];

// Mock community events data
const communityEvents = [
  {
    id: "1",
    title: "Weekly Coding Challenge",
    description: "Participate in our weekly coding challenge and compete with fellow TUF+ members.",
    date: "Every Saturday",
    time: "10:00 AM - 12:00 PM (IST)",
    participants: 234
  },
  {
    id: "2",
    title: "AMA with Google Engineer",
    description: "Ask Me Anything session with a Senior Software Engineer from Google.",
    date: "April 10, 2025",
    time: "7:00 PM - 8:30 PM (IST)",
    participants: 412
  },
  {
    id: "3",
    title: "Mock Interview Workshop",
    description: "Learn effective interview techniques and practice with peers.",
    date: "April 15, 2025",
    time: "6:00 PM - 8:00 PM (IST)",
    participants: 178
  }
];

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">TUF+ Community</h1>
          <p className="text-gray-600">
            Connect with fellow learners, share your journey, and grow together.
          </p>
        </div>
        
        <Tabs defaultValue="discussions">
          <TabsList className="mb-6">
            <TabsTrigger value="discussions" className="flex items-center">
              <MessageSquare className="mr-2 h-4 w-4" />
              Discussions
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Events
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4" />
              Leaderboard
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="discussions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Recent Discussions</h2>
              <Button>
                <Lightbulb className="mr-2 h-4 w-4" />
                Start a Discussion
              </Button>
            </div>
            
            <div className="space-y-4">
              {communityPosts.map((post) => (
                <Card key={post.id} className="card-hover">
                  <CardHeader>
                    <div className="flex justify-between">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <img src={post.author.avatar} alt={post.author.name} />
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{post.title}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <span className="font-medium text-gray-800">{post.author.name}</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-gray-500">{post.timestamp}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{post.content}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-tuf-50 text-tuf-700 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-3 flex justify-between">
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="sm" className="flex items-center text-gray-600">
                        <ThumbsUp className="mr-1 h-4 w-4" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center text-gray-600">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        {post.comments}
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline">
                Load More
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <Button variant="outline">
                Calendar View
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityEvents.map((event) => (
                <Card key={event.id} className="card-hover">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      <div className="flex flex-col space-y-1 mt-1 text-gray-500">
                        <div>{event.date}</div>
                        <div>{event.time}</div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{event.description}</p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {event.participants} participants
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="leaderboard" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Community Leaderboard</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">This Month</span>
              </div>
            </div>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Top Contributors</CardTitle>
                <CardDescription>Members who have helped the most people this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { rank: 1, name: "Rahul Singh", points: 1245, avatar: "https://via.placeholder.com/40/4F46E5/FFFFFF?text=RS" },
                    { rank: 2, name: "Aisha Patel", points: 980, avatar: "https://via.placeholder.com/40/4F46E5/FFFFFF?text=AP" },
                    { rank: 3, name: "David Kim", points: 875, avatar: "https://via.placeholder.com/40/4F46E5/FFFFFF?text=DK" },
                    { rank: 4, name: "Emily Chen", points: 720, avatar: "https://via.placeholder.com/40/4F46E5/FFFFFF?text=EC" },
                    { rank: 5, name: "Omar Hassan", points: 690, avatar: "https://via.placeholder.com/40/4F46E5/FFFFFF?text=OH" },
                  ].map((user) => (
                    <div key={user.rank} className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 ${
                          user.rank === 1 ? 'bg-yellow-100 text-yellow-800' : 
                          user.rank === 2 ? 'bg-gray-100 text-gray-800' : 
                          user.rank === 3 ? 'bg-amber-100 text-amber-800' : 
                          'bg-gray-50 text-gray-600'
                        }`}>
                          {user.rank === 1 ? <ChevronsUp className="h-4 w-4" /> : user.rank}
                        </div>
                        <Avatar className="h-10 w-10 mr-3">
                          <img src={user.avatar} alt={user.name} />
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">
                            <div className="flex items-center">
                              <Heart className="h-3 w-3 text-red-500 mr-1" />
                              <span>{user.points} contribution points</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">View Profile</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-4">
                <Button variant="outline">View Full Leaderboard</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
