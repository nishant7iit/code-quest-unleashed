
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { CourseCard, CourseData } from "@/components/CourseCard";
import { ProblemCard, ProblemData } from "@/components/ProblemCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mock course data
const featuredCourses: CourseData[] = [
  {
    id: "1",
    title: "Arrays and Strings: Essential Techniques",
    description: "Master fundamental array manipulation techniques and string algorithms for technical interviews.",
    thumbnail: "https://via.placeholder.com/400x225/3B82F6/FFFFFF?text=Arrays+and+Strings",
    duration: 320,
    level: "beginner",
    lessons: 24,
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
    category: "Data Structures"
  },
  {
    id: "3",
    title: "Graph Algorithms Masterclass",
    description: "Learn essential graph algorithms such as DFS, BFS, Dijkstra's, and more for solving complex problems.",
    thumbnail: "https://via.placeholder.com/400x225/1D4ED8/FFFFFF?text=Graph+Algorithms",
    duration: 420,
    level: "advanced",
    lessons: 32,
    category: "Graphs"
  },
];

// Mock problem data
const popularProblems: ProblemData[] = [
  {
    id: "1",
    title: "Two Sum",
    description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "easy",
    tags: ["Array", "Hash Table"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    company: "Google"
  },
  {
    id: "2",
    title: "Longest Substring Without Repeating Characters",
    description: "Find the length of the longest substring without repeating characters.",
    difficulty: "medium",
    tags: ["String", "Sliding Window", "Hash Table"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(min(m,n))",
    company: "Amazon"
  },
  {
    id: "3",
    title: "Merge K Sorted Lists",
    description: "Merge k sorted linked lists and return it as one sorted list.",
    difficulty: "hard",
    tags: ["Linked List", "Divide and Conquer", "Heap"],
    timeComplexity: "O(N log k)",
    spaceComplexity: "O(k)",
    company: "Facebook"
  },
];

// Testimonials
const testimonials = [
  {
    id: 1,
    content: "TUF+ has completely transformed my approach to technical interviews. The course content is excellent and the practice environment is top-notch.",
    author: "Rahul S.",
    role: "SDE @ Amazon",
    image: "https://via.placeholder.com/96/4F46E5/FFFFFF?text=RS"
  },
  {
    id: 2,
    content: "After struggling with coding interviews for months, TUF+ helped me crack my dream job. The mentorship program was particularly helpful.",
    author: "Priya M.",
    role: "Frontend Developer @ Microsoft",
    image: "https://via.placeholder.com/96/4F46E5/FFFFFF?text=PM"
  },
  {
    id: 3,
    content: "The structured approach to learning DSA on TUF+ makes complex topics digestible. I've seen significant improvement in my problem-solving skills.",
    author: "Alex T.",
    role: "Graduate Student, Stanford",
    image: "https://via.placeholder.com/96/4F46E5/FFFFFF?text=AT"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Courses */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Featured Courses</h2>
                <p className="mt-2 text-lg text-gray-600">Start your journey with our carefully crafted courses</p>
              </div>
              <Link to="/courses" className="mt-4 md:mt-0 inline-flex items-center text-tuf-700 hover:text-tuf-800">
                View all courses
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Practice Problems */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Popular Problems</h2>
                <p className="mt-2 text-lg text-gray-600">Sharpen your skills with our curated practice problems</p>
              </div>
              <Link to="/practice" className="mt-4 md:mt-0 inline-flex items-center text-tuf-700 hover:text-tuf-800">
                View all problems
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularProblems.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Features */}
        <FeatureSection />
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">
              What Our Students Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white p-8 rounded-lg shadow-md border border-gray-100 card-hover"
                >
                  <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="h-12 w-12 rounded-full mr-4" 
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-tuf-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Master DSA?</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their coding skills and career with TUF+
            </p>
            <Button size="lg" className="bg-white text-tuf-900 hover:bg-gray-100">
              Get Started Today
            </Button>
            <p className="mt-4 text-sm text-gray-400">
              No credit card required. Start with a free trial.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
