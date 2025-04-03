
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, X } from "lucide-react";
import { Link } from "react-router-dom";

export interface ProblemData {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
  timeComplexity: string;
  spaceComplexity: string;
  company: string;
  completed?: boolean; // Add the completed property as optional
}

export const ProblemCard = ({ problem }: { problem: ProblemData }) => {
  // Helper function to get badge color based on difficulty
  const getDifficultyColor = (difficulty: string) => {
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
    <Link to={`/practice/${problem.id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold">{problem.title}</h3>
            {problem.completed !== undefined && (
              <div className="text-green-600">
                {problem.completed ? 
                  <CheckCircle2 className="h-5 w-5" /> : 
                  <X className="h-5 w-5 text-gray-400" />
                }
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{problem.description}</p>
          
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className={`${getDifficultyColor(problem.difficulty)} capitalize`}>
              {problem.difficulty}
            </Badge>
            
            <div className="flex flex-wrap gap-1 justify-end">
              {problem.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-tuf-50 text-tuf-700 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {problem.tags.length > 2 && (
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  +{problem.tags.length - 2}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
