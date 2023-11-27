import React from 'react';
import Link from 'next/link';

const faqs = {
  gettingStarted: {
    name: 'Getting Started',
    icon: '/img/icons/getting-started-icon.png',
    description: (
      <>
        This are questions on the general topic on about BALL.{' '}
        <br className="d-none d-lg-block" /> Please go through this section if
        you need your questions answered.
      </>
    ),
    faqs: [
      {
        question: 'What is BALL?',
        answer:
          'BALL is an online platform that helps you plan your income and achieve your home ownership goals. BALL stands for Become A Landlord. BALL guides you through the entire process of home ownership, which is customized specially for you.',
        showOnHomePage: true,
      },
      {
        question: <>What is special about BALL?</>,
        answer:
          'BALL is the only platform that gives you the flexibility to make convenient payments towards owning your home in line with your income. BALL also offers you a myriad of benefits including additional income via our referral program, access to low-interest mortgages, bonus points and rewards, real estate knowledge, community support, security and accountability',
        showOnHomePage: true,
      },
      {
        question: 'Why should I subscribe to the BALL platform?',
        answer:
          'You should subscribe to the BALL platform if you want to own your dream home in a simple and achievable way. You will also enjoy the benefits of being a BALLer, such as quality homes, flexible payment plans, recurring income, investment rewards, and more.',
        showOnHomePage: true,
      },
      {
        question: <>What is the minimum amount to pay?</>,
        answer:
          'You can begin your payments with as low as N200,000.00 with additional monthly payments of N100,000.00 depending on the price of the property',
        showOnHomePage: true,
      },
      {
        question: <>How long does it take for me to own a home?</>,
        answer:
          'The length of your home ownership process depends on your chosen payment plan and the type of home you want to own. You can choose between timeline payment and milestone payment. Timeline payment is a payment plan where you pay an initial amount and then spread the rest of the payment over a period of time. Milestone payment is a payment plan where you pay only when a milestone is reached and completed. A milestone is a key step or progress in making or getting your home. You can pay as the milestones are done and checked.',
        showOnHomePage: true,
      },
      {
        question: <>How does BALL work?</>,
        answer: (
          <>
            BALL works by helping you plan your income and achieve your home
            ownership goals. You can join the BALL platform and choose a payment
            plan that suits your income and budget. You can also access
            low-interest mortgages, bonus points and rewards, real estate
            knowledge, community support, security and accountability. You can
            browse through the properties on the BALL platform and choose the
            one that suits your preferences. You can track your progress and
            transactions on the BALL platform and get guidance from the experts.
            You can also refer your friends and family to BALL and earn extra
            income.
          </>
        ),
        showOnHomePage: false,
      },
      {
        question: <> Do I have to be a millionaire to BALL?</>,
        answer: (
          <>
            No, you do not have to be a millionaire to BALL. You can start with
            as low as N200,000 and increase your contribution as you wish. You
            can also choose a payment plan that works for you and your budget.
            You can pay in easy installments or pay as you go. BALL is designed
            to make owning a home simpler and achievable for everyone.
          </>
        ),
        showOnHomePage: false,
      },
    ],
  },
  payment: {
    name: 'Payment',
    icon: '/img/icons/payment-icon.png',
    description: (
      <>
        These are payment related questions about BALL. Please go through this
        section if you need your questions answered.
      </>
    ),
    faqs: [
      {
        question: 'How can I get a refund on the BALL platform? ',
        answer:
          'You can get a refund on the BALL platform by contacting our customer service team and requesting for a refund. You will need to provide some details and reasons for your refund request. You should also note that there may be some charges or deductions depending on the terms and conditions of your payment plan.',
        showOnHomePage: false,
      },
      {
        question:
          'What are the payment methods available on the BALL platform?',
        answer:
          'You can make your payments on the BALL platform using various methods such as bank transfer, debit card, credit card, USSD, or QR code. You can choose the method that is most convenient for you and follow the instructions on the payment page.',
        showOnHomePage: false,
      },
      {
        question:
          'What are the differences between timeline payment and milestone payment?',
        answer:
          'Timeline payment is a payment plan where you pay an initial amount and then spread the rest of the payment over a period of time. You can choose the duration and frequency of your payments according to your convenience. Milestone payment is a payment plan where you pay only when a milestone is reached and completed. A milestone is a key step or progress in making or getting your home. You can pay as the milestones are done and checked.',
        showOnHomePage: false,
      },
      {
        question: 'How can I choose the payment type that suits me best?',
        answer:
          'You can choose your preferred payment type on the BALL platform by checking the payment plan assigned to the property that you want to own. You can browse through the properties on the BALL platform and see the payment type that each property has. You can also use our payment calculator to compare the different payment options and see how they affect your progress and eligibility for the home ownership process.',
        showOnHomePage: false,
      },
      {
        question:
          'Can I switch between the payment types on the BALL platform? ',
        answer:
          'No, you cannot switch between the payment types on the BALL platform. The payment type is fixed for each property and cannot be changed. You should check the terms and conditions of your payment plan before choosing a property.',
        showOnHomePage: false,
      },
    ],
  },
  security: {
    name: 'Security',
    icon: '/img/icons/security-icon.png',
    description: (
      <>
        These are security related questions about BALL. Please go{' '}
        <br className="d-none d-lg-block" /> through this section if you need
        your questions answered.
      </>
    ),
    faqs: [
      {
        question: <>How secure is my data on the BALL platform?</>,
        answer:
          'Your data is secure on the BALL platform. We use encryption, firewalls, and other security measures to protect your data from unauthorized access, modification, or disclosure. We also comply with the relevant data protection laws and regulations in Nigeria.',
        showOnHomePage: false,
      },
      {
        question: <>How do I reset my password if I forget it?</>,
        answer:
          ' If you forget your password, you can reset it by using the “Forgot Password” link on the login page. You will need to provide your email address and answer the security question that you set up when you created your account. You will then receive a link to create a new password.',
        showOnHomePage: false,
      },
      {
        question: (
          <>
            How do I report a suspicious activity or a security breach on the
            BALL platform?{' '}
          </>
        ),
        answer:
          'If you notice any suspicious activity or a security breach on the BALL platform, you should report it to us immediately by contacting our customer service team. You can also email us at security@ballers.ng or call us at +234 800 123 4567. We will investigate the issue and take appropriate actions to resolve it.',
        showOnHomePage: false,
      },
      {
        question: <>What Happens If I Lose My Password</>,
        answer:
          'You can reset your password by clicking on the reset password link. A link will be sent to your registered mail where you can change your password.',
        showOnHomePage: false,
      },
    ],
  },
  vendor: {
    name: 'Vendor',
    icon: '/img/icons/profile-icon.png',
    description: (
      <>
        These are vendor related questions about BALL. Please go{' '}
        <br className="d-none d-lg-block" /> through this section if you need
        your questions answered.
      </>
    ),
    faqs: [
      {
        question: <>Why should I become a BALL vendor? </>,
        answer: (
          <>
            You should become a BALL vendor if you are a real estate developer,
            builder or agent who wants to showcase your properties and reach
            more customers. You will also enjoy the benefits of being a BALL
            vendor, such as exposure, trust, support, profit, real-time
            analytics, seamless tour scheduling, simplified contract management,
            convenient payments and withdrawal, and enhanced visibility.
          </>
        ),
        showOnHomePage: false,
      },
      {
        question: <>How can I become a BALL vendor?</>,
        answer: (
          <>
            <div>
              <p>
                Becoming a BALL vendor is easy and fast. Just follow these
                simple steps:
              </p>
              <ol>
                <li>
                  <h3>Register</h3>
                  <p>
                    Fill out the vendor registration form{' '}
                    <a href="link-to-registration">here</a> and provide the
                    necessary information and documents to verify your identity
                    and business.
                  </p>
                </li>
                <li>
                  <h3>List</h3>
                  <p>
                    Upload your properties on the BALL platform and provide the
                    relevant details and photos to attract buyers.
                  </p>
                </li>
                <li>
                  <h3>Sell</h3>
                  <p>
                    Receive inquiries and offers from interested buyers and
                    negotiate the best deal for both parties.
                  </p>
                </li>
                <li>
                  <h3>Earn</h3>
                  <p>
                    Get paid your commissions and incentives promptly and
                    securely after the completion of the sale.
                  </p>
                </li>
              </ol>
            </div>
          </>
        ),
        showOnHomePage: false,
      },
      {
        question: (
          <>
            How can I track my progress and transactions on the BALL platform?
          </>
        ),
        answer: (
          <>
            You can track your progress and transactions on the BALL platform by
            logging into your dashboard. You will be able to see your property
            listings, buyer activity, milestones, payments, and more.
          </>
        ),
        showOnHomePage: false,
      },
      {
        question: <>How can I manage property tours on the BALL platform?</>,
        answer: (
          <>
            You can manage property tours on the BALL platform with our
            automated system. You will receive real-time notifications when a
            buyer requests a tour, and you can use a simple calendar to schedule
            the tour. You will also be able to gather valuable feedback from the
            buyers after the tour.
          </>
        ),
        showOnHomePage: false,
      },
      {
        question: (
          <>How can I handle contracts and negotiations on the BALL platform?</>
        ),
        answer: (
          <>
            You can handle contracts and negotiations on the BALL platform with
            our automated contract management. You will be able to receive and
            respond to offers from buyers, and streamline the negotiations with
            our smart tools. You will also be able to ensure smooth and secure
            transactions with our escrow service.
          </>
        ),
        showOnHomePage: false,
      },
      {
        question: (
          <>How can I boost my property listings on the BALL platform? </>
        ),
        answer: (
          <>
            You can boost your property listings on the BALL platform with our
            dynamic interfaces and effective marketing tools. You can use
            high-quality photos, videos, and autogenerated description to
            showcase your properties. You can also use keywords, tags, and
            descriptions to optimize your listings for search engines. You can
            also leverage on our social media and email marketing campaigns to
            reach a wider audience.
          </>
        ),
        showOnHomePage: false,
      },
    ],
  },
};

export default faqs;
