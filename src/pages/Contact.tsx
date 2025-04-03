
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agree: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (checked) => {
    setFormState(prev => ({ ...prev, agree: checked }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent! We'll get back to you soon.");
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        agree: false
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 bg-tuf-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or feedback? Our team is here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </section>
        
        {/* Contact form section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formState.name} 
                        onChange={handleChange} 
                        placeholder="Enter your name" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formState.email} 
                        onChange={handleChange} 
                        placeholder="Enter your email" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formState.subject} 
                      onChange={handleChange} 
                      placeholder="What's this about?" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formState.message} 
                      onChange={handleChange} 
                      placeholder="Write your message here..." 
                      rows={5} 
                      required
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="agree" 
                      checked={formState.agree} 
                      onCheckedChange={handleCheckboxChange} 
                      required
                    />
                    <label 
                      htmlFor="agree" 
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      I agree to the <Link to="/privacy">Privacy Policy</Link> and consent to TUF+ contacting me regarding my inquiry.
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex">
                        <div className="bg-tuf-50 text-tuf-700 p-3 rounded-full mr-4">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Email</h3>
                          <p className="text-gray-600">support@tufplus.com</p>
                          <p className="text-gray-600">info@tufplus.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex">
                        <div className="bg-tuf-50 text-tuf-700 p-3 rounded-full mr-4">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Phone</h3>
                          <p className="text-gray-600">+91 987 654 3210</p>
                          <p className="text-gray-600">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex">
                        <div className="bg-tuf-50 text-tuf-700 p-3 rounded-full mr-4">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Office</h3>
                          <p className="text-gray-600">
                            123 Tech Park, Innovation Avenue<br />
                            Bangalore, Karnataka 560001<br />
                            India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex">
                        <div className="bg-tuf-50 text-tuf-700 p-3 rounded-full mr-4">
                          <MessageSquare className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Live Chat</h3>
                          <p className="text-gray-600">
                            Available 24/7 on our platform<br />
                            for subscribed members
                          </p>
                          <Button variant="outline" className="mt-2">
                            Start Chat
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "How can I get a refund?",
                  answer: "Refund requests must be submitted within 7 days of your subscription purchase. Please contact our support team with your order details for assistance."
                },
                {
                  question: "Do you offer discounts for students?",
                  answer: "Yes, we offer a 20% discount for verified students. You'll need to provide a valid student ID or use your educational institution email to verify your student status."
                },
                {
                  question: "How do I schedule a mentorship session?",
                  answer: "Mentorship sessions can be scheduled from your dashboard. Go to the Mentorship tab, choose your preferred mentor, and select an available time slot that works for you."
                },
                {
                  question: "Can I download course videos for offline viewing?",
                  answer: "Yes, premium subscribers can download videos for offline viewing through our mobile app. This feature is not available on the web version."
                },
                {
                  question: "How do I report a technical issue?",
                  answer: "For technical issues, please use the 'Report a Bug' option in your account settings or email our support team with details about the issue you're experiencing."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

import { Link } from "react-router-dom";

export default Contact;
