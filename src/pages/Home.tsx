import { Link } from "react-router-dom";
import { FormSchedule } from "../components/FormSchedule";
import { Innovators } from "../components/Innovators";

export const Home = () => {
  return (
    <>
      <main className="py-12 ">
        <section className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12">
          <img
            src="/home/desktop/illustration-phone-mockup.svg"
            alt=""
            className="w-48"
          />
          <div className="flex flex-col lg:items-baseline ">
            <h1 className="font-bold font-serif  lg:w-[36%] lg:text-left text-4xl text-center">
              Start Building with our APIs for Absolutely Free.
            </h1>
            <FormSchedule className="justify-start bg-red-400 " />
            <p className="text-center mt-5 mb-12 text-[#8a939b] text-lg">
              Have any questions?
              <Link to={"/contact"} className="pl-2">
                <strong className="underline">Contact Us</strong>
              </Link>
            </p>
          </div>
        </section>
        <section className="bg-[#1b262f] lg:flex flex-row-reverse  p-12 h-[40vh] pb-8">
          <Innovators className="float-right lg:gap-8 lg:align-baseline lg:content-center" />
          <div className="text-center lg:text-left  lg:pt-12 lg:pl-12 w-full text-gray-200 flex flex-col gap-4">
            <div className="flex flex-col gap-4 ">
              <h2 className="font-bold text-4xl font-serif">
                Who we work with
              </h2>
              <p className="leading-7 lg:w-5/6">
                Today, millions of people around the world have succesfully
                connected their accounts to apps they love using our API. We
                provide developers with the tools they need to create easy and
                accesible experinces for their users.
              </p>
            </div>
            <span className="pt-8">
              <Link
                to={"/about"}
                className="border-2 border-white py-3 px-8 rounded-full "
              >
                About us
              </Link>
            </span>
          </div>
        </section>

        <section className="flex flex-col  text-center p-5">
          <div className="lg:flex  gap-24 lg:p-12 lg:pl-20 lg:justify-center items-center ">
            <img
              src="/home/desktop/illustration-easy-to-implement2.svg"
              alt=""
              className="w-full lg:w-1/2"
            />
            <div className="flex flex-col gap-4 pb-20 mt-20 lg:text-left  ">
              <h2 className="font-bold text-3xl font-serif">
                Easy to implement
              </h2>
              <p className="lg:w-3/5">
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <div className="lg:flex flex-row-reverse items-center">
              <img
                src="/home/desktop/illustration-simple-ui4.svg"
                alt=""
                className="md:w-1/2 mb-10"
              />
              <div className="flex flex-col gap-4 mb-8 lg:text-left">
                <h2 className="font-serif font-bold text-3xl">
                  Simple UI & UX
                </h2>
                <p className="text-[#6b7883] lg:w-5/6">
                  Our pre-built form is easy to integrate in your app or
                  website’s checkout flow and designed to optimize conversion.
                </p>
              </div>
            </div>
            <ul className="flex flex-col md:flex-row md:gap-3  gap-12">
              <li className="flex flex-col items-center justify-center gap-6">
                <img src="/home/desktop/icon-personal-finances.svg" alt="" />
                <div>
                  <h3 className="font-bold font-serif text-xl pb-4 text-[#24374b]">
                    Personal Finances
                  </h3>
                  <p className="text-[#6b7883]">
                    Consolidate financial data from multiple sources and
                    categorize transactions up to 2 years of history. Analyze
                    reports to reconcile activities in your account.
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center  gap-6">
                <img src="/home/desktop/icon-banking-and-coverage.svg" alt="" />
                <div>
                  <h3 className="font-bold text-xl pb-4 font-serif text-[#24374b]">
                    Banking & Coverage
                  </h3>
                  <p className="text-[#6b7883]">
                    With our platform, you can speed up account onboarding and
                    support ongoing payments for checking, savings, credit card,
                    and brokerage accounts.
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center  gap-6">
                <img src="/home/desktop/icon-consumer-payments.svg" alt="" />
                <div>
                  <h3 className="font-bold text-xl pb-4 font-serif text-[#24374b]">
                    Consumer Payments
                  </h3>
                  <p className="text-[#6b7883]">
                    It’s easier to set up secure bank payments with us through a
                    flow designed with the user experience in mind. Customers
                    could instantly authenticate their account.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-20 lg:flex  justify-around items-center">
            <h2 className="font-bold text-4xl font-serif text-[#37536b]">
              Ready to start?
            </h2>
            <FormSchedule className="lg:w-3/4" />
          </div>
        </section>
      </main>
    </>
  );
};
