import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/cedric-havugimana-92119b233/',
      name: 'Cedric Havugimana',
      role: 'Hub Coordinator',
      skill: 'Skill : Hubs Operation and SoftWare Engeering',
      test: `I had the pleasure of supervising Purity Kihiu at the ALX Kigali Hub, where she served as a Hub Coordinator and Software Outreach Specialist. Purity was dedicated to providing students with a humble, safe space, significantly enhancing their learning environment.
      As a Hub Coordinator, she excelled in organizing activities and events. In her Software Outreach role, she connected students with valuable resources, broadening their tech industry insights. Purity's strong communication skills, proactive problem-solving, and ability to collaborate effectively were key to our success.`
    },

    {
      id: 2,
      link: 'https://www.linkedin.com/in/emmanuel-obolo/',
      name: 'Emmanuel obolo',
      role: 'Junior Front-end Developer',
      skill: 'Skill : React.js | Tailwind.css',
      test: "I have been working with Purity Kihiu at Africa Quantitative Science. Purity has demonstrated exceptional skill in design, significantly contributing to our projects' success. Her proficiency in design has enhanced the visual appeal of our deliverables.Our collaboration has been marked by her strong communication skills and proactive problem-solving abilities. She has been an excellent collaborator, working seamlessly with the team to integrate her design acumen with our React.js and Tailwind CSS projects. Purity's ability to adapt and bring creative solutions to the table has been invaluable."
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/eljones-odongo/',
      name: 'Eljones Odongo',
      role: 'Zoho Developer',
      skill: 'Skill : Zoho applications| Design',
      test: "I have been working with Purity Kihiu at Redian Software, where she has been involved in Zoho application development and design. Purity's expertise in Zoho applications has been invaluable, allowing us to streamline operations and enhance our workflow. Her design skills have brought a creative and professional touch to our projects, making them more engaging and visually appealing.,  Purity's commitment to utilizing the best technology, combined with her creativity, has resulted in functional and user-friendly solutions that meet our clients' unique needs. Her strong communication skills, proactive problem-solving, and ability to collaborate effectively with the team have been key to our success."
    },


  ];
  return (
    <section id="testmonials">
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className='client__name'>{test.name}</h5>
            <h5 className='client__name'>{test.role}</h5>

            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials