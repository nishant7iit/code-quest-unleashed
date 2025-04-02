
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthModal } from "./AuthModal";
import { ArrowRight, Check } from "lucide-react";

export const Hero = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');
  
  // Mock login function
  const handleLogin = () => {
    console.log('User logged in');
    setIsAuthModalOpen(false);
  };
  
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-tuf-50 transform -skew-y-3 origin-top-right h-[110%] -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Master</span>
            <span className="block text-tuf-700">Data Structures & Algorithms</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            The most comprehensive platform to prepare for coding interviews
            with video courses, interactive practice, and mentorship.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button 
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center"
                onClick={() => {
                  setAuthMode('signup');
                  setIsAuthModalOpen(true);
                }}
              >
                Start Learning Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  setAuthMode('login');
                  setIsAuthModalOpen(true);
                }}
              >
                Sign In
              </Button>
            </div>
          </div>
          
          {/* Key benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Premium Video Courses", description: "Learn from expert instructors" },
              { title: "Interactive Coding Environment", description: "Practice in real-time with feedback" },
              { title: "1-on-1 Mentorship", description: "Personalized guidance for your goals" }
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center px-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-tuf-600 text-white mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onLogin={handleLogin}
        onModeSwitch={(mode) => setAuthMode(mode)}
      />
    </div>
  );
};
