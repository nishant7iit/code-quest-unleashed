
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProblemCard, ProblemData } from "@/components/ProblemCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid, List, Shuffle } from "lucide-react";
import { X } from "./Courses";

// Mock problems data
const problemsData: ProblemData[] = [
  {
    id: "1",
    title: "Two Sum",
    description: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    difficulty: "easy",
    tags: ["Array", "Hash Table"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    company: "Google",
    isSolved: true
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
  {
    id: "4",
    title: "Valid Parentheses",
    description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    difficulty: "easy",
    tags: ["String", "Stack"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    company: "Microsoft",
    isSolved: true
  },
  {
    id: "5",
    title: "Longest Palindromic Substring",
    description: "Given a string s, find the longest palindromic substring in s.",
    difficulty: "medium",
    tags: ["String", "Dynamic Programming"],
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    company: "Amazon"
  },
  {
    id: "6",
    title: "Maximum Subarray",
    description: "Find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    difficulty: "medium",
    tags: ["Array", "Divide and Conquer", "Dynamic Programming"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    company: "LinkedIn"
  },
  {
    id: "7",
    title: "Trapping Rain Water",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    difficulty: "hard",
    tags: ["Array", "Two Pointers", "Stack"],
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    company: "Google"
  },
  {
    id: "8",
    title: "Course Schedule",
    description: "There are a total of n courses you have to take, labeled from 0 to n-1. Some courses may have prerequisites. Determine if you can finish all courses.",
    difficulty: "medium",
    tags: ["Depth-First Search", "Breadth-First Search", "Graph", "Topological Sort"],
    timeComplexity: "O(V+E)",
    spaceComplexity: "O(V+E)",
    company: "Apple"
  },
  {
    id: "9",
    title: "Word Search II",
    description: "Given a 2D board and a list of words from the dictionary, find all words in the board.",
    difficulty: "hard",
    tags: ["Backtracking", "Trie"],
    timeComplexity: "O(M*N*4^L)",
    spaceComplexity: "O(L)",
    company: "Microsoft"
  },
];

// Extract unique tags, difficulties, and companies for filters
const allTags = [...new Set(problemsData.flatMap(problem => problem.tags))];
const difficulties = ["easy", "medium", "hard"];
const companies = [...new Set(problemsData.map(problem => problem.company).filter(Boolean))];

const Practice = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [isGridView, setIsGridView] = useState(true);
  const [showOnlySolved, setShowOnlySolved] = useState(false);
  
  // Filter problems based on search query and filters
  const filteredProblems = problemsData.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        problem.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty ? problem.difficulty === selectedDifficulty : true;
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => problem.tags.includes(tag));
    const matchesCompany = selectedCompany ? problem.company === selectedCompany : true;
    const matchesSolved = showOnlySolved ? problem.isSolved : true;
    
    return matchesSearch && matchesDifficulty && matchesTags && matchesCompany && matchesSolved;
  });
  
  const clearFilters = () => {
    setSelectedDifficulty(null);
    setSelectedTags([]);
    setSelectedCompany(null);
    setSearchQuery("");
    setShowOnlySolved(false);
  };
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  const getRandomProblem = () => {
    const randomIndex = Math.floor(Math.random() * problemsData.length);
    const randomProblem = problemsData[randomIndex];
    // Redirect to the problem page
    window.location.href = `/practice/${randomProblem.id}`;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Header */}
        <div className="bg-tuf-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl font-extrabold mb-4">Practice Problems</h1>
                <p className="text-xl text-gray-300 max-w-2xl">
                  Sharpen your skills with our extensive collection of DSA problems, 
                  designed to prepare you for technical interviews.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Button 
                  onClick={getRandomProblem}
                  className="bg-white text-tuf-900 hover:bg-gray-100 flex items-center"
                  size="lg"
                >
                  <Shuffle className="mr-2 h-4 w-4" />
                  Pick Random Problem
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and filters */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search problems..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                <Select value={selectedDifficulty || ""} onValueChange={(value) => setSelectedDifficulty(value || null)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map((difficulty) => (
                      <SelectItem key={difficulty} value={difficulty} className="capitalize">{difficulty}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedCompany || ""} onValueChange={(value) => setSelectedCompany(value || null)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Company" />
                  </SelectTrigger>
                  <SelectContent>
                    {companies.map((company) => (
                      <SelectItem key={company} value={company}>{company}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button 
                  variant={showOnlySolved ? "default" : "outline"} 
                  onClick={() => setShowOnlySolved(!showOnlySolved)}
                  className={`w-full sm:w-auto ${showOnlySolved ? "bg-tuf-700 hover:bg-tuf-800" : ""}`}
                >
                  Solved Only
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
            
            {/* Tags filter */}
            <div className="mt-4">
              <div className="text-sm text-gray-500 mb-2 flex items-center">
                <Filter className="h-4 w-4 mr-1" />
                Filter by tags:
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className={`cursor-pointer ${
                      selectedTags.includes(tag) 
                        ? "bg-tuf-700 hover:bg-tuf-800" 
                        : "hover:bg-tuf-50 hover:text-tuf-700"
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Applied filters display */}
            {(selectedDifficulty || selectedTags.length > 0 || selectedCompany || showOnlySolved) && (
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="text-sm text-gray-500 mr-2 pt-1">Active filters:</div>
                
                {selectedDifficulty && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 text-xs bg-tuf-50 text-tuf-700 border-tuf-200 capitalize"
                    onClick={() => setSelectedDifficulty(null)}
                  >
                    Difficulty: {selectedDifficulty}
                    <X className="ml-2 h-3 w-3" />
                  </Button>
                )}
                
                {selectedCompany && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-8 text-xs bg-tuf-50 text-tuf-700 border-tuf-200"
                    onClick={() => setSelectedCompany(null)}
                  >
                    Company: {selectedCompany}
                    <X className="ml-2 h-3 w-3" />
                  </Button>
                )}
                
                {showOnlySolved && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-8 text-xs bg-tuf-50 text-tuf-700 border-tuf-200"
                    onClick={() => setShowOnlySolved(false)}
                  >
                    Solved Only
                    <X className="ml-2 h-3 w-3" />
                  </Button>
                )}
                
                {selectedTags.length > 0 && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="h-8 text-xs bg-tuf-50 text-tuf-700 border-tuf-200"
                    onClick={() => setSelectedTags([])}
                  >
                    {selectedTags.length} tag{selectedTags.length > 1 ? 's' : ''} selected
                    <X className="ml-2 h-3 w-3" />
                  </Button>
                )}
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="h-8 text-xs ml-auto"
                  onClick={clearFilters}
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
          
          {/* Results info */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredProblems.length} {filteredProblems.length === 1 ? 'Problem' : 'Problems'} Found
            </h2>
            <div className="text-sm text-gray-500">
              Showing all results
            </div>
          </div>
          
          {/* Problem list */}
          {filteredProblems.length > 0 ? (
            <div className={`grid gap-8 ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProblems.map((problem) => (
                <ProblemCard 
                  key={problem.id} 
                  problem={problem} 
                  className={!isGridView ? "md:flex md:flex-row" : ""}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <div className="text-3xl text-gray-400 mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No problems found</h3>
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

export default Practice;
