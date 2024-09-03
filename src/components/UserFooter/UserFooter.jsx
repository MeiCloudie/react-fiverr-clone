import React from "react"

const UserFooter = () => {
  return (
    <footer className="border-t p-10">
      <div className="container">
        <div className="grid grid-cols-5 gap-4">
          <div className="space-y-4">
            <h5 className="text-lg text-gray-800 font-bold">Categories</h5>

            <ul className="text-gray-500 space-y-2">
              <li className="cursor-pointer hover:underline">
                Graphics & Design
              </li>
              <li className="cursor-pointer hover:underline">
                Digital Marketing
              </li>
              <li className="cursor-pointer hover:underline">
                Writing & Translation
              </li>
              <li className="cursor-pointer hover:underline">
                Video & Animation
              </li>
              <li className="cursor-pointer hover:underline">Music & Audio</li>
              <li className="cursor-pointer hover:underline">
                Fiverr Logo Maker
              </li>
              <li className="cursor-pointer hover:underline">
                Programming & Tech
              </li>
              <li className="cursor-pointer hover:underline">Data</li>
              <li className="cursor-pointer hover:underline">Business</li>
              <li className="cursor-pointer hover:underline">
                Personal Growth & Hobbies
              </li>
              <li className="cursor-pointer hover:underline">Photography</li>
              <li className="cursor-pointer hover:underline">Finance</li>
              <li className="cursor-pointer hover:underline">
                End-to-End Projects
              </li>
              <li className="cursor-pointer hover:underline">Sitemap</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-lg text-gray-800 font-bold">About</h5>

            <ul className="text-gray-500 space-y-2">
              <li className="cursor-pointer hover:underline">Careers</li>
              <li className="cursor-pointer hover:underline">Press & News</li>
              <li className="cursor-pointer hover:underline">Partnerships</li>
              <li className="cursor-pointer hover:underline">Privacy Policy</li>
              <li className="cursor-pointer hover:underline">
                Terms of Service
              </li>
              <li className="cursor-pointer hover:underline">
                Intellectual Property Claims
              </li>
              <li className="cursor-pointer hover:underline">
                Investor Relations
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-lg text-gray-800 font-bold">
              Support and Education
            </h5>

            <ul className="text-gray-500 space-y-2">
              <li className="cursor-pointer hover:underline">Help & Support</li>
              <li className="cursor-pointer hover:underline">Trust & Safety</li>
              <li className="cursor-pointer hover:underline">Quality Guide</li>
              <li className="cursor-pointer hover:underline">
                Selling on Fiverr
              </li>
              <li className="cursor-pointer hover:underline">
                Buying on Fiverr
              </li>
              <li className="cursor-pointer hover:underline">Fiverr Guides</li>
              <li className="cursor-pointer hover:underline">
                Learn <br />
                <span className="opacity-70 text-sm">Online Courses</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-lg text-gray-800 font-bold">Community</h5>

            <ul className="text-gray-500 space-y-2">
              <li className="cursor-pointer hover:underline">
                Customer Success Stories
              </li>
              <li className="cursor-pointer hover:underline">Community Hub</li>
              <li className="cursor-pointer hover:underline">Forum</li>
              <li className="cursor-pointer hover:underline">Events</li>
              <li className="cursor-pointer hover:underline">Blog</li>
              <li className="cursor-pointer hover:underline">Affiliates</li>
              <li className="cursor-pointer hover:underline">Podcast</li>
              <li className="cursor-pointer hover:underline">
                Invite a Friend
              </li>
              <li className="cursor-pointer hover:underline">
                Become a Seller
              </li>
              <li className="cursor-pointer hover:underline">
                Community Standards
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-lg text-gray-800 font-bold">
              Business Solutions
            </h5>

            <ul className="text-gray-500 space-y-2">
              <li className="cursor-pointer hover:underline">
                About Business Solutions
              </li>
              <li className="cursor-pointer hover:underline">Fiverr Pro</li>
              <li className="cursor-pointer hover:underline">
                Fiverr Certified
              </li>
              <li className="cursor-pointer hover:underline">
                Become an Agency
              </li>
              <li className="cursor-pointer hover:underline">
                Fiverr Enterprise
              </li>
              <li className="cursor-pointer hover:underline">
                ClearVoice <br />{" "}
                <span className="opacity-70 text-sm">Content Marketing</span>
              </li>
              <li className="cursor-pointer hover:underline">
                Working Not Working
              </li>
              <li className="cursor-pointer hover:underline">Contact Sales</li>
            </ul>
          </div>
        </div>

        <hr className="my-6" />

        <div className="flex justify-between text-gray-400">
          {/* left */}
          <div className="flex items-center space-x-6">
            <svg
              width={91}
              height={27}
              viewBox="0 0 91 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#7A7D85">
                <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z" />
              </g>
              <g fill="#7A7D85">
                <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z" />
              </g>
            </svg>

            <p>© Fiverr International Ltd. 2024</p>
          </div>

          {/* right */}
          <div className="flex items-center">
            <div className="space-x-7 text-xl">
              <button className="hover:text-green-700 duration-200">
                <i class="fa-brands fa-tiktok"></i>
              </button>
              <button className="hover:text-green-700 duration-200">
                <i class="fa-brands fa-instagram"></i>
              </button>
              <button className="hover:text-green-700 duration-200">
                <i class="fa-brands fa-linkedin"></i>
              </button>
              <button className="hover:text-green-700 duration-200">
                <i class="fa-brands fa-facebook"></i>
              </button>
              <button className="hover:text-green-700 duration-200">
                <i class="fa-brands fa-pinterest"></i>
              </button>
              <button className="hover:text-green-700 duration-200">
                <i class="fa-brands fa-twitter"></i>
              </button>
            </div>

            <div className="text-lg ms-14 space-x-4">
              <button className="rounded-full hover:bg-gray-100 py-1 px-3">
                <i class="fa-solid fa-globe"></i> English
              </button>
              <button className="rounded-full hover:bg-gray-100 py-1 px-3">
                $ USD
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default UserFooter
