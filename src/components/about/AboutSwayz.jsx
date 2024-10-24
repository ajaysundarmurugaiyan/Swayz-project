import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faChartLine, faBullseye, faRecycle } from '@fortawesome/free-solid-svg-icons';

const AboutSways = () => {
  return (
    <div className="bg-[#ffe7c8] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-2xl font-bold text-[#241f18] md:text-4xl">
            About our Swayz Group
          </h2>
          <p className="text-[#241f18] mt-4">
            Your security services for your peace of mind
          </p>
          <p className="text-[#241f18] mt-2">
            We offer a wide range of services to meet the diverse needs of our clients. 
            From comprehensive security solutions to expert analysis.
          </p>
          <p className="text-[#241f18] mt-2">
            Our tailored strategies ensure your safety and security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-300">
          <div className="group bg-[#241f18] p-6 rounded-xl transition hover:shadow-2xl">
            <div className="space-y-4 text-center">
              <FontAwesomeIcon icon={faShieldAlt} className="h-12 w-12 mx-auto text-white" />
              <h5 className="text-xl font-semibold text-white">
                Comprehensive Security Solutions
              </h5>
              <p>
                Our services encompass a wide range of security solutions tailored 
                to meet your unique needs and ensure peace of mind.
              </p>
            </div>
          </div>

          <div className="group bg-[#241f18] p-6 rounded-xl transition hover:shadow-2xl">
            <div className="space-y-4 text-center">
              <FontAwesomeIcon icon={faChartLine} className="h-12 w-12 mx-auto text-white" />
              <h5 className="text-xl font-semibold text-white">
                Expert Analysis
              </h5>
              <p>
                Our team of experts provides thorough analysis and assessments 
                to identify and mitigate potential risks effectively.
              </p>
            </div>
          </div>

          <div className="group bg-[#241f18] p-6 rounded-xl transition hover:shadow-2xl">
            <div className="space-y-4 text-center">
              <FontAwesomeIcon icon={faBullseye} className="h-12 w-12 mx-auto text-white" />
              <h5 className="text-xl font-semibold text-white">
                Tailored Strategies
              </h5>
              <p>
                We develop customized security strategies that align with your 
                specific needs and objectives, ensuring optimal protection.
              </p>
            </div>
          </div>

          <div className="group bg-[#241f18] p-6 rounded-xl transition hover:shadow-2xl">
            <div className="space-y-4 text-center">
              <FontAwesomeIcon icon={faRecycle} className="h-12 w-12 mx-auto text-white" />
              <h5 className="text-xl font-semibold text-white">
                Eco-Friendly Practices
              </h5>
              <p>
                We prioritize eco-friendly practices in our operations, ensuring 
                that our security solutions respect the environment while protecting you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSways;