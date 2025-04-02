
import { Code, Users, Video, BookOpen, CheckCircle, CircleSlashed, Clock, BarChart } from "lucide-react";

export const FeatureSection = () => {
  const features = [
    {
      icon: <Video className="h-8 w-8 text-tuf-600" />,
      title: "HD Video Courses",
      description:
        "Learn at your own pace with our library of professionally produced video courses covering essential DSA topics.",
    },
    {
      icon: <Code className="h-8 w-8 text-tuf-600" />,
      title: "Interactive Problem Solving",
      description:
        "Practice with our coding environment supporting multiple languages and get instant feedback on your solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-tuf-600" />,
      title: "Expert Mentorship",
      description:
        "Schedule 1-on-1 sessions with experienced mentors who will provide personalized guidance and feedback.",
    },
    {
      icon: <BarChart className="h-8 w-8 text-tuf-600" />,
      title: "Progress Tracking",
      description:
        "Track your progress with detailed analytics on completed courses, solved problems, and strengths/weaknesses.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-tuf-600" />,
      title: "Comprehensive Curriculum",
      description:
        "Follow a structured learning path covering arrays, linked lists, trees, graphs, dynamic programming, and more.",
    },
    {
      icon: <Clock className="h-8 w-8 text-tuf-600" />,
      title: "Mock Interviews",
      description:
        "Prepare for the real thing with timed mock interviews and detailed performance evaluations.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            A Complete DSA Learning Experience
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to master Data Structures and Algorithms and ace your coding interviews.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg card-hover border border-gray-100">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Pricing comparison */}
        <div className="mt-24">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">
            Why Choose TUF+?
          </h2>
          
          <div className="relative overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-sm text-gray-800 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    TUF+
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Other Platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Single Subscription Fee
                  </th>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CircleSlashed className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Unlimited Access to All Courses
                  </th>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CircleSlashed className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    1-on-1 Mentorship Included
                  </th>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CircleSlashed className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Community Support
                  </th>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Personalized Learning Path
                  </th>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CircleSlashed className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
