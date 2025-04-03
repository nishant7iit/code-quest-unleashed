
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock team data
const teamData = {
  leadership: [
    {
      name: "Rahul Sharma",
      role: "Founder & CEO",
      bio: "Ex-Google engineer with a passion for education and making DSA accessible to all. Rahul has 10+ years of experience in software engineering and has been teaching algorithms for over 5 years.",
      image: "https://via.placeholder.com/400/4F46E5/FFFFFF?text=RS",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Priya Patel",
      role: "Chief Content Officer",
      bio: "Stanford CS graduate who has helped thousands master algorithm design and implementation. Priya has created over 200 hours of educational content and authored two books on DSA.",
      image: "https://via.placeholder.com/400/4F46E5/FFFFFF?text=PP",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Alex Chen",
      role: "Head of Engineering",
      bio: "Former tech lead at Meta who built the interactive learning platform from scratch. Alex specializes in full-stack development and has architected multiple educational platforms.",
      image: "https://via.placeholder.com/400/4F46E5/FFFFFF?text=AC",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ],
  instructors: [
    {
      name: "David Kumar",
      role: "Lead Instructor, Algorithms",
      bio: "PhD in Computer Science with expertise in algorithm design and optimization. Previously taught at MIT and has worked at Amazon as a software engineer.",
      image: "https://via.placeholder.com/400/4F46E5/FFFFFF?text=DK",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Lead Instructor, Data Structures",
      bio: "Former Microsoft engineer specializing in efficient data structure implementations. Sarah has mentored over 500 students who went on to work at top tech companies.",
      image: "https://via.placeholder.com/400/4F46E5/FFFFFF?text=SJ",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Miguel Rodriguez",
      role: "Instructor, System Design",
      bio: "Senior architect at Netflix with 12 years of experience designing scalable systems. Miguel brings real-world examples to help students understand complex design patterns.",
      image: "https://via.placeholder.com/400/4F46E5/FFFFFF?text=MR",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Aisha Khan",
      role: "Instructor, Interview Prep",
      bio: "Technical interviewer at Google who has conducted 500+ technical interviews. Aisha knows exactly what top companies look for and how to prepare candidates effectively.",
      image: "https://via.placeholder.com/400/4F46E5/FFFFFF?text=AK",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ],
  engineering: [
    {
      name: "Jason Park",
      role: "Senior Frontend Engineer",
      bio: "React specialist with a focus on creating intuitive user interfaces. Jason has built interactive educational experiences for various EdTech platforms.",
      image: "https://via.placeholder.com/400/4F46E5/FFFFFF?text=JP",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Nina Gupta",
      role: "Senior Backend Engineer",
      bio: "Scalability expert who designed TUF+'s cloud infrastructure. Nina previously worked at AWS and brings deep knowledge of distributed systems.",
      image: "https://via.placeholder.com/400/4F46E5/FFFFFF?text=NG",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Theo Williams",
      role: "Full Stack Engineer",
      bio: "Full stack developer with expertise in TypeScript and Node.js. Theo leads the development of TUF+'s interactive coding environment.",
      image: "https://via.placeholder.com/400/4F46E5/FFFFFF?text=TW",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ]
};

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 bg-tuf-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind TUF+ who are dedicated to transforming
              how Data Structures and Algorithms are taught and learned.
            </p>
          </div>
        </section>
        
        {/* Team tabs section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="leadership" className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList>
                  <TabsTrigger value="leadership">Leadership</TabsTrigger>
                  <TabsTrigger value="instructors">Instructors</TabsTrigger>
                  <TabsTrigger value="engineering">Engineering</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="leadership">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamData.leadership.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="instructors">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamData.instructors.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="engineering">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamData.engineering.map((member, index) => (
                    <TeamMemberCard key={index} member={member} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Join the team section */}
        <section className="py-16 bg-tuf-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We're always looking for passionate individuals to join our mission of making
              high-quality DSA education accessible to everyone.
            </p>
            <Button size="lg">
              View Open Positions
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Team member card component
const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full aspect-square object-cover" 
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
        <p className="text-tuf-700 mb-4">{member.role}</p>
        <p className="text-gray-600 mb-6">{member.bio}</p>
        <div className="flex space-x-3">
          <a href={member.social.linkedin} className="text-gray-500 hover:text-tuf-700 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={member.social.twitter} className="text-gray-500 hover:text-tuf-700 transition-colors">
            <Twitter size={20} />
          </a>
          <a href={member.social.github} className="text-gray-500 hover:text-tuf-700 transition-colors">
            <Github size={20} />
          </a>
          <a href={`mailto:${member.name.split(' ')[0].toLowerCase()}@tufplus.com`} className="text-gray-500 hover:text-tuf-700 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
