import React from "react";
import Avatar1 from "../../assets/images/avatar1.jpg";
import Avatar2 from "../../assets/images/avatar2.jpg";
import Avatar3 from "../../assets/images/avatar3.jpg";
import Avatar4 from "../../assets/images/avatar4.jpg";
import Avatar5 from "../../assets/images/avatar5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function Testimonials() {
    const data = [
        {
            avatar: Avatar5,
            name: "Yvonne Eve",
            review: "I was always nervous about trimming my cats nails, as they can be quite the monsters during the process. But Paws and Claws nail clipping service were so gentle and understanding with her, and made the whole process a breeze! My cats were relaxed and didn't seem to mind at all. I was also impressed with how precise and efficient Dana was – she trimmed my cat's nails perfectly, and even filed them down to prevent them from scratching my furniture. Overall, I had a great experience at this nail clipping service and will definitely be returning in the future."
        },
        {
            avatar: Avatar2,
            name: "Vanessa Pratnicki",
            review: "I absolutely hate clipping my cats nails! Evrytime I attempt to clip their nails they turn into demon cats - even my sweet baby Charles! Dana has been clipping my cats nails for years and I couldn't be happier. She is very professional and my cats LOVE her. I highly recommend her."
        },
        {
            avatar: Avatar4,
            name: "Matti Jean",
            review: "I recently used Paws and Claws for a mobile dog nail clipping service and was extremely impressed with the results. The groomer was prompt, professional, and very friendly. My dog can be anxious around new people, but the groomer was able to put her at ease and make the nail clipping process stress-free. The groomer was also very thorough and did a fantastic job with the clipping. I will definitely be using Paws and Claws for all of my dog's grooming needs in the future."
        },
        { 
            avatar: Avatar1, 
            name: "The Leskos", 
            review: "Dana is the best! We will never get Winnie's nail clipped by anyone else. So convient and great rates. Dana is very professional and Winnie loves her. No more having to take Winnie to the groomer just to get her nails clipped. I highly recommend Paws and Claws." 
        },
        {
            avatar: Avatar3,
            name: "Renae Greensfelder",
            review: "I recently discovered Paws and Claws, a mobile dog nail clipping service, and I am absolutely thrilled with the convenience and quality of their service. The groomer was punctual, professional, and so gentle with my nervous pup. She took the time to explain the process and answered all of my questions. My dog's nails were trimmed perfectly and the whole experience was stress-free for both of us. I can't recommend Paws and Claws enough – it's such a game-changer to be able to have a groomer come to my home and take care of everything. Thank you Paws and Claws!"
        }
    ];
    return (
        <section>
            <h5>Reviews from clients</h5>
            <h2>Testimonials</h2>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper container testimonials__container">
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default Testimonials;