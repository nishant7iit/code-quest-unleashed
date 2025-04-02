
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Code } from "lucide-react";
import { Link } from "react-router-dom";

export interface ProblemData {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  timeComplexity: string;
  spaceComplexity: string;
  isSolved?: boolean;
  company?: string;
}

interface ProblemCardProps {
  problem: ProblemData;
  className?: string;
}

export const ProblemCard = ({ problem, className = '' }: ProblemCardProps) => {
  const { id, title, description, difficulty, tags, timeComplexity, spaceComplexity, isSolved, company } = problem;
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'hard':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  
  return (
    <Card className={`overflow-hidden card-hover ${className} ${isSolved ? 'border-green-200' : ''}`}>
      <CardHeader className="pb-2 flex flex-row items-start justify-between">
        <div>
          <Link to={`/practice/${id}`} className="hover:underline">
            <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
          </Link>
          
          <div className="flex flex-wrap gap-1 mt-2">
            <Badge variant="secondary" className={`${getDifficultyColor(difficulty)} capitalize`}>
              {difficulty}
            </Badge>
            
            {company && (
              <Badge variant="outline" className="border-gray-200 text-gray-700">
                {company}
              </Badge>
            )}
          </div>
        </div>
        
        {isSolved && (
          <div className="flex justify-center items-center bg-green-50 p-1 rounded-full border border-green-200">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{description}</p>
        
        <div className="flex justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>Time: {timeComplexity}</span>
          </div>
          <div className="flex items-center">
            <Code className="h-4 w-4 mr-1" />
            <span>Space: {spaceComplexity}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        <Link 
          to={`/practice/${id}`} 
          className="w-full inline-flex items-center justify-center rounded-md bg-tuf-50 px-4 py-2 text-sm font-medium text-tuf-700 hover:bg-tuf-100 transition-colors"
        >
          {isSolved ? 'Review Problem' : 'Solve Problem'}
        </Link>
      </CardFooter>
    </Card>
  );
};
