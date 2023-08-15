import { FormSchedule } from "../components/FormSchedule";

export const About = () => {
  return (
    <main className="text-center  text-[#6c8294]">
      <section className="">
        <h1 className="lg:text-left lg:w-[42rem] my-20 lg:mx-8 lg:ml-[17.7rem] text-[#36536b] text-5xl text-center font-bold font-serif">
          We empower innovators by delivering access to the financial system
        </h1>
        <div className="lg:flex  mx-8 justify-center items-center gap-[6.9rem] lg:text-left">
          <h3 className="text-2xl font-bold font-serif py-5 text-[#36536b]  ">
            Our Vision
          </h3>

          <p className="lg:w-3/5">
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </div>
        <div className="lg:flex my-12 mx-8 justify-center items-center gap-20 lg:text-left ">
          <h3 className="text-2xl font-bold font-serif py-5 text-[#36536b] ">
            Our Business
          </h3>
          <p className="lg:w-3/5">
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </div>
        <img
          src="/about/mobile/image-team-members.jpg"
          alt=""
          className="w-full sm:hidden"
        />
        <img
          src="/about/tablet/image-team-members.jpg"
          alt=""
          className="w-full hidden sm:flex md:hidden"
        />
        <img
          src="/about/desktop/image-team-members.jpg"
          alt=""
          className="w-full hidden  md:flex "
        />
      </section>
      <section className="flex lg:my-12 lg:text-left border-y mx-4 flex-col lg:bordr-y-0 lg:flex-row items-center  justify-evenly gap-">
        <section className="flex flex-col gap-4 lg:gap-0 borde-y-2">
          <h4 className="text-lg">Team Members</h4>
          <p className="font-bold  text-5xl text-[#ba4270]">300+</p>
        </section>
        <section>
          <h4 className="text-lg">Offices in the US</h4>
          <p className="font-bold  text-5xl text-[#ba4270]">3</p>
        </section>
        <section className="mb-8 lg:mb-0">
          <h4 className="text-lg">Transactions analyzed</h4>
          <p className="font-bold  text-5xl text-[#ba4270]">100M+</p>
        </section>
      </section>

      <section className="lg:flex  lg:gap-20  justify-center  lg:text-left">
        <h3 className="text-2xl mb-5 font-bold font-serif text-[#36536b]">
          The Culture
        </h3>
        <p className="lg:w-3/5">
          We strongly believe there's always an opportunity to learn from each
          other outside of day-to-day work, whether it's company-wide offsites,
          internal hackathons, or co-worker meetups. We always value cross-team
          collaboration and diversity of thought, no matter the job title
        </p>
      </section>

      <section className="my-10 lg:flex lg:gap-[5.5rem] justify-center lg:text-left ">
        <h3 className="text-2xl mb-4 font-bold font-serif text-[#36536b]  ">
          The People
        </h3>
        <p className="lg:w-3/5">
          We're all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </section>
      <div className="my-4 lg:flex items-center justify-around">
        <h3 className="text-3xl mb-5 font-bold font-serif text-[#36536b] ">
          Ready to start?
        </h3>
        <FormSchedule />
      </div>
    </main>
  );
};
