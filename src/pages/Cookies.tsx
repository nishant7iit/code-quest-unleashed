
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Cookies = () => {
  const lastUpdated = "April 1, 2025";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink className="flex items-center">
              <Link to="/" className="flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink>Cookie Policy</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
            <p className="text-gray-500">Last updated: {lastUpdated}</p>
          </div>
          
          <div className="prose prose-blue max-w-none">
            <p>
              This Cookie Policy explains how TUF+ ("we", "us", or "our") uses cookies and similar technologies 
              to recognize you when you visit our website. It explains what these technologies are and why we use 
              them, as well as your rights to control our use of them.
            </p>
            
            <h2>What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
              Cookies are widely used by website owners to make their websites work, or to work more efficiently, 
              as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, TUF+) are called "first-party cookies". 
              Cookies set by parties other than the website owner are called "third-party cookies". 
              Third-party cookies enable third-party features or functionality to be provided on or through the 
              website (e.g., advertising, interactive content, and analytics). The parties that set these 
              third-party cookies can recognize your computer both when it visits the website in question and 
              also when it visits certain other websites.
            </p>
            
            <h2>Why do we use cookies?</h2>
            <p>
              We use first and third-party cookies for several reasons. Some cookies are required for technical 
              reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" 
              cookies. Other cookies also enable us to track and target the interests of our users to enhance 
              the experience on our online properties. Third parties serve cookies through our website for advertising, 
              analytics, and other purposes.
            </p>
            
            <h2>Types of cookies we use</h2>
            <p>
              The specific types of first and third-party cookies served through our website and the purposes 
              they perform are described below:
            </p>
            <h3>Essential cookies</h3>
            <p>
              These cookies are strictly necessary to provide you with services available through our website and 
              to use some of its features, such as access to secure areas. Because these cookies are strictly 
              necessary to deliver the website, you cannot refuse them without impacting how our website functions.
            </p>
            
            <h3>Performance and functionality cookies</h3>
            <p>
              These cookies are used to enhance the performance and functionality of our website but are non-essential 
              to their use. However, without these cookies, certain functionality may become unavailable.
            </p>
            
            <h3>Analytics and customization cookies</h3>
            <p>
              These cookies collect information that is used either in aggregate form to help us understand how our 
              website is being used or how effective our marketing campaigns are, or to help us customize our website 
              for you in order to enhance your experience.
            </p>
            
            <h3>Advertising cookies</h3>
            <p>
              These cookies are used to make advertising messages more relevant to you. They perform functions like 
              preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in 
              some cases selecting advertisements that are based on your interests.
            </p>
            
            <h2>How can you control cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can set or amend your web browser 
              controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website 
              though your access to some functionality and areas of our website may be restricted.
            </p>
            
            <h2>How often will we update this Cookie Policy?</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the 
              cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this 
              Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            
            <h2>Contact us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at 
              <a href="mailto:privacy@tufplus.com"> privacy@tufplus.com</a>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cookies;
