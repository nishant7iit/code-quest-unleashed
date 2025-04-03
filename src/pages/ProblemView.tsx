
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CodeEditor } from "@/components/CodeEditor";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  BookOpen,
  Code,
  Play,
  CheckCircle,
  Clock,
  BarChart3,
  MessageSquare,
  ThumbsUp,
  Bookmark,
  Share2
} from "lucide-react";
import { toast } from "sonner";

// Mock problem data
const problemData = {
  id: "1",
  title: "Two Sum",
  description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
  difficulty: "easy",
  tags: ["Array", "Hash Table"],
  constraints: [
    "2 <= nums.length <= 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "-10^9 <= target <= 10^9",
    "Only one valid answer exists."
  ],
  examples: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
    },
    {
      input: "nums = [3,3], target = 6",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 6, we return [0, 1]."
    }
  ],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  company: "Google",
  hints: [
    "A brute force approach would be to check every pair of numbers, but that would be O(n²) time complexity. Can we do better?",
    "Consider using a hash table to store each number and its index as you iterate through the array.",
    "For each number, check if the complement (target - current number) exists in the hash table already."
  ],
  solution: `function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`,
  initialCode: `function twoSum(nums, target) {
  // Your code here
}`,
  testCases: [
    {
      input: "twoSum([2,7,11,15], 9)",
      expectedOutput: "[0,1]"
    },
    {
      input: "twoSum([3,2,4], 6)",
      expectedOutput: "[1,2]"
    },
    {
      input: "twoSum([3,3], 6)",
      expectedOutput: "[0,1]"
    }
  ]
};

const ProblemView = () => {
  const { problemId } = useParams();
  const [code, setCode] = useState(problemData.initialCode);
  const [activeTab, setActiveTab] = useState("problem");
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  
  // Function to handle code execution
  const handleRunCode = () => {
    setIsRunning(true);
    // Simulate code execution with a delay
    setTimeout(() => {
      const results = problemData.testCases.map((testCase, index) => {
        // Simulate test results (in a real app, you'd actually run the code)
        const success = index !== 1; // Make the second test case fail for demonstration
        
        return {
          input: testCase.input,
          expectedOutput: testCase.expectedOutput,
          actualOutput: success ? testCase.expectedOutput : "[1,3]",
          success
        };
      });
      
      setTestResults(results);
      setIsRunning(false);
      
      const allPassed = results.every(result => result.success);
      if (allPassed) {
        toast.success("All test cases passed!");
      } else {
        toast.error("Some test cases failed. Check the results tab for details.");
      }
    }, 1500);
  };
  
  // Function to handle submission
  const handleSubmit = () => {
    toast.success("Solution submitted successfully!");
  };
  
  // Function to bookmark/save problem
  const handleToggleSave = () => {
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Problem removed from bookmarks" : "Problem added to bookmarks");
  };
  
  // Get badge color based on difficulty
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 border-green-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "hard":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/practice" className="flex items-center text-gray-600 hover:text-tuf-700">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Problems
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left panel - Problem description */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-2xl font-bold">{problemData.title}</h1>
                <Badge variant="secondary" className={`${getDifficultyColor(problemData.difficulty)} capitalize`}>
                  {problemData.difficulty}
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {problemData.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-tuf-50 text-tuf-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {problemData.timeComplexity}
                </span>
                <span className="flex items-center">
                  <BarChart3 className="h-4 w-4 mr-1" />
                  {problemData.spaceComplexity}
                </span>
                <span className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {problemData.company}
                </span>
              </div>
            </div>
            
            <Tabs defaultValue="problem" onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="problem" className="flex-1">Problem</TabsTrigger>
                <TabsTrigger value="hints" className="flex-1">Hints</TabsTrigger>
                <TabsTrigger value="solution" className="flex-1">Solution</TabsTrigger>
              </TabsList>
              
              <TabsContent value="problem" className="space-y-4 prose max-w-none">
                <div>
                  <h3 className="text-lg font-medium">Description</h3>
                  <p className="whitespace-pre-line">{problemData.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Constraints</h3>
                  <ul className="list-disc pl-6">
                    {problemData.constraints.map((constraint, index) => (
                      <li key={index}>{constraint}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Examples</h3>
                  {problemData.examples.map((example, index) => (
                    <div key={index} className="mb-4 p-3 bg-gray-50 rounded">
                      <p><strong>Input:</strong> {example.input}</p>
                      <p><strong>Output:</strong> {example.output}</p>
                      {example.explanation && (
                        <p><strong>Explanation:</strong> {example.explanation}</p>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="hints" className="space-y-4">
                <p className="text-gray-600 italic mb-4">
                  Need a nudge in the right direction? Check out these hints:
                </p>
                
                <div className="space-y-4">
                  {problemData.hints.map((hint, index) => (
                    <div key={index} className="p-3 bg-tuf-50 rounded">
                      <p className="text-gray-700">{hint}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="solution" className="space-y-4">
                <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-auto">
                  <pre className="text-sm">
                    <code>{problemData.solution}</code>
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Approach</h3>
                  <p className="text-gray-700">
                    This solution uses a hash map to keep track of elements we've seen so far. For each number, we calculate its complement (target - current number) and check if it exists in our hash map. If it does, we've found our pair! If not, we add the current number to the hash map and continue.
                  </p>
                  <p className="text-gray-700 mt-2">
                    This approach is efficient because hash map lookups are O(1) on average, making our overall time complexity O(n) where n is the length of the input array.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" onClick={handleToggleSave}>
                  <Bookmark className={`h-4 w-4 mr-1 ${isSaved ? 'fill-current' : ''}`} />
                  {isSaved ? 'Saved' : 'Save'}
                </Button>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Like
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
              
              <Button variant="ghost" size="sm">
                <MessageSquare className="h-4 w-4 mr-1" />
                Discussion
              </Button>
            </div>
          </div>
          
          {/* Right panel - Code editor */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-3 border-b flex items-center justify-between">
                <div className="flex items-center">
                  <Code className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="font-medium">Code Editor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <select 
                    className="px-2 py-1 rounded border text-sm bg-white"
                    defaultValue="javascript"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </div>
              </div>
              
              <div className="h-96 border-b">
                <CodeEditor value={code} onChange={setCode} language="javascript" />
              </div>
              
              <div className="p-3 flex justify-between">
                <Button variant="outline" onClick={() => setCode(problemData.initialCode)}>
                  Reset Code
                </Button>
                <div className="space-x-2">
                  <Button 
                    variant="secondary" 
                    disabled={isRunning}
                    onClick={handleRunCode}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    {isRunning ? 'Running...' : 'Run Code'}
                  </Button>
                  <Button 
                    onClick={handleSubmit}
                    disabled={isRunning}
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            
            {testResults.length > 0 && (
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-3 border-b">
                  <h3 className="font-medium">Test Results</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    {testResults.map((result, index) => (
                      <div key={index} className="p-3 rounded border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Test Case {index + 1}</span>
                          <Badge 
                            variant={result.success ? "outline" : "destructive"}
                            className={result.success ? "bg-green-50 text-green-700 border-green-200" : ""}
                          >
                            {result.success ? 'Passed' : 'Failed'}
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p><strong>Input:</strong> {result.input}</p>
                          <p><strong>Expected:</strong> {result.expectedOutput}</p>
                          <p><strong>Actual:</strong> <span className={!result.success ? "text-red-500 font-medium" : ""}>{result.actualOutput}</span></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProblemView;
