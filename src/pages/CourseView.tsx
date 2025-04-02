
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PlayCircle, 
  ChevronLeft, 
  CheckCircle, 
  Clock, 
  BarChart4,
  FileText,
  MessageSquare,
  Download,
  Share2
} from "lucide-react";

// Mock course data
const course = {
  id: "1",
  title: "Arrays and Strings: Essential Techniques",
  description: "Master fundamental array manipulation techniques and string algorithms for technical interviews. This comprehensive course covers all the essential topics you need to excel in coding interviews and improve your problem-solving skills.",
  thumbnail: "https://via.placeholder.com/1200x675/3B82F6/FFFFFF?text=Arrays+and+Strings",
  duration: 320,
  level: "beginner",
  lessons: 24,
  category: "Arrays",
  progress: 35,
  modules: [
    {
      id: "m1",
      title: "Introduction to Arrays",
      lessons: [
        {
          id: "l1",
          title: "Understanding Arrays",
          duration: 12,
          isCompleted: true,
          videoUrl: "#",
        },
        {
          id: "l2",
          title: "Array Operations and Complexity",
          duration: 15,
          isCompleted: true,
          videoUrl: "#",
        },
        {
          id: "l3",
          title: "Multi-dimensional Arrays",
          duration: 18,
          isCompleted: false,
          videoUrl: "#",
        },
      ]
    },
    {
      id: "m2",
      title: "Array Techniques",
      lessons: [
        {
          id: "l4",
          title: "Two Pointer Technique",
          duration: 20,
          isCompleted: true,
          videoUrl: "#",
        },
        {
          id: "l5",
          title: "Sliding Window",
          duration: 22,
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "l6",
          title: "Prefix Sum",
          duration: 16,
          isCompleted: false,
          videoUrl: "#",
        },
      ]
    },
    {
      id: "m3",
      title: "String Manipulation",
      lessons: [
        {
          id: "l7",
          title: "String Basics",
          duration: 14,
          isCompleted: true,
          videoUrl: "#",
        },
        {
          id: "l8",
          title: "String Searching Algorithms",
          duration: 25,
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "l9",
          title: "Regular Expressions",
          duration: 28,
          isCompleted: false,
          videoUrl: "#",
        },
      ]
    },
  ],
  instructor: {
    name: "Dr. Anuj Sharma",
    bio: "Senior Software Engineer at Google with 10+ years of experience in algorithms and data structures.",
    image: "https://via.placeholder.com/150/4F46E5/FFFFFF?text=AS"
  },
  requirements: [
    "Basic understanding of programming concepts",
    "Familiarity with at least one programming language (Python, Java, C++, etc.)",
    "Understanding of time and space complexity (helpful but not required)"
  ],
  whatYouWillLearn: [
    "Master array manipulation techniques for solving complex problems",
    "Implement efficient string algorithms and pattern matching",
    "Apply two-pointer and sliding window techniques",
    "Optimize solutions for time and space complexity",
    "Tackle common interview questions with confidence"
  ]
};

const CourseView = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeModuleId, setActiveModuleId] = useState(course.modules[0].id);
  const [activeLessonId, setActiveLessonId] = useState(course.modules[0].lessons[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Calculate total completed lessons
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = course.modules.reduce((acc, module) => {
    return acc + module.lessons.filter(lesson => lesson.isCompleted).length;
  }, 0);
  
  // Format duration
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours > 0 ? `${hours}h ` : ''}${mins > 0 ? `${mins}m` : ''}`;
  };
  
  const formatLessonDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours > 0 ? `${hours}:` : ''}${mins.toString().padStart(2, '0')}`;
  };
  
  const currentModule = course.modules.find(module => module.id === activeModuleId);
  const currentLesson = currentModule?.lessons.find(lesson => lesson.id === activeLessonId);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to="/courses" className="inline-flex items-center text-tuf-700 hover:text-tuf-800 mb-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Courses
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{formatDuration(course.duration)}</span>
            </div>
            <div className="flex items-center">
              <PlayCircle className="h-4 w-4 mr-1" />
              <span>{course.lessons} lessons</span>
            </div>
            <div className="capitalize flex items-center">
              <BarChart4 className="h-4 w-4 mr-1" />
              <span>{course.level}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium">Course Progress</div>
              <div className="text-sm text-gray-500">
                {completedLessons} of {totalLessons} lessons completed
              </div>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course content */}
          <div className="lg:col-span-2">
            {/* Video player */}
            <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video relative mb-8">
              {!isPlaying ? (
                <>
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      onClick={() => setIsPlaying(true)} 
                      size="lg"
                      className="rounded-full w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30"
                    >
                      <PlayCircle className="h-10 w-10 text-white" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white bg-black">
                  <div className="text-center">
                    <PlayCircle className="h-12 w-12 mx-auto mb-2 animate-pulse" />
                    <p>Video is playing...</p>
                    <p className="text-sm text-gray-400 mt-2">
                      {currentLesson?.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="w-full grid grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">About This Course</h2>
                  <p className="text-gray-700 mb-6">{course.description}</p>
                  
                  <h3 className="text-lg font-semibold mb-3">What You'll Learn</h3>
                  <ul className="space-y-2 mb-6">
                    {course.whatYouWillLearn.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1 mb-6">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="text-gray-700">{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <img 
                      src={course.instructor.image} 
                      alt={course.instructor.name} 
                      className="h-16 w-16 rounded-full mr-4 object-cover" 
                    />
                    <div>
                      <h3 className="text-lg font-semibold">Your Instructor</h3>
                      <p className="text-tuf-700 font-medium">{course.instructor.name}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{course.instructor.bio}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="resources">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Course Resources</h2>
                  
                  <div className="space-y-4">
                    {/* Resource items */}
                    {[
                      { 
                        title: "Course Slides", 
                        description: "Complete slide deck for the Arrays and Strings course", 
                        type: "PDF", 
                        size: "3.2 MB" 
                      },
                      { 
                        title: "Code Examples", 
                        description: "Source code for all examples demonstrated in the course", 
                        type: "ZIP", 
                        size: "1.5 MB" 
                      },
                      { 
                        title: "Practice Problems Set", 
                        description: "Additional practice problems with solutions", 
                        type: "PDF", 
                        size: "2.8 MB" 
                      }
                    ].map((resource, index) => (
                      <div key={index} className="flex items-start p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 bg-tuf-50 p-2 rounded text-tuf-700 mr-4">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium text-gray-900">{resource.title}</h3>
                          <p className="text-sm text-gray-500 mb-2">{resource.description}</p>
                          <div className="flex items-center text-xs text-gray-400">
                            <span className="mr-3">{resource.type}</span>
                            <span>{resource.size}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="flex-shrink-0 ml-2">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="discussions">
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Course Discussions</h2>
                    <Button>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      New Thread
                    </Button>
                  </div>
                  
                  {/* Discussion threads */}
                  <div className="space-y-4">
                    {[
                      {
                        title: "Clarification on Sliding Window technique",
                        author: "Michael S.",
                        time: "2 days ago",
                        replies: 4,
                        viewed: 28
                      },
                      {
                        title: "Time complexity of the Two Sum solution",
                        author: "Priya K.",
                        time: "5 days ago",
                        replies: 7,
                        viewed: 43
                      },
                      {
                        title: "Additional resources for string manipulation?",
                        author: "David L.",
                        time: "1 week ago",
                        replies: 2,
                        viewed: 19
                      }
                    ].map((thread, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
                        <h3 className="font-medium text-tuf-700 hover:text-tuf-800 hover:underline cursor-pointer mb-2">
                          {thread.title}
                        </h3>
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-gray-600">
                            Posted by <span className="font-medium">{thread.author}</span> • {thread.time}
                          </div>
                          <div className="flex space-x-4 text-gray-500">
                            <span>{thread.replies} replies</span>
                            <span>{thread.viewed} views</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Course sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-100 sticky top-20">
              <div className="p-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold mb-1">Course Content</h2>
                <p className="text-sm text-gray-500">
                  {course.modules.length} modules • {totalLessons} lessons • {formatDuration(course.duration)} total
                </p>
              </div>
              
              <div className="divide-y divide-gray-100 max-h-[600px] overflow-auto">
                {course.modules.map((module) => (
                  <div key={module.id} className="p-4">
                    <div 
                      className="flex justify-between items-start cursor-pointer"
                      onClick={() => setActiveModuleId(module.id)}
                    >
                      <h3 className="font-medium hover:text-tuf-700">{module.title}</h3>
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform ${
                          activeModuleId === module.id ? 'transform rotate-180' : ''
                        }`} 
                      />
                    </div>
                    
                    {activeModuleId === module.id && (
                      <div className="mt-3 space-y-2">
                        {module.lessons.map((lesson) => (
                          <div 
                            key={lesson.id} 
                            className={`flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-50 ${
                              activeLessonId === lesson.id ? 'bg-tuf-50 text-tuf-700' : ''
                            }`}
                            onClick={() => {
                              setActiveLessonId(lesson.id);
                              setIsPlaying(false);
                            }}
                          >
                            <div className={`mr-3 ${lesson.isCompleted ? 'text-green-500' : 'text-gray-400'}`}>
                              {lesson.isCompleted ? (
                                <CheckCircle className="h-5 w-5" />
                              ) : (
                                <PlayCircle className="h-5 w-5" />
                              )}
                            </div>
                            <div className="flex-grow text-sm">
                              <div className={lesson.isCompleted ? 'text-gray-600' : ''}>
                                {lesson.title}
                              </div>
                            </div>
                            <div className="text-xs text-gray-500">
                              {formatLessonDuration(lesson.duration)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <Button className="w-full mb-3">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Course
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseView;
