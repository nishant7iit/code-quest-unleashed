
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CourseCard, CourseData } from "@/components/CourseCard";
import { ProblemCard, ProblemData } from "@/components/ProblemCard";
import { 
  BookOpen,
  Code,
  BarChart4,
  Calendar,
  ArrowRight,
  Clock,
  CheckCircle2,
  Trophy,
  Activity,
  Target,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock course data with progress
const inProgressCourses: CourseData[] = [
  {
    id: "1",
    title: "Arrays and Strings: Essential Techniques",
    description: "Master fundamental array manipulation techniques and string algorithms for technical interviews.",
    thumbnail: "https://via.placeholder.com/400x225/3B82F6/FFFFFF?text=Arrays+and+Strings",
    duration: 320,
    level: "beginner",
    lessons: 24,
    progress: 65,
    category: "Arrays"
  },
  {
    id: "2",
    title: "Linked Lists and Trees: Deep Dive",
    description: "Explore the fundamentals of linked lists and tree data structures with practical examples.",
    thumbnail: "https://via.placeholder.com/400x225/2563EB/FFFFFF?text=Linked+Lists+and+Trees",
    duration: 280,
    level: "intermediate",
    lessons: 18,
    progress: 30,
    category: "Data Structures"
  }
];

// Mock problem data with completion status
const recentProblems: ProblemData[] = [
  {
    id: "1",
    title: "Two Sum",
    description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "easy",
    tags: ["Array", "Hash Table"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    company: "Google",
    completed: true
  },
  {
    id: "2",
    title: "Reverse Linked List",
    description: "Reverse a singly linked list iteratively and recursively.",
    difficulty: "easy",
    tags: ["Linked List", "Recursion"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    company: "Microsoft",
    completed: true
  },
  {
    id: "3",
    title: "Longest Substring Without Repeating Characters",
    description: "Find the length of the longest substring without repeating characters.",
    difficulty: "medium",
    tags: ["String", "Sliding Window", "Hash Table"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(m,n))",
    company: "Amazon",
    completed: false
  }
];

// Mock upcoming events
const upcomingEvents = [
  {
    id: "1",
    title: "Mock Interview: Data Structures",
    date: "Apr 5, 2025",
    time: "10:00 AM",
    type: "interview"
  },
  {
    id: "2",
    title: "Weekly Coding Challenge",
    date: "Apr 6, 2025",
    time: "6:00 PM",
    type: "challenge"
  },
  {
    id: "3",
    title: "Live Q&A: Dynamic Programming",
    date: "Apr 10, 2025",
    time: "7:30 PM",
    type: "webinar"
  }
];

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "John Smith",
    joinDate: "January 2025",
    totalProblems: 42,
    solvedProblems: 28,
    streak: 7,
    subscription: {
      plan: "Annual",
      status: "Active",
      renewalDate: "Dec 31, 2025"
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Welcome section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">
            Member since {user.joinDate} • {user.streak} day streak 🔥
          </p>
        </div>
        
        {/* Dashboard overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Problems Solved</p>
                  <p className="text-3xl font-bold">{user.solvedProblems}/{user.totalProblems}</p>
                </div>
                <div className="bg-tuf-50 text-tuf-700 p-3 rounded-full">
                  <Code className="h-6 w-6" />
                </div>
              </div>
              <Progress className="mt-3" value={(user.solvedProblems / user.totalProblems) * 100} />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Course Progress</p>
                  <p className="text-3xl font-bold">2/5</p>
                </div>
                <div className="bg-tuf-50 text-tuf-700 p-3 rounded-full">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
              <Progress className="mt-3" value={40} />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Next Event</p>
                  <p className="text-lg font-medium mt-1">{upcomingEvents[0].title}</p>
                  <p className="text-sm text-gray-500 mt-1">{upcomingEvents[0].date}, {upcomingEvents[0].time}</p>
                </div>
                <div className="bg-tuf-50 text-tuf-700 p-3 rounded-full">
                  <Calendar className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Subscription</p>
                  <p className="text-lg font-medium mt-1">{user.subscription.plan} Plan</p>
                  <p className="text-sm text-gray-500 mt-1">Renews: {user.subscription.renewalDate}</p>
                </div>
                <div className="bg-green-50 text-green-700 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Main dashboard content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-8">
            {/* In-progress courses */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Continue Learning</h2>
                <Link to="/courses" className="text-tuf-700 hover:text-tuf-800 flex items-center text-sm">
                  View all courses
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inProgressCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
            
            {/* Recent problems */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Recent Problems</h2>
                <Link to="/practice" className="text-tuf-700 hover:text-tuf-800 flex items-center text-sm">
                  View all problems
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentProblems.map((problem) => (
                  <ProblemCard key={problem.id} problem={problem} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-8">
            {/* Activity summary */}
            <Card>
              <CardHeader>
                <CardTitle>Your Activity</CardTitle>
                <CardDescription>Last 30 days performance summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-tuf-50 text-tuf-700 p-2 rounded-full mr-3">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Study Time</p>
                        <p className="text-sm text-gray-500">Total hours spent</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold">42h</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-tuf-50 text-tuf-700 p-2 rounded-full mr-3">
                        <Code className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Problems Solved</p>
                        <p className="text-sm text-gray-500">This month</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold">18</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-tuf-50 text-tuf-700 p-2 rounded-full mr-3">
                        <Trophy className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Achievements</p>
                        <p className="text-sm text-gray-500">Unlocked</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold">5</p>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-tuf-50 text-tuf-700 p-2 rounded-full mr-3">
                        <Activity className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Current Streak</p>
                        <p className="text-sm text-gray-500">Consecutive days</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold">{user.streak}</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-6">
                  View Detailed Stats
                </Button>
              </CardContent>
            </Card>
            
            {/* Upcoming events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Your scheduled activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start">
                      <div className={`p-2 rounded-full mr-3 ${
                        event.type === 'interview' ? 'bg-blue-50 text-blue-700' :
                        event.type === 'challenge' ? 'bg-purple-50 text-purple-700' :
                        'bg-tuf-50 text-tuf-700'
                      }`}>
                        {event.type === 'interview' ? <Target className="h-4 w-4" /> :
                         event.type === 'challenge' ? <Code className="h-4 w-4" /> :
                         <Play className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-gray-500">{event.date}, {event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-6">
                  View Calendar
                </Button>
              </CardContent>
            </Card>
            
            {/* Recommended next steps */}
            <Card className="bg-tuf-50 border-tuf-100">
              <CardHeader>
                <CardTitle>Recommended For You</CardTitle>
                <CardDescription>Based on your progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium">Complete "Array Techniques" section</p>
                    <p className="text-sm text-gray-500 mt-1">65% complete - 2 lessons remaining</p>
                    <Button size="sm" className="mt-3 w-full">
                      Continue
                    </Button>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium">Try Medium difficulty problems</p>
                    <p className="text-sm text-gray-500 mt-1">You've mastered Easy problems!</p>
                    <Button size="sm" className="mt-3 w-full">
                      Start Now
                    </Button>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="font-medium">Join weekly coding challenge</p>
                    <p className="text-sm text-gray-500 mt-1">Starts this Sunday at 6:00 PM</p>
                    <Button size="sm" className="mt-3 w-full">
                      Register
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
