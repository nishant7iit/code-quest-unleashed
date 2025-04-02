
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, BarChart4 } from "lucide-react";
import { Link } from "react-router-dom";

export interface CourseData {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: number; // in minutes
  level: 'beginner' | 'intermediate' | 'advanced';
  progress?: number; // 0-100
  lessons: number;
  category: string;
}

interface CourseCardProps {
  course: CourseData;
  className?: string;
}

export const CourseCard = ({ course, className = '' }: CourseCardProps) => {
  const { id, title, description, thumbnail, duration, level, progress, lessons, category } = course;
  
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours > 0 ? `${hours}h ` : ''}${mins > 0 ? `${mins}m` : ''}`;
  };
  
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'advanced':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  
  return (
    <Card className={`overflow-hidden card-hover ${className}`}>
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className={`${getLevelColor(level)} capitalize`}>
            {level}
          </Badge>
        </div>
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="bg-tuf-800 text-white border-none">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <Link to={`/courses/${id}`} className="hover:underline">
          <h3 className="text-xl font-bold line-clamp-2 h-14">{title}</h3>
        </Link>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 text-sm line-clamp-2 h-10 mb-4">{description}</p>
        
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{formatDuration(duration)}</span>
          </div>
          <div className="flex items-center">
            <PlayCircle className="h-4 w-4 mr-1" />
            <span>{lessons} lessons</span>
          </div>
        </div>
        
        {progress !== undefined && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Link 
          to={`/courses/${id}`} 
          className="w-full inline-flex items-center justify-center rounded-md bg-tuf-50 px-4 py-2 text-sm font-medium text-tuf-700 hover:bg-tuf-100 transition-colors"
        >
          {progress ? 'Continue Learning' : 'Start Learning'}
        </Link>
      </CardFooter>
    </Card>
  );
};
