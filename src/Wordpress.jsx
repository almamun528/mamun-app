import React from 'react'
import businessWebsiteImage from './assets/carbooking.png'
import ecommerceWeb from './assets/ecommerceWebsite.png'
import digitalProduct from './assets/digitalProduct.png'
import hotelBooking from './assets/hotel booking website.png'
import ecommerceReact from './assets/ecommerceWebsite.png'
import react1 from './assets/react1.png'
import { FaGithub } from 'react-icons/fa'
function Wordpress() {
  return (
    <>
      <section className="mt-10">
        <h1 className="text-center font-bold text-6xl"> Portfolio</h1>
        <h2 className="text-center my-3 font-semibold text-purple-400">
          Projects I have done in Fiverr marketplace , Technology{" "}
          <b className=" underline">WordPress & React js</b>
        </h2>
        <main className="space-y-3 mt-10 md:flex md:gap-3 justify-center items-center md:flex-wrap">
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                className=""
                src={businessWebsiteImage}
                alt="website image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Car Booking website (wordpress)</h2>
              <p>
                In this website I used elementor page builder and booking plugin
                to create this website.User can book car from airport{" "}
              </p>
              <div className="card-actions justify-end">
                <a href="https://blacklimousine.be/">
                  <button id="btn">visit</button>
                </a>
              </div>
            </div>
          </div>
          {/* Second Card  */}
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img className="" src={ecommerceWeb} alt="website image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">E-commerce website (wordpress)</h2>
              <p>
                In this website I used flatsome theme and woocommerce plugin to
                create this website. check the link
              </p>
              <div className="card-actions justify-end">
                <a href="https://jamrockmart.com/">
                  <button id="btn">visit</button>
                </a>
              </div>
            </div>
          </div>
          {/* Third Card  */}
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img className="" src={digitalProduct} alt="website image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Digital Product Selling (wordpress){" "}
              </h2>
              <p>
                In this website I use woodmart theme and elementor page builder
                and woocommerce
              </p>
              <div className="card-actions justify-end">
                <a href="https://jamrockmart.com/">
                  <button id="btn">visit</button>
                </a>
              </div>
            </div>
          </div>
          {/* 4th  */}
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img className="" src={react1} alt="website image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Vissa Processing System (React)</h2>
              <p>
                React js, Node and MongoDB. FireBase is used for Authentication.
                Responsive website.
              </p>

              <div className="card-actions justify-end">
                <a href="https://find-visa-40f1a.web.app/">
                  <button id="btn">visit</button>
                </a>
              </div>
              <span className="flex gap-2 items-center">
                {" "}
                <a href="https://github.com/almamun528/job-server">
                  <FaGithub className="text-3xl" />
                </a>
                <p>Server Side code</p>
              </span>
              <span className="flex gap-2 items-center">
                {" "}
                <a href="https://github.com/almamun528/job-finder">
                  <FaGithub className="text-3xl" />
                </a>
                <p>Client Side code</p>
              </span>
            </div>
          </div>
          {/* 5th  */}
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img className="" src={hotelBooking} alt="website image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Booking System (React)</h2>
              <p>
                React js, Node and MongoDB. FireBase is used for Authentication.
                Responsive website.JWT
              </p>

              <div className="card-actions justify-end">
                <a href="https://hotel-haven-41b91.web.app/">
                  <button id="btn">visit</button>
                </a>
              </div>
              <span className="flex gap-2 items-center">
                {" "}
                <a href="https://github.com/almamun528/hotel-server">
                  <FaGithub className="text-3xl" />
                </a>
                <p>Server Side code</p>
              </span>
              <span className="flex gap-2 items-center">
                {" "}
                <a href="https://github.com/almamun528/hotel-haven">
                  <FaGithub className="text-3xl" />
                </a>
                <p>Client Side code</p>
              </span>
            </div>
          </div>
          {/* 6th  */}
          <div className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img className="" src={ecommerceReact} alt="website image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">E-commerce frontend (React)</h2>
              <p>
                React js, React Router dom. DaisyUi Component used and tailwindCss, Responsive
              </p>

              <div className="card-actions justify-end">
                <a href="https://incomparable-tarsier-4b50c4.netlify.app/">
                  <button id="btn">visit</button>
                </a>
              </div>

              <span className="flex gap-2 items-center">
                {" "}
                <a href="https://github.com/almamun528/restaurant-react-apps">
                  <FaGithub className="text-3xl" />
                </a>
                <p>Client Side code</p>
              </span>
              <span className="flex gap-2 items-center">
                {" "}
                <a href="https://github.com/almamun528/restaurant-react-apps">
                  <FaGithub className="text-3xl" />
                </a>
                <p>Client Side code</p>
              </span>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Wordpress
