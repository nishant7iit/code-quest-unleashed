
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  User, 
  Mail, 
  Lock, 
  CreditCard, 
  Bell, 
  Shield, 
  Github, 
  Linkedin,
  Award,
  Save
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Profile = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Mock user data
  const user = {
    name: "John Smith",
    email: "john.smith@example.com",
    imageUrl: "https://via.placeholder.com/150/4F46E5/FFFFFF?text=JS",
    role: "Software Engineer",
    location: "San Francisco, CA",
    timeZone: "Pacific Time (US & Canada)",
    github: "johnsmith",
    linkedin: "johnsmith",
    bio: "Full-stack developer passionate about algorithms and data structures. Currently preparing for interviews at top tech companies."
  };
  
  // Mock achievement data
  const achievements = [
    {
      id: "1",
      title: "7-Day Streak",
      description: "Practiced coding for 7 consecutive days",
      icon: "🔥",
      date: "March 28, 2025"
    },
    {
      id: "2",
      title: "Problem Solver",
      description: "Solved 25 coding problems",
      icon: "🧩",
      date: "March 25, 2025"
    },
    {
      id: "3",
      title: "Algorithm Master",
      description: "Completed the Graph Algorithms course",
      icon: "🏆",
      date: "March 20, 2025"
    },
    {
      id: "4",
      title: "Early Adopter",
      description: "Joined TUF+ during the first month",
      icon: "🚀",
      date: "January 15, 2025"
    }
  ];
  
  // Mock subscription data
  const subscription = {
    plan: "Annual Plan",
    status: "Active",
    amount: "$199.99",
    nextBilling: "December 31, 2025",
    paymentMethod: "Visa ending in 4242"
  };
  
  // Handle profile update
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Profile updated successfully!");
    }, 1500);
  };
  
  // Handle password change
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Password changed successfully!");
      // Reset form
      e.target.reset();
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Profile card */}
            <Card className="w-full md:w-80 flex-shrink-0">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <img 
                      src={user.imageUrl} 
                      alt={user.name} 
                      className="h-24 w-24 rounded-full object-cover border-4 border-white shadow"
                    />
                    <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full bg-white">
                      <User className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-500">{user.role}</p>
                <p className="text-gray-500 text-sm mt-1">{user.location}</p>
                
                <div className="flex justify-center space-x-2 mt-4">
                  {user.github && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={`https://github.com/${user.github}`} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {user.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={`https://linkedin.com/in/${user.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                
                <Separator className="my-6" />
                
                <div className="text-left">
                  <h3 className="font-medium mb-2">About</h3>
                  <p className="text-sm text-gray-600">{user.bio}</p>
                </div>
                
                <Separator className="my-6" />
                
                <div className="text-left">
                  <h3 className="font-medium mb-2">Achievements</h3>
                  <div className="space-y-3">
                    {achievements.slice(0, 3).map((achievement) => (
                      <div key={achievement.id} className="flex items-center">
                        <div className="text-2xl mr-3">{achievement.icon}</div>
                        <div>
                          <p className="font-medium text-sm">{achievement.title}</p>
                          <p className="text-xs text-gray-500">{achievement.date}</p>
                        </div>
                      </div>
                    ))}
                    
                    <Button variant="ghost" size="sm" className="w-full mt-2" asChild>
                      <Link to="#achievements">
                        View all achievements
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Settings tabs */}
            <div className="flex-grow">
              <Tabs defaultValue="account">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                
                {/* Account settings */}
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Information</CardTitle>
                      <CardDescription>
                        Update your personal details and public profile
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleProfileUpdate}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" defaultValue={user.name} />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" defaultValue={user.email} />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="role">Professional Title</Label>
                            <Input id="role" defaultValue={user.role} />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" defaultValue={user.location} />
                          </div>
                          
                          <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="bio">Bio</Label>
                            <textarea 
                              id="bio" 
                              className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                              defaultValue={user.bio}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="github">GitHub Username</Label>
                            <Input id="github" defaultValue={user.github} />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="linkedin">LinkedIn Username</Label>
                            <Input id="linkedin" defaultValue={user.linkedin} />
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                              'Saving...'
                            ) : (
                              <>
                                <Save className="mr-2 h-4 w-4" />
                                Save Changes
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Password settings */}
                <TabsContent value="password">
                  <Card>
                    <CardHeader>
                      <CardTitle>Change Password</CardTitle>
                      <CardDescription>
                        Update your password to keep your account secure
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handlePasswordChange} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" required />
                          <p className="text-sm text-gray-500 mt-1">
                            Password must be at least 8 characters and include a number and special character.
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" required />
                        </div>
                        
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Updating...' : 'Update Password'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Billing settings */}
                <TabsContent value="billing">
                  <Card>
                    <CardHeader>
                      <CardTitle>Subscription Details</CardTitle>
                      <CardDescription>
                        Manage your subscription and payment methods
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="bg-tuf-50 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-tuf-900">{subscription.plan}</h3>
                              <p className="text-sm text-gray-600">
                                You are currently on the {subscription.plan.toLowerCase()}
                              </p>
                            </div>
                            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                              {subscription.status}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="font-medium">Billing Information</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border rounded-md p-4">
                              <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-500">Amount</p>
                                <p className="font-medium">{subscription.amount}</p>
                              </div>
                            </div>
                            
                            <div className="border rounded-md p-4">
                              <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-500">Next billing date</p>
                                <p className="font-medium">{subscription.nextBilling}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border rounded-md p-4">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
                                <div>
                                  <p className="font-medium">Payment Method</p>
                                  <p className="text-sm text-gray-500">{subscription.paymentMethod}</p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Update
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button variant="outline">
                            View Invoice History
                          </Button>
                          <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                            Cancel Subscription
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Notification settings */}
                <TabsContent value="notifications">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>
                        Choose when and how you want to be notified
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-medium mb-3">Email Notifications</h3>
                          <div className="space-y-3">
                            {[
                              { id: "email-course", label: "Course updates and new content" },
                              { id: "email-challenge", label: "Weekly coding challenges" },
                              { id: "email-events", label: "Upcoming events and webinars" },
                              { id: "email-community", label: "Community mentions and replies" },
                              { id: "email-marketing", label: "News and promotional emails" }
                            ].map((item) => (
                              <div key={item.id} className="flex items-center space-x-2">
                                <Checkbox id={item.id} defaultChecked={item.id !== "email-marketing"} />
                                <Label htmlFor={item.id} className="text-sm">
                                  {item.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="font-medium mb-3">Push Notifications</h3>
                          <div className="space-y-3">
                            {[
                              { id: "push-reminders", label: "Study reminders and streak alerts" },
                              { id: "push-feedback", label: "Feedback on submitted code" },
                              { id: "push-mentorship", label: "Mentorship session reminders" },
                              { id: "push-achievements", label: "Achievement unlocks" }
                            ].map((item) => (
                              <div key={item.id} className="flex items-center space-x-2">
                                <Checkbox id={item.id} defaultChecked />
                                <Label htmlFor={item.id} className="text-sm">
                                  {item.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Button>
                          Save Preferences
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Achievements section */}
          <Card id="achievements" className="mt-8">
            <CardHeader>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-tuf-700 mr-2" />
                <CardTitle>Your Achievements</CardTitle>
              </div>
              <CardDescription>
                Badges and accomplishments you've earned on TUF+
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="border rounded-lg p-4 text-center hover:border-tuf-200 hover:bg-tuf-50 transition-colors">
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <h3 className="font-medium">{achievement.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{achievement.description}</p>
                    <p className="text-xs text-gray-400 mt-2">{achievement.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6 flex justify-center">
              <Button variant="outline">
                View Achievement History
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default Profile;
