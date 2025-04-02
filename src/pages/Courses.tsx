
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard, CourseData } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, Filter, ChevronDown, Grid, List } from "lucide-react";

// Mock courses data
const coursesData: CourseData[] = [
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
  {
    id: "4",
    title: "Dynamic Programming: From Basics to Advanced",
    description: "A comprehensive guide to mastering dynamic programming with step-by-step problem solutions.",
    thumbnail: "https://via.placeholder.com/400x225/1E40AF/FFFFFF?text=Dynamic+Programming",
    duration: 480,
    level: "advanced",
    lessons: 36,
    category: "Dynamic Programming"
  },
  {
    id: "5",
    title: "Sorting and Searching Algorithms",
    description: "Learn and implement various sorting and searching algorithms with real-world applications.",
    thumbnail: "https://via.placeholder.com/400x225/3B82F6/FFFFFF?text=Sorting+and+Searching",
    duration: 240,
    level: "intermediate",
    lessons: 15,
    category: "Algorithms"
  },
  {
    id: "6",
    title: "Recursion and Backtracking",
    description: "Master the art of recursion and backtracking techniques to solve complex problems efficiently.",
    thumbnail: "https://via.placeholder.com/400x225/2563EB/FFFFFF?text=Recursion+and+Backtracking",
    duration: 300,
    level: "intermediate",
    lessons: 22,
    category: "Algorithms"
  },
  {
    id: "7",
    title: "Heap and Priority Queue",
    description: "Deep dive into heap data structure and priority queue implementations and applications.",
    thumbnail: "https://via.placeholder.com/400x225/1D4ED8/FFFFFF?text=Heap+and+Priority+Queue",
    duration: 200,
    level: "intermediate",
    lessons: 14,
    category: "Data Structures"
  },
  {
    id: "8",
    title: "Hash Tables and Sets",
    description: "Understanding hash tables, sets, and maps with practical coding examples.",
    thumbnail: "https://via.placeholder.com/400x225/1E40AF/FFFFFF?text=Hash+Tables",
    duration: 180,
    level: "beginner",
    lessons: 12,
    category: "Data Structures"
  },
  {
    id: "9",
    title: "Advanced Data Structures",
    description: "Explore advanced data structures like Trie, Segment Tree, and Union Find with applications.",
    thumbnail: "https://via.placeholder.com/400x225/3B82F6/FFFFFF?text=Advanced+Data+Structures",
    duration: 360,
    level: "advanced",
    lessons: 25,
    category: "Data Structures"
  },
];

// Extract unique categories and levels for filters
const categories = [...new Set(coursesData.map(course => course.category))];
const levels = [...new Set(coursesData.map(course => course.level))];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [isGridView, setIsGridView] = useState(true);
  
  // Filter courses based on search query and filters
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? course.category === selectedCategory : true;
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });
  
  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedLevel(null);
    setSearchQuery("");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Header */}
        <div className="bg-tuf-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold mb-4">Courses</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Comprehensive video courses covering essential Data Structures and Algorithms topics
              to help you ace your coding interviews.
            </p>
          </div>
        </div>
        
        {/* Search and filters */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                <Select value={selectedCategory || ""} onValueChange={(value) => setSelectedCategory(value || null)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedLevel || ""} onValueChange={(value) => setSelectedLevel(value || null)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level} className="capitalize">{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button variant="outline" onClick={clearFilters} className="w-full sm:w-auto">
                  Clear Filters
                </Button>
              </div>
              
              <div className="flex gap-2 ml-auto">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsGridView(true)}
                  className={isGridView ? "bg-tuf-50 text-tuf-700" : ""}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsGridView(false)}
                  className={!isGridView ? "bg-tuf-50 text-tuf-700" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Applied filters display */}
            {(selectedCategory || selectedLevel) && (
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="text-sm text-gray-500 mr-2 pt-1">Active filters:</div>
                
                {selectedCategory && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 text-xs bg-tuf-50 text-tuf-700 border-tuf-200"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Category: {selectedCategory}
                    <X className="ml-2 h-3 w-3" />
                  </Button>
                )}
                
                {selectedLevel && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-8 text-xs bg-tuf-50 text-tuf-700 border-tuf-200 capitalize"
                    onClick={() => setSelectedLevel(null)}
                  >
                    Level: {selectedLevel}
                    <X className="ml-2 h-3 w-3" />
                  </Button>
                )}
              </div>
            )}
          </div>
          
          {/* Results info */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Found
            </h2>
            <div className="text-sm text-gray-500">
              Showing all results
            </div>
          </div>
          
          {/* Course list */}
          {filteredCourses.length > 0 ? (
            <div className={`grid gap-8 ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredCourses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  className={!isGridView ? "md:flex md:flex-row" : ""}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <div className="text-3xl text-gray-400 mb-4">😕</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <Button onClick={clearFilters}>Clear all filters</Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export const X = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default Courses;
