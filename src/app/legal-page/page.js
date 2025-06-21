"use client";
import React from "react";
import ClientLayout from "../ClientLayout";
import { RxSlash } from "react-icons/rx";
import Link from "next/link";

const LegalPage = () => {
  return (
    <ClientLayout>
      <div className="px-4 md:max-w-[85rem] mx-auto mb-10 mt-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-gray-900 text-sm mb-4">
          <Link href="/" className="font-normal">Home</Link>
          <RxSlash />
          <span className="text-red-500">Legal Page</span>
        </nav>

        {/* Header */}
        <div className="flex md:justify-center mb-6">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900 uppercase">Legal</h2>
        </div>
        <hr className="mb-6 border-gray-300" />

        {/* Content */}
        <div className="prose max-w-none prose-sm md:prose-base prose-p:text-gray-700 prose-li:text-gray-700">
          <h3 className="text-lg font-semibold mt-8">Legal Disclaimer</h3>
          <p>
            In this Disclaimer, capitalised terms not defined here shall have the meanings assigned in the Rules.
          </p>

          <p>
            The Platform and all related communications are intended solely for individuals eligible to create an account and enter games. These materials are not intended to solicit participation from those who do not meet our eligibility criteria.
          </p>

          <p>
            By using the Platform, creating an account, or entering games, you confirm that you are responsible for ensuring such actions are legal in your current jurisdiction. We are not liable for entries made in jurisdictions where such participation is unlawful.
          </p>

          <p>
            We do not guarantee the accuracy, reliability, or completeness of any content on the Platform or in communications sent on our behalf. Any reliance is solely at your own risk.
          </p>

          <p>
            We and our officers, members, and employees accept no liability for any loss or damage arising from the use of the Platform or reliance on its content.
          </p>

          <p>
            Access and use of the Platform is at your own risk. We do not guarantee uninterrupted service or error-free access. Under no circumstances will we or associated parties be liable for damages arising from use or inability to use the Platform.
          </p>

          <p>
            If any part of this Disclaimer is found unenforceable under law, it does not affect the validity of the remaining provisions.
          </p>

          <p>
            The Platform operates under Indian laws, and any disputes will be handled within its legal framework.
          </p>

          <h3 className="text-lg font-semibold mt-8">Syndication Members</h3>
          <p>
            We disclaim any liability towards Syndicate Members. Only the registered account holder with the winning entry may claim the prize. We are not bound by any agreements between account holders and Syndicate Members.
          </p>

          <h3 className="text-lg font-semibold mt-8">Hyperlinks</h3>
          <p>
            Our Platform may contain hyperlinks to external websites which we do not control. We are not responsible for the content or practices of those websites, and accessing them is at your own risk.
          </p>

          <h3 className="text-lg font-semibold mt-8">Third Party Sales Channels</h3>
          <p>
            We disclaim liability related to third-party sales channels. We are not responsible for how such channels manage data, payments, or customer interactions.
          </p>

          <h3 className="text-lg font-semibold mt-8">Viruses</h3>
          <p>
            While we take precautions, we do not guarantee the Platform is free from viruses or malware. Users are responsible for their own device and data protection.
          </p>

          <h3 className="text-lg font-semibold mt-8">Altering of Forms</h3>
          <p>
            Unauthorized modification or submission of forms on the Platform is prohibited and may result in invalidation.
          </p>

          <h3 className="text-lg font-semibold mt-8">Intellectual Property</h3>
          <p>
            All intellectual property including trademarks and logos used on the Platform belong to or are licensed by us. Reproduction without permission is prohibited.
          </p>

          <h3 className="text-lg font-semibold mt-8">Acknowledgement</h3>
          <p>
            By accessing and using the Platform, you acknowledge that you have read, understood, and agreed to this Legal Disclaimer.
          </p>
        </div>
      </div>
    </ClientLayout>
  );
};

export default LegalPage;
