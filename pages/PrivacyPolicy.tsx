import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { APP_CONFIG } from '../config';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="text-sm font-bold uppercase tracking-widest">Back</span>
        </button>

        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-blue-400">Introduction</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                At {APP_CONFIG.COMPANY_NAME} ("we," "us," or "our"), we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-blue-400">Information We Collect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-2xl border border-white/10">
                <h3 className="font-display text-xl font-bold mb-4 text-white">Personal Information</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Name</li>
                  <li>• Email address</li>
                  <li>• Phone number</li>
                  <li>• Postal address</li>
                  <li>• Payment information</li>
                  <li>• Artist/band name</li>
                  <li>• Social media profiles</li>
                </ul>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-white/10">
                <h3 className="font-display text-xl font-bold mb-4 text-white">Usage Information</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Device Information: IP address, browser type, operating system</li>
                  <li>• Access times and dates</li>
                  <li>• Approximate location based on IP address</li>
                  <li>• Analytics Data: Session duration, pages visited, content interactions</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-blue-400">How We Use Your Information</h2>
            <div className="space-y-6">
              <div className="p-6 md:p-8 rounded-2xl border border-white/10">
                <ul className="space-y-4">
                  <li>
                    <p className="text-gray-300">
                      <strong>To distribute your content.</strong> We use your information to distribute your music and video content to partner platforms worldwide.
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-300">
                      <strong>To process payments.</strong> We use your payment information to process transactions for our services.
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-300">
                      <strong>To communicate with you.</strong> We may use your contact information to send you updates, newsletters, and respond to your inquiries.
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-300">
                      <strong>To improve our services.</strong> We analyze usage data to enhance our platform and develop new features.
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-300">
                      <strong>To comply with legal obligations.</strong> We may use your information to comply with applicable laws and regulations.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sharing Information */}
          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-blue-400">Sharing Your Information</h2>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                We may share your information in the following situations:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 md:p-8 rounded-2xl border border-white/10">
                  <h3 className="font-display text-xl font-bold mb-4 text-white">With Service Providers</h3>
                  <p className="text-gray-400 text-sm">
                    We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.
                  </p>
                </div>
                <div className="p-6 md:p-8 rounded-2xl border border-white/10">
                  <h3 className="font-display text-xl font-bold mb-4 text-white">With Partner Platforms</h3>
                  <p className="text-gray-400 text-sm">
                    We share your content and relevant information with music and video distribution platforms to make your content available to listeners and viewers.
                  </p>
                </div>
                <div className="p-6 md:p-8 rounded-2xl border border-white/10">
                  <h3 className="font-display text-xl font-bold mb-4 text-white">For Legal Reasons</h3>
                  <p className="text-gray-400 text-sm">
                    We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                  </p>
                </div>
                <div className="p-6 md:p-8 rounded-2xl border border-white/10">
                  <h3 className="font-display text-xl font-bold mb-4 text-white">Business Transfers</h3>
                  <p className="text-gray-400 text-sm">
                    We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Basis */}
          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-blue-400">Legal Basis for Processing</h2>
            <div className="p-6 md:p-8 rounded-2xl border border-white/10">
              <p className="text-gray-300 leading-relaxed mb-6">
                We may process or share your data that we hold based on the following legal basis:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/5">
                  <p className="text-sm text-gray-300">
                    <strong>Consent:</strong> You have given us explicit permission to use your personal information for a specific purpose.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <p className="text-sm text-gray-300">
                    <strong>Legitimate Interests:</strong> We have a legitimate business interest in processing your personal information to provide our services.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <p className="text-sm text-gray-300">
                    <strong>Performance of Contract:</strong> Processing your personal information is necessary to fulfill our contractual obligations to you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-blue-400">Data Retention</h2>
            <div className="p-6 md:p-8 rounded-2xl border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                We retain information only for as long as necessary to fulfill business purposes. This includes satisfying legal, accounting, or reporting requirements, or to resolve disputes when needed. The retention period depends on the nature of the information and the purposes for which we process it.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-blue-400">Your Privacy Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-2xl border border-white/10">
                <h3 className="font-display text-xl font-bold mb-4 text-white">Access and Correction</h3>
                <p className="text-gray-400 text-sm">
                  You have the right to access and correct your personal information. You can update your account information at any time through your account settings.
                </p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-white/10">
                <h3 className="font-display text-xl font-bold mb-4 text-white">Deletion</h3>
                <p className="text-gray-400 text-sm">
                  You have the right to request deletion of your personal information, subject to certain exceptions required by law.
                </p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-white/10">
                <h3 className="font-display text-xl font-bold mb-4 text-white">Opt-Out</h3>
                <p className="text-gray-400 text-sm">
                  You can opt out of marketing communications at any time by following the unsubscribe link in our emails.
                </p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-white/10">
                <h3 className="font-display text-xl font-bold mb-4 text-white">Data Portability</h3>
                <p className="text-gray-400 text-sm">
                  You have the right to receive your personal information in a structured, machine-readable format.
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Links */}
          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-blue-400">Third-Party Links</h2>
            <div className="p-6 md:p-8 rounded-2xl border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party services before providing your information.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-blue-400">Children's Privacy</h2>
            <div className="p-6 md:p-8 rounded-2xl border border-white/10">
              <p className="text-gray-300 leading-relaxed">
                We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services.
              </p>
            </div>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-blue-400">Changes to This Privacy Policy</h2>
            <div className="p-6 md:p-8 rounded-2xl border border-white/10">
              <p className="text-gray-300 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We recommend that you review this Privacy Policy frequently to be informed of how we are protecting your information.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If we make material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-blue-400">Contact Us</h2>
            <div className="p-6 md:p-8 rounded-2xl border border-white/10">
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have questions or comments about this Privacy Policy, you may email us at {APP_CONFIG.SUPPORT_EMAIL} or by post to:
              </p>
              <p className="text-white font-bold">
                {APP_CONFIG.COMPANY_NAME}<br />
                {APP_CONFIG.ADDRESS}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;