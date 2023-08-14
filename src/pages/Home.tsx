import { Link } from "react-router-dom";
import { ScheduleDemoBtn } from "../components/ScheduleDemoBtn";

export const Home = () => {
  return (
    <>
      <main className="py-12 ">
        <section className="flex flex-col items-center justify-center gap-12">
          <img
            src="/home/desktop/illustration-phone-mockup.svg"
            alt=""
            className="w-48"
          />
          <div className="flex flex-col  ">
            <h1 className="font-bold font-serif text-4xl text-center">
              Start Building with our APIs for Absolutely Free.
            </h1>
            <form className="py-12 flex flex-col px-4 gap-4 ">
              <input
                type="text"
                placeholder="Enter email address"
                className="p-4 shadow-2xl rounded-full"
              />
              <ScheduleDemoBtn />
              <p className="text-center">
                Have any questions?
                <Link to={"/contact"} className="pl-2">
                  <strong className="underline">Contact Us</strong>
                </Link>
              </p>
            </form>
          </div>
        </section>
        <section className="bg-zinc-500 p-4 pb-8">
          <span className="grid  grid-cols-2 w-full gap-8 py-8 px-6 items-center justify-center">
            <img src="/shared/desktop/tesla-white.svg" alt="" />

            <img src="/shared/desktop/microsoft-white.svg" alt="" />

            <img src="/shared/desktop/hewlett-packard-white.svg" alt="" />
            <img src="/shared/desktop/oracle-white.svg" alt="" />
            <img src="/shared/desktop/google-white.svg" alt="" />

            <img src="/shared/desktop/nvidia-white.svg" alt="" />
          </span>
          <div className="text-center w-full text-gray-200 flex flex-col gap-4">
            <h2 className="font-bold text-3xl font-serif"> Who we work with</h2>
            <p className="leading-7">
              Today, millions of people around the world have succesfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accesible experinces for their users.
            </p>

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
          <img
            src="/home/desktop/illustration-easy-to-implement2.svg"
            alt=""
            className="w-full"
          />
          <div className="flex flex-col gap-4 pb-20 mt-20">
            <h2 className="font-bold text-3xl   font-serif">
              Easy to implement
            </h2>
            <p>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <img
              src="/home/desktop/illustration-simple-ui4.svg"
              alt=""
              className="md:w-1/2 mb-10"
            />
            <div className="flex flex-col gap-4 mb-8">
              <h2 className="font-serif font-bold text-3xl">Simple UI & UX</h2>
              <p className="text-[#6b7883]">
                Our pre-built form is easy to integrate in your app or website’s
                checkout flow and designed to optimize conversion.
              </p>
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
          <div className="mt-20 ">
            <h2 className="font-bold text-4xl font-serif text-[#37536b]">
              Ready to start?
            </h2>
            <form className="flex mt-5 gap-4 flex-col  w-full md:flex-row md:items-center md:justify-center">
              <div className="md:relative flex flex-col w-1/2 md:flex-row gap-4 md:gap-0 justify-center items-center">
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="p-4 shadow-2xl font-bold w-5/6 rounded-full "
                />
                <ScheduleDemoBtn className="md:absolute right-0 w-full md:w-auto md:py-4 md:px-12" />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
