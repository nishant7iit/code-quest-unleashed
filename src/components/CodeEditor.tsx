
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Play, Code, RotateCcw } from "lucide-react";

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  onRun?: (code: string, language: string) => void;
  onSubmit?: (code: string, language: string) => void;
  isReadOnly?: boolean;
  height?: string;
}

export const CodeEditor = ({
  initialCode = "// Write your code here",
  language = "javascript",
  onRun,
  onSubmit,
  isReadOnly = false,
  height = "400px",
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  
  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
  ];
  
  const handleRun = () => {
    setIsRunning(true);
    setOutput("Running code...");
    
    // Simulate running code
    setTimeout(() => {
      setOutput("Execution completed successfully.\n\nOutput:\n[1, 2, 3, 4, 5]");
      setIsRunning(false);
      
      if (onRun) {
        onRun(code, selectedLanguage);
      }
    }, 1500);
  };
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    setOutput("Submitting solution...");
    
    // Simulate submitting code
    setTimeout(() => {
      setOutput("✅ All test cases passed!");
      setIsSubmitting(false);
      
      if (onSubmit) {
        onSubmit(code, selectedLanguage);
      }
    }, 2000);
  };
  
  const handleReset = () => {
    setCode(initialCode);
    setOutput(null);
  };
  
  return (
    <div className="rounded-md border bg-card text-card-foreground shadow-sm w-full">
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center">
          <Code className="mr-2 h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium">Code Editor</span>
        </div>
        <div className="flex items-center space-x-2">
          <Select 
            value={selectedLanguage} 
            onValueChange={(value) => setSelectedLanguage(value)}
            disabled={isReadOnly}
          >
            <SelectTrigger className="w-[150px] h-8">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>{lang.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="p-0 relative" style={{ height }}>
        <textarea
          className="w-full h-full font-mono text-sm p-4 bg-gray-50 dark:bg-gray-900 resize-none focus:outline-none"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          disabled={isReadOnly}
          spellCheck={false}
        />
      </div>
      
      <div className="flex items-center justify-between border-t p-3">
        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          disabled={isReadOnly || isRunning || isSubmitting}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRun}
            disabled={isReadOnly || isRunning || isSubmitting}
          >
            <Play className="mr-2 h-4 w-4" />
            Run
          </Button>
          
          <Button
            variant="default"
            size="sm"
            onClick={handleSubmit}
            disabled={isReadOnly || isRunning || isSubmitting}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Submit
          </Button>
        </div>
      </div>
      
      {output && (
        <div className="border-t p-3">
          <div className="text-sm font-medium mb-2">Output:</div>
          <pre className="bg-gray-50 p-3 rounded-md text-sm font-mono whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
};
