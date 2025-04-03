
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, BarChart, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 bg-tuf-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TUF+</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering the next generation of developers with world-class DSA education
              and interview preparation since 2023.
            </p>
          </div>
        </section>
        
        {/* Mission section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  TUF+ was founded with a simple mission: make high-quality data structures and algorithms education
                  accessible to everyone, regardless of their background or prior experience.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that with the right resources, guidance, and community support, anyone can master DSA
                  and succeed in technical interviews at top tech companies.
                </p>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/courses" className="inline-flex items-center">
                      Explore Our Courses
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-tuf-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Our Core Values</h3>
                <ul className="space-y-4">
                  {[
                    { icon: <BookOpen className="h-5 w-5" />, text: "Education should be accessible and affordable" },
                    { icon: <Users className="h-5 w-5" />, text: "Community-driven learning accelerates growth" },
                    { icon: <Award className="h-5 w-5" />, text: "Quality content that adapts to industry trends" },
                    { icon: <BarChart className="h-5 w-5" />, text: "Data-driven approach to improve learning outcomes" }
                  ].map((value, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-tuf-100 text-tuf-700 p-2 rounded-md mr-3">
                        {value.icon}
                      </div>
                      <span className="text-gray-700">{value.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats section */}
        <section className="py-16 bg-tuf-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "50,000+", label: "Active Learners" },
                { number: "500+", label: "Hours of Content" },
                { number: "1,000+", label: "Practice Problems" },
                { number: "92%", label: "Interview Success Rate" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-4xl font-bold mb-2">{stat.number}</p>
                  <p className="text-lg text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Leadership Team</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Meet the passionate team behind TUF+, dedicated to transforming how DSA is taught and learned worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Rahul Sharma",
                  role: "Founder & CEO",
                  bio: "Ex-Google engineer with a passion for education and making DSA accessible to all.",
                  image: "https://via.placeholder.com/300/4F46E5/FFFFFF?text=RS"
                },
                {
                  name: "Priya Patel",
                  role: "Chief Content Officer",
                  bio: "Stanford CS graduate who has helped thousands master algorithm design and implementation.",
                  image: "https://via.placeholder.com/300/4F46E5/FFFFFF?text=PP"
                },
                {
                  name: "Alex Chen",
                  role: "Head of Engineering",
                  bio: "Former tech lead at Meta who built the interactive learning platform from scratch.",
                  image: "https://via.placeholder.com/300/4F46E5/FFFFFF?text=AC"
                }
              ].map((member, i) => (
                <div key={i} className="bg-gray-50 rounded-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-tuf-700 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link to="/team">
                  Meet Our Full Team
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-tuf-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join the TUF+ Community</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Start your journey to DSA mastery today and join thousands of successful developers who've transformed their careers with TUF+.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/courses">
                  <Target className="mr-2 h-5 w-5" />
                  Explore Courses
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/community">
                  <Users className="mr-2 h-5 w-5" />
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
