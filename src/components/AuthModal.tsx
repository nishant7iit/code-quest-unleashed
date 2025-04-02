
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Github, Linkedin } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  onModeSwitch: (mode: 'login' | 'signup') => void;
  onLogin: () => void; // For demo purposes
}

export const AuthModal = ({ isOpen, onClose, mode, onModeSwitch, onLogin }: AuthModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Auth form submitted:', { email, password, name });
    
    // For demo purposes only
    if (mode === 'login') {
      onLogin();
    } else {
      // Register and then login
      onLogin();
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'login' ? 'Log in to your account' : 'Create an account'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'login' 
              ? 'Enter your email and password to access your account' 
              : 'Fill in the details below to create your account'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input 
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              {mode === 'login' && (
                <a 
                  href="#" 
                  className="text-xs text-tuf-700 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add forgot password logic
                  }}
                >
                  Forgot password?
                </a>
              )}
            </div>
            <Input 
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            {mode === 'login' ? 'Log in' : 'Sign up'}
          </Button>
          
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" type="button" className="flex items-center justify-center">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" type="button" className="flex items-center justify-center">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </form>
        
        <DialogFooter className="flex flex-col items-center sm:items-center">
          <div className="text-sm text-center">
            {mode === 'login' ? (
              <p>
                Don't have an account?{' '}
                <a 
                  href="#" 
                  className="text-tuf-700 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    onModeSwitch('signup');
                  }}
                >
                  Sign up
                </a>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <a 
                  href="#" 
                  className="text-tuf-700 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    onModeSwitch('login');
                  }}
                >
                  Log in
                </a>
              </p>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
