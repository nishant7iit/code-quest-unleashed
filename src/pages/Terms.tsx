
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  // This could be dynamic based on route
  const pageTitle = "Terms of Service";
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
            <BreadcrumbLink>{pageTitle}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">{pageTitle}</h1>
            <p className="text-gray-500">Last updated: {lastUpdated}</p>
          </div>
          
          <div className="prose prose-blue max-w-none">
            <p>
              Welcome to TUF+. Please read these terms of service ("Terms") carefully as they contain important 
              information regarding your legal rights, remedies, and obligations. By accessing or using the TUF+ 
              platform, you agree to be bound by these Terms.
            </p>
            
            <h2>1. Services Description</h2>
            <p>
              TUF+ is an online educational platform that provides courses, practice problems, mentorship, and 
              community features related to Data Structures and Algorithms (DSA) and coding interview preparation. 
              Our platform offers various subscription plans that provide access to different features and content.
            </p>
            
            <h2>2. Account Registration</h2>
            <p>
              To access the full features of TUF+, you must create an account. You agree to provide accurate, current, 
              and complete information during the registration process and to update such information to keep it accurate, 
              current, and complete. You are responsible for safeguarding your password and for all activities that occur 
              under your account.
            </p>
            
            <h2>3. Subscription and Payments</h2>
            <p>
              TUF+ offers subscription-based access to its premium content and features. By subscribing to TUF+, 
              you agree to pay the fees indicated for your selected subscription plan. Subscription fees are billed 
              in advance and are non-refundable. We may change the fees for our services at any time, but we'll provide 
              you with advance notice before any price changes affect you.
            </p>
            
            <h2>4. Content and Intellectual Property</h2>
            <p>
              All content provided on TUF+, including but not limited to videos, text, graphics, logos, images, 
              course materials, and code examples, is owned by TUF+ or its licensors and is protected by copyright, 
              trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create 
              derivative works of, publicly display, or commercially exploit any content from our platform without 
              prior written consent.
            </p>
            
            <h2>5. User Conduct</h2>
            <p>
              You agree not to use TUF+ for any purpose that is prohibited by these Terms. You are responsible for 
              all of your activity in connection with TUF+. You shall not, and shall not permit any third party to:
            </p>
            <ul>
              <li>Use the platform to violate any law or regulation</li>
              <li>Share your account or password with others</li>
              <li>Copy, distribute, or disclose any part of the platform</li>
              <li>Attempt to circumvent any security features of the platform</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Use our platform for any unauthorized commercial purpose</li>
            </ul>
            
            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your account and access to TUF+ immediately, without prior notice or liability, 
              for any reason, including without limitation if you breach these Terms. Upon termination, your right to use 
              TUF+ will immediately cease.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, in no event shall TUF+, its directors, employees, partners, 
              agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or 
              punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible 
              losses, resulting from your access to or use of or inability to access or use the platform.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make changes, we will provide notice of 
              such changes, such as by sending an email, providing a notice through our platform, or updating the date 
              at the top of these Terms. Your continued use of TUF+ after any such changes constitutes your acceptance 
              of the new Terms.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:support@tufplus.com">support@tufplus.com</a>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
