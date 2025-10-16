
import { useReveal } from "@/hooks/use-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const quotes = [
  { name: "Aarav, Class 1", text: "I love how easy the lessons are! I can read faster now." },
  { name: "Parent of Diya, Class 2", text: "Ms. Vatyani makes learning fun — Diya looks forward to every class." },
  { name: "Rohan, Class 3", text: "Maths used to be hard, but now I solve sums so quickly!" },
  { name: "Parent of Ananya, Class 4", text: "The personal attention given to each student is wonderful." },
  { name: "Ishaan, Class 5", text: "Science experiments are so interesting — I love the classes!" },
  { name: "Parent of Aarohi, Class 1", text: "My daughter started enjoying reading and writing within weeks." },
  { name: "Kavya, Class 2", text: "The worksheets are fun and help me learn better." },
  { name: "Parent of Vihaan, Class 3", text: "He has become more confident in speaking and solving problems." },
  { name: "Anaya, Class 4", text: "I like how teacher explains every small thing clearly." },
  { name: "Parent of Reyansh, Class 5", text: "His marks improved by 20% in just two months!" },
  { name: "Advika, Class 1", text: "I love drawing and learning new words every day." },
  { name: "Parent of Aarush, Class 2", text: "The progress reports and regular feedback are very helpful." },
  { name: "Tanvi, Class 3", text: "I understand grammar and spelling better now." },
  { name: "Parent of Yash, Class 4", text: "Yash’s confidence and curiosity have grown a lot." },
  { name: "Dhruv, Class 5", text: "Our teacher makes even tough topics so simple to understand!" },
  { name: "Parent of Myra, Class 1", text: "She has started reading storybooks on her own now." },
  { name: "Ayaan, Class 2", text: "I like how we play games and learn together!" },
  { name: "Parent of Aaradhya, Class 3", text: "The focus on concept clarity makes a big difference." },
  { name: "Mihika, Class 4", text: "I like sharing answers and learning with friends." },
  { name: "Parent of Arjun, Class 5", text: "The improvement in his maths and science is amazing." },
  { name: "Viha, Class 1", text: "My teacher helps me whenever I get stuck." },
  { name: "Parent of Rudra, Class 2", text: "Rudra has become more disciplined and confident." },
  { name: "Saanvi, Class 3", text: "English grammar is so easy now!" },
  { name: "Parent of Kabir, Class 4", text: "Kabir’s marks and focus in studies have both improved." },
  { name: "Aryan, Class 5", text: "I love how the teacher makes maths fun with examples!" },
  { name: "Parent of Meera, Class 1", text: "She loves her classes and never wants to miss one!" },
  { name: "Riya, Class 2", text: "I like when we get stars for correct answers!" },
  { name: "Parent of Krish, Class 3", text: "Krish has become more independent in his homework." },
  { name: "Tanishka, Class 4", text: "Learning with pictures and stories makes everything easy." },
  { name: "Parent of Arnav, Class 5", text: "Very happy with his academic growth and enthusiasm." },
];

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="py-20 bg-primary/40">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium text-accent">What Our Students Say</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Testimonials</h2>
        </div>

        <div ref={ref}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
          >
            {quotes.map((q, index) => (
              <SwiperSlide key={index}>
                <figure className="rounded-2xl border bg-white p-6 card-hover h-full flex flex-col justify-between">
                  <div>
                    <figcaption className="font-medium">{q.name}</figcaption>
                    <blockquote className="mt-3 text-sm text-muted-foreground">
                      “{q.text}”
                    </blockquote>
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}


