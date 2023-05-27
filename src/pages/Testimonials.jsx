import React from "react";
import TestimonyCard from "../components/TestimonyCard";

function Testimonials() {
  const testimonies = [
    {
      name: "Rico",
      occupation: "Fullstack Software Engineer",
      relation: "Co-Worker",
      comment: `Joshua is one of the most hardworking and smart people I have met at
  work. His coding skills are impeccable and he is always up, learning
  something new to improve his skills even more. Working with him has
  been nothing but a great pleasure and he always does more than what is
  necessary—often going out of his way to do something *just* right.
  Lastly, Josh is a great person: immensely friendly, with a great
  attitude towards, always honest and down to earth. He's the sort of no
  bullshit kind of guy with a bag of interesting stories. Somebody you
  can be glad to have on your team.`,
      date: "May 23, 2023",
    },
    {
      name: "Mathieu",
      occupation: "Fullstack Javascript Web Developer",
      relation: "Co-Worker",
      comment: `Josh is the type of person who shows up early and stays late, he puts all of his effort into whatever project he is working on. He is kind, funny and honest and it's with these characteristics in mind that I would happily recommend him for any team that is considering him. They would be lucky to have him because I would like to see him stay in mine.`,
      date: "May 26, 2023",
    },
    {
      name: "Daniel ",
      occupation: "Software Engineer",
      relation: "Co-Worker",
      comment: `I had the pleasure of working with Joshua during our time together in Ironhack’s web development bootcamp, and I can confidently say that he is one of the most talented and dedicated individuals I have had the chance to work with.

      Joshua is smart and a quick learner, always eager to take on new challenges and push himself to new heights. He has a natural talent for problem-solving and is able to think outside the box to come up with creative solutions to complex issues. His technical skills are incredible.
      
      In addition to his technical prowess, Joshua is also a joy to work with. He has a great sense of humor and a positive attitude that makes him a pleasure to be around. He is proactive and always willing to lend a helping hand to his colleagues, making him an invaluable member of any team.
      
      Overall, I cannot recommend Joshua highly enough. He is a talented, dedicated, and all-around fantastic individual.`,
      date: "May 27, 2023",
    },
  ];
  return (
    <div className="testimonies-page">
      <div className="projects-header">
        <article className="dark">Testimonies:</article>
      </div>
      <TestimonyCard testimony={testimonies[0]} />
      <TestimonyCard testimony={testimonies[1]} />
      <TestimonyCard testimony={testimonies[2]} />
    </div>
  );
}

export default Testimonials;
