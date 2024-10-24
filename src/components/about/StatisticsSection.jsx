import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const StatisticsSection = () => {

    const [isCounting, setIsCounting] = useState(false);
    const statsRef = useRef(null);
    const contentRef = useRef(null) 
    const statistics = [
      { value: 10, label: "Years of Experience" },
      { value: 500, label: "Projects Successfully Completed" },
      { value: 100, label: "Satisfaction Guaranteed" },
      { value: 50, label: "Expert Cleaners On-Call" },
    ];
    useEffect(() => {
        const statsAnimation = gsap.fromTo(
          statsRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
              onEnter: () => startCounting(),
            },
          }
        );
    
        const contentAnimation = gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
    

    
        return () => {
          statsAnimation.kill();
          contentAnimation.kill();
        };
      }, []);
    
      const startCounting = () => {
        if (!isCounting) {
          setIsCounting(true);
          statistics.forEach((stat, index) => {
            const target = statsRef.current.children[index].firstChild;
            let count = 0;
            const increment = Math.ceil(stat.value / 100);
            const duration = 2000;
    
            const countInterval = setInterval(() => {
              count += increment;
              if (count > stat.value) count = stat.value;
              target.innerHTML = count + "+";
    
              if (count === stat.value) {
                clearInterval(countInterval);
              }
            }, duration / (stat.value / increment));
          });
        }
      };
    

  return (
    <div>
              {/* Statistics Section */}
      <div
        className="md:col-span-2 my-10 grid md:grid-cols-4 gap-4"
        ref={statsRef}
      >
        {statistics.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="md:text-[80px] text-[67px] font-extrabold text-customGolden">
              {stat.value}
            </h2>
            <p className="md:text-lg font-semibold text-customGrey text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatisticsSection