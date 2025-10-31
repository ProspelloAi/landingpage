import Tag from "../components/Tag";

const visionPoints = [
  {
    number: "1",
    title: "Our Focus",
    description:
      "We concentrate on strategic clarity, operational excellence, and sustainable growth. Our work is grounded in real business needs, not theoretical models — and always aligned with long-term success.",
  },
  {
    number: "2",
    title: "Our Approach",
    description:
      "We don’t believe in one-size-fits-all. Every engagement is customized to your context — co-created with your team to ensure buy-in, adoption, and results that last.",
  },
  {
    number: "3",
    title: "Our Experience",
    description:
      "Our consultants bring experience from diverse industries and complex environments. We’ve led high-impact projects across growth, transformation, and performance — from startups to global enterprises.",
  },
];

const Vision = () => {
  return (
    <section className="py-24 ">
      <div className="container">
        <div className="flex justify-center">
          <Tag variant="light">Our Vision</Tag>
        </div>

        <h2 className="mt-8 max-w-5xl mx-auto text-center text-5xl md:text-6xl font-light leading-tight text-gray-900">
          To be the trusted partner that <br className="hidden md:block" />
          enables businesses to grow with <br className="hidden md:block" />
          clarity, resilience, and purpose.
        </h2>

        <div className="mt-10 max-w-4xl mx-auto text-center space-y-4 text-gray-600 text-lg leading-relaxed">
          <p>
            We envision a future where organizations of all sizes can navigate
            complexity with confidence. Our mission is to empower leaders with
            the insight, structure, and strategies they need to drive meaningful
            progress — not just in profits, but in performance, people, and
            long-term value.
          </p>
          <p>
            We’re not just building a consulting firm. We’re building a standard
            for how businesses engage, evolve, and lead in a fast-changing
            world.
          </p>
        </div>

        <hr className="max-w-4xl mx-auto mt-16 border-t border-gray-200" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {visionPoints.map((point) => (
            <div
              key={point.number}
              className="relative flex flex-col items-start"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lime-400 text-white flex items-center justify-center text-lg font-semibold">
                  {point.number}
                </div>
                <h3 className="text-xl font-medium text-gray-800">
                  {point.title}
                </h3>
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed pl-13">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
