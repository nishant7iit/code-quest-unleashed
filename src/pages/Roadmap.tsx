
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ChevronDown, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Roadmap = () => {
  const [beginnerOpen, setBeginnerOpen] = useState(true);
  const [intermediateOpen, setIntermediateOpen] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/" className="flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>Learning Roadmap</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">DSA Learning Roadmap</h1>
          <p className="text-gray-600 max-w-3xl">
            Follow this structured path to master Data Structures and Algorithms at your own pace.
            Each section builds upon the previous one, taking you from fundamentals to advanced concepts.
          </p>
        </div>
        
        <div className="space-y-6">
          {/* Beginner Section */}
          <Collapsible 
            open={beginnerOpen} 
            onOpenChange={setBeginnerOpen}
            className="border rounded-lg overflow-hidden"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-tuf-50 hover:bg-tuf-100 transition-colors">
              <div className="flex items-center">
                <div className="bg-tuf-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
                <h2 className="text-xl font-semibold">Beginner Level</h2>
              </div>
              {beginnerOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </CollapsibleTrigger>
            
            <CollapsibleContent>
              <div className="p-4 bg-white">
                <div className="space-y-4">
                  <Card className="border-green-100">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium mb-2">Programming Basics</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Before diving into DSA, ensure you have a solid understanding of programming fundamentals.
                      </p>
                      <ul className="space-y-2">
                        {["Variables & Data Types", "Control Flow", "Functions", "Basic I/O"].map((topic, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <Button variant="outline" className="text-tuf-700" asChild>
                          <Link to="/courses/1">Go to Course</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-green-100">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium mb-2">Arrays & Strings</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Master the fundamentals of array manipulation and string operations.
                      </p>
                      <ul className="space-y-2">
                        {["Array Traversal", "Basic Sorting", "String Manipulation", "Two Pointer Technique"].map((topic, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <Button variant="outline" className="text-tuf-700" asChild>
                          <Link to="/courses/1">Go to Course</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Intermediate Section */}
          <Collapsible 
            open={intermediateOpen} 
            onOpenChange={setIntermediateOpen}
            className="border rounded-lg overflow-hidden"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-tuf-50 hover:bg-tuf-100 transition-colors">
              <div className="flex items-center">
                <div className="bg-tuf-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
                <h2 className="text-xl font-semibold">Intermediate Level</h2>
              </div>
              {intermediateOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </CollapsibleTrigger>
            
            <CollapsibleContent>
              <div className="p-4 bg-white">
                <div className="space-y-4">
                  <Card className="border-blue-100">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium mb-2">Data Structures</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Learn fundamental data structures and their operations.
                      </p>
                      <ul className="space-y-2">
                        {["Linked Lists", "Stacks & Queues", "Hash Tables", "Trees"].map((topic, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <Button variant="outline" className="text-tuf-700" asChild>
                          <Link to="/courses/2">Go to Course</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-blue-100">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium mb-2">Searching & Sorting</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Explore efficient searching and sorting algorithms.
                      </p>
                      <ul className="space-y-2">
                        {["Binary Search", "Merge Sort", "Quick Sort", "Heap Sort"].map((topic, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <Button variant="outline" className="text-tuf-700" asChild>
                          <Link to="/courses/2">Go to Course</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Advanced Section */}
          <Collapsible 
            open={advancedOpen} 
            onOpenChange={setAdvancedOpen}
            className="border rounded-lg overflow-hidden"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-tuf-50 hover:bg-tuf-100 transition-colors">
              <div className="flex items-center">
                <div className="bg-tuf-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
                <h2 className="text-xl font-semibold">Advanced Level</h2>
              </div>
              {advancedOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </CollapsibleTrigger>
            
            <CollapsibleContent>
              <div className="p-4 bg-white">
                <div className="space-y-4">
                  <Card className="border-purple-100">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium mb-2">Graph Algorithms</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Master complex graph traversal and shortest path algorithms.
                      </p>
                      <ul className="space-y-2">
                        {["Depth-First Search", "Breadth-First Search", "Dijkstra's Algorithm", "Minimum Spanning Tree"].map((topic, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-purple-500 mr-2" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <Button variant="outline" className="text-tuf-700" asChild>
                          <Link to="/courses/3">Go to Course</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-purple-100">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium mb-2">Dynamic Programming</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Learn to solve complex problems by breaking them down into simpler subproblems.
                      </p>
                      <ul className="space-y-2">
                        {["Memoization", "Tabulation", "Common DP Patterns", "Advanced DP Problems"].map((topic, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-purple-500 mr-2" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <Button variant="outline" className="text-tuf-700" asChild>
                          <Link to="/courses/3">Go to Course</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Roadmap;
