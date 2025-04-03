
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
            <BreadcrumbLink>Privacy Policy</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-500">Last updated: {lastUpdated}</p>
          </div>
          
          <div className="prose prose-blue max-w-none">
            <p>
              At TUF+, we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you 
              visit our website or use our platform.
            </p>
            
            <h2>1. Information We Collect</h2>
            <p>
              We may collect the following types of information:
            </p>
            <ul>
              <li>
                <strong>Personal Information:</strong> When you create an account, subscribe to our service, 
                or participate in our community, we collect information such as your name, email address, 
                and payment information.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect information about how you interact with our platform, 
                such as the courses you view, problems you solve, time spent on various features, and your 
                preferences.
              </li>
              <li>
                <strong>Technical Data:</strong> This includes your IP address, browser type, device information, 
                and operating system.
              </li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your subscription and payments</li>
              <li>Personalize your learning experience</li>
              <li>Track your progress and provide recommendations</li>
              <li>Communicate with you about new features, updates, and promotions</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Analyze usage patterns to improve our platform</li>
            </ul>
            
            <h2>3. How We Share Your Information</h2>
            <p>
              We do not sell, rent, or trade your personal information with third parties. 
              We may share your information in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We work with third-party service providers to help us 
                operate our business and platform. These providers have access to your information only to 
                perform tasks on our behalf.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required by law or 
                if we believe that such action is necessary to comply with legal obligations or protect our rights.
              </li>
              <li>
                <strong>Business Transfers:</strong> If TUF+ is involved in a merger, acquisition, or sale of 
                assets, your information may be transferred as part of that transaction.
              </li>
            </ul>
            
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized 
              access, alteration, disclosure, or destruction. These measures include encryption, secure servers, 
              and regular security assessments. However, no method of transmission over the Internet or electronic 
              storage is 100% secure, so we cannot guarantee absolute security.
            </p>
            
            <h2>5. Your Choices</h2>
            <p>
              You have certain rights regarding your personal information:
            </p>
            <ul>
              <li>
                <strong>Account Information:</strong> You can review and update your account information at any time 
                by logging into your account settings.
              </li>
              <li>
                <strong>Communications:</strong> You can opt out of receiving promotional emails by following the 
                unsubscribe instructions in the emails or by contacting us directly.
              </li>
              <li>
                <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can set your 
                browser to refuse all or some browser cookies or to alert you when cookies are being sent.
              </li>
            </ul>
            
            <h2>6. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If we become aware that we have collected personal information from 
              a child under 13, we will take steps to delete that information.
            </p>
            
            <h2>7. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy 
              periodically for any changes.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@tufplus.com">privacy@tufplus.com</a>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
