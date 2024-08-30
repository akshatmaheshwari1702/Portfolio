import React from 'react'
import educationIcon from "../../assets/education-icon.svg";
import certificationIcon from "../../assets/certification-icon.svg";

const Education = () => {
  return (
    <div className="bg-primary">
    <section className="container px-4 mx-auto ">
        {/* Education and certifications div */}
        <div className="py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-cairo font-bold text-4xl text-center text-white">
              Education and Certifications
            </h1>
            <hr className="border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0" />
          </div>
          <p className="text-accent">
            My education and certifications provide a strong foundation in web
            development. From basic to advanced skills, these achievements
            showcase my dedication to learning and expertise in creating
            effective web applications.
          </p>
          <div className="flex justify-center md:gap-20 flex-col md:flex-row mt-10">
            <div className="mb-5">
              <h2 className="font-cairo text-2xl font-semibold border-b-4 border-secondary w-max">
                Education:
              </h2>
              <p className="font-medium flex items-start gap-2 my-7 text-accent">
                <img src={educationIcon} alt="degree-icon" className="mt-1" />
                <span>
                  Bachelor of Technology (B-TECH) <br />{" "}
                  <span className="font-extralight">
                    Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, India (2019-2023)
                  </span>
                </span>
              </p>
            </div>
            <div>
              <h2 className="font-cairo text-2xl font-semibold border-b-4 border-secondary w-max">
                Certifications:
              </h2>
              <p className="font-medium flex items-start gap-2 my-7 text-accent">
                <img
                  src={certificationIcon}
                  alt="certification-icon"
                  className="mt-1"
                />
                <span>
                  Web Designing Technology <br />{" "}
                  <span className="font-extralight">Incapp, 2022</span>
                </span>
              </p>
              <p className="font-medium flex items-start gap-2 my-7 text-accent">
                <img
                  src={certificationIcon}
                  alt="certification-icon"
                  className="mt-1"
                />
                <span>
                  Python Technology <br />{" "}
                  <span className="font-extralight">Incapp, 2023</span>
                </span>
              </p>
              <p className="font-medium flex items-start gap-2 my-7 text-accent">
                <img
                  src={certificationIcon}
                  alt="certification-icon"
                  className="mt-1"
                />
                <span>
                  Django Technology <br />{" "}
                  <span className="font-extralight">Incapp, 2023</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <hr className="border-[#ffffff25]" />
    </section>
  </div>
  )
}

export default Education