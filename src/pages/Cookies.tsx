
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
            <BreadcrumbLink as={Link} to="/" className="flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
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
              This Cookie Policy explains how TUF+ uses cookies and similar technologies to recognize you
              when you visit our platform. It explains what these technologies are and why we use them, as well
              as your rights to control our use of them.
            </p>
            
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners to make their websites work, or to work more efficiently,
              as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, TUF+) are called "first-party cookies." Cookies set
              by parties other than the website owner are called "third-party cookies." Third-party cookies enable
              third-party features or functionality to be provided on or through the website (e.g., advertising,
              interactive content, and analytics).
            </p>
            
            <h2>2. Why Do We Use Cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical
              reasons in order for our platform to operate, and we refer to these as "essential" or "strictly necessary"
              cookies. Other cookies enable us to track and target the interests of our users to enhance the experience
              on our platform. Third parties serve cookies through our platform for advertising, analytics, and other purposes.
            </p>
            
            <h2>3. Types of Cookies We Use</h2>
            <p>
              The specific types of first and third-party cookies served through our platform and the purposes they perform
              include:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available
                through our platform and to use some of its features, such as access to secure areas. Without these cookies,
                services you have asked for, like secure login, cannot be provided.
              </li>
              <li>
                <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance and
                functionality of our platform but are non-essential to its use. However, without these cookies, certain
                functionality may become unavailable.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form
                to help us understand how our platform is being used or how effective our marketing campaigns are, or to
                help us customize our platform for you.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies are used to make advertising messages more relevant to you.
                They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly
                displayed, and in some cases selecting advertisements that are based on your interests.
              </li>
            </ul>
            
            <h2>4. How Can You Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by
              using our cookie preferences tool when you first visit our platform, or by following the links provided in our
              communications.
            </p>
            <p>
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies,
              you may still use our platform though your access to some functionality and areas may be restricted. As the means
              by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit
              your browser's help menu for more information.
            </p>
            
            <h2>5. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect, for example, changes to the cookies we use or for
              other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay
              informed about our use of cookies and related technologies.
            </p>
            <p>
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
            
            <h2>6. Contact Us</h2>
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
