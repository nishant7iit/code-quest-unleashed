
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  User,
  Lock,
  Bell,
  Moon,
  Sun,
  Code,
  Laptop,
  Globe,
  Languages,
  Download,
  Shield,
  Trash2
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [codeFontSize, setCodeFontSize] = useState(14);
  const [isSecuritySubmitting, setIsSecuritySubmitting] = useState(false);
  
  // Handle theme change
  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    toast.success(`Theme changed to ${newTheme} mode`);
  };
  
  // Handle security settings update
  const handleSecuritySubmit = (e) => {
    e.preventDefault();
    setIsSecuritySubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSecuritySubmitting(false);
      toast.success("Security settings updated successfully");
    }, 1500);
  };
  
  // Handle account deletion request
  const handleDeleteRequest = () => {
    // In a real app, this would open a confirmation modal
    toast.error("Please contact support to delete your account");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Settings</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
            {/* Sidebar navigation */}
            <nav className="space-y-1 lg:bg-gray-50 lg:p-4 lg:rounded-lg">
              {[
                { icon: <User className="h-5 w-5" />, label: "Account", href: "#account" },
                { icon: <Lock className="h-5 w-5" />, label: "Security", href: "#security" },
                { icon: <Bell className="h-5 w-5" />, label: "Notifications", href: "#notifications" },
                { icon: <Moon className="h-5 w-5" />, label: "Appearance", href: "#appearance" },
                { icon: <Code className="h-5 w-5" />, label: "Editor", href: "#editor" },
                { icon: <Globe className="h-5 w-5" />, label: "Language", href: "#language" },
                { icon: <Download className="h-5 w-5" />, label: "Data", href: "#data" },
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-600 hover:bg-tuf-50 hover:text-tuf-700 transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
            
            {/* Settings content */}
            <div className="space-y-10">
              {/* Account settings */}
              <section id="account" className="space-y-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-tuf-700 mr-2" />
                  <h2 className="text-xl font-semibold">Account Settings</h2>
                </div>
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Profile Information</h3>
                      <p className="text-sm text-gray-500">Update your account profile information</p>
                    </div>
                    <Button variant="outline" asChild>
                      <a href="/profile">Manage</a>
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Subscription</h3>
                      <p className="text-sm text-gray-500">Manage your subscription plan and billing</p>
                    </div>
                    <Button variant="outline" asChild>
                      <a href="/profile?tab=billing">Manage</a>
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Connected Accounts</h3>
                      <p className="text-sm text-gray-500">Connect GitHub, LeetCode, and other platforms</p>
                    </div>
                    <Button variant="outline">
                      Connect
                    </Button>
                  </div>
                </div>
              </section>
              
              {/* Security settings */}
              <section id="security" className="space-y-4">
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-tuf-700 mr-2" />
                  <h2 className="text-xl font-semibold">Security</h2>
                </div>
                <Separator />
                
                <form onSubmit={handleSecuritySubmit} className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Password</h3>
                      <p className="text-sm text-gray-500">Update your password regularly for security</p>
                    </div>
                    <Button variant="outline" asChild>
                      <a href="/profile?tab=password">Change</a>
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Login Sessions</h3>
                        <p className="text-sm text-gray-500">Manage your active sessions</p>
                      </div>
                      <Button variant="outline">
                        Manage
                      </Button>
                    </div>
                    
                    <div className="pt-2">
                      <h3 className="font-medium mb-2">Email Verification</h3>
                      <div className="flex gap-4 items-start">
                        <Input type="email" placeholder="Enter your email" className="max-w-sm" />
                        <Button type="submit" disabled={isSecuritySubmitting}>
                          {isSecuritySubmitting ? 'Verifying...' : 'Verify Email'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
              
              {/* Notification settings */}
              <section id="notifications" className="space-y-4">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-tuf-700 mr-2" />
                  <h2 className="text-xl font-semibold">Notifications</h2>
                </div>
                <Separator />
                
                <div className="space-y-4">
                  {[
                    { title: "Email Notifications", desc: "Receive updates via email" },
                    { title: "Push Notifications", desc: "Receive notifications on your device" },
                    { title: "Browser Notifications", desc: "Receive notifications in your browser" },
                    { title: "Weekly Digest", desc: "Receive a summary of your weekly progress" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                      <Switch defaultChecked={index !== 3} />
                    </div>
                  ))}
                  
                  <Button>
                    Save Preferences
                  </Button>
                </div>
              </section>
              
              {/* Appearance settings */}
              <section id="appearance" className="space-y-4">
                <div className="flex items-center">
                  <Moon className="h-5 w-5 text-tuf-700 mr-2" />
                  <h2 className="text-xl font-semibold">Appearance</h2>
                </div>
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Theme</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer hover:border-tuf-500 ${theme === 'light' ? 'border-tuf-500 bg-tuf-50' : ''}`}
                      onClick={() => handleThemeChange('light')}
                    >
                      <div className="flex items-center justify-center h-20 bg-white rounded mb-3">
                        <Sun className="h-8 w-8 text-yellow-500" />
                      </div>
                      <p className="font-medium text-center">Light</p>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer hover:border-tuf-500 ${theme === 'dark' ? 'border-tuf-500 bg-tuf-50' : ''}`}
                      onClick={() => handleThemeChange('dark')}
                    >
                      <div className="flex items-center justify-center h-20 bg-gray-800 rounded mb-3">
                        <Moon className="h-8 w-8 text-gray-200" />
                      </div>
                      <p className="font-medium text-center">Dark</p>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer hover:border-tuf-500 ${theme === 'system' ? 'border-tuf-500 bg-tuf-50' : ''}`}
                      onClick={() => handleThemeChange('system')}
                    >
                      <div className="flex items-center justify-center h-20 bg-gradient-to-r from-white to-gray-800 rounded mb-3">
                        <Laptop className="h-8 w-8 text-tuf-700" />
                      </div>
                      <p className="font-medium text-center">System</p>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Editor settings */}
              <section id="editor" className="space-y-4">
                <div className="flex items-center">
                  <Code className="h-5 w-5 text-tuf-700 mr-2" />
                  <h2 className="text-xl font-semibold">Editor Preferences</h2>
                </div>
                <Separator />
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fontsize">Code Font Size</Label>
                    <div className="flex items-center space-x-4">
                      <Input 
                        id="fontsize" 
                        type="range" 
                        min="10" 
                        max="20" 
                        value={codeFontSize} 
                        onChange={(e) => setCodeFontSize(parseInt(e.target.value))}
                        className="w-64"
                      />
                      <span className="font-mono">{codeFontSize}px</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { label: "Tab Size", value: "2 spaces" },
                      { label: "Auto-save", checked: true },
                      { label: "Line Numbers", checked: true },
                      { label: "Code Hinting", checked: true },
                      { label: "Word Wrap", checked: false }
                    ].map((item, index) => (
                      'checked' in item ? (
                        <div key={index} className="flex justify-between items-center">
                          <Label htmlFor={`editor-${index}`}>{item.label}</Label>
                          <Switch id={`editor-${index}`} defaultChecked={item.checked} />
                        </div>
                      ) : (
                        <div key={index} className="flex justify-between items-center">
                          <Label>{item.label}</Label>
                          <span className="text-sm font-medium">{item.value}</span>
                        </div>
                      )
                    ))}
                  </div>
                  
                  <Button>
                    Save Editor Preferences
                  </Button>
                </div>
              </section>
              
              {/* Language settings */}
              <section id="language" className="space-y-4">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-tuf-700 mr-2" />
                  <h2 className="text-xl font-semibold">Language & Region</h2>
                </div>
                <Separator />
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="language">Display Language</Label>
                      <select 
                        id="language" 
                        className="w-full px-3 py-2 rounded-md border border-input bg-background"
                        defaultValue="en"
                      >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="hi">हिन्दी</option>
                        <option value="zh">中文</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="region">Region</Label>
                      <select 
                        id="region" 
                        className="w-full px-3 py-2 rounded-md border border-input bg-background"
                        defaultValue="us"
                      >
                        <option value="us">United States</option>
                        <option value="in">India</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Default Programming Language</h3>
                      <p className="text-sm text-gray-500">Set your preferred coding language for practice</p>
                    </div>
                    <select 
                      className="px-3 py-2 rounded-md border border-input bg-background"
                      defaultValue="javascript"
                    >
                      <option value="javascript">JavaScript</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                    </select>
                  </div>
                  
                  <Button>
                    Save Language Preferences
                  </Button>
                </div>
              </section>
              
              {/* Data settings */}
              <section id="data" className="space-y-4">
                <div className="flex items-center">
                  <Download className="h-5 w-5 text-tuf-700 mr-2" />
                  <h2 className="text-xl font-semibold">Data & Privacy</h2>
                </div>
                <Separator />
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">Export Your Data</h3>
                      <p className="text-sm text-gray-500">Download all your data including submissions and progress</p>
                    </div>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium">Privacy Options</h3>
                    {[
                      { label: "Share my progress on leaderboards", checked: true },
                      { label: "Allow TUF+ to use my solutions as examples", checked: false },
                      { label: "Collect anonymous usage data to improve the platform", checked: true }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <Label htmlFor={`privacy-${index}`}>{item.label}</Label>
                        <Switch id={`privacy-${index}`} defaultChecked={item.checked} />
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-medium text-red-600 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Danger Zone
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">Permanent actions that cannot be undone</p>
                    
                    <div className="flex justify-between items-center border border-red-200 rounded-md p-4 bg-red-50">
                      <div>
                        <h3 className="font-medium">Delete Account</h3>
                        <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
                      </div>
                      <Button variant="destructive" onClick={handleDeleteRequest}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;
