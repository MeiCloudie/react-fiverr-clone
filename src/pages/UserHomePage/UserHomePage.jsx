import React from "react"
import BannerHomePage from "./BannerHomePage"
import Categories from "./Categories"
import ServiceCard from "./ServiceCard"

import websiteDevelopmentImg from "../../assets/images/website-development.png"
import logoDesignImg from "../../assets/images/logo-design.png"
import seoImg from "../../assets/images/seo.png"
import architectureDesignImg from "../../assets/images/architecture-design.png"
import socialMediaMarketingImg from "../../assets/images/social-media-marketing.png"
import voiceOverImg from "../../assets/images/voice-over.png"
import softwareDevelopmentImg from "../../assets/images/software-development.png"

const UserHomePage = () => {
  return (
    <div className="container flex flex-col h-full my-6">
      <BannerHomePage />
      <Categories />

      {/* Popular Services */}
      <h1>Popular services</h1>

      {/* TODO: Phát triển thành carousel sau */}
      <div className="my-4 grid grid-cols-7 gap-4">
        <ServiceCard
          text={"Website Development"}
          imageSrc={websiteDevelopmentImg}
          bgColor={"bg-green-800"}
        />
        <ServiceCard
          text={"Logo Design"}
          imageSrc={logoDesignImg}
          bgColor={"bg-orange-500"}
        />
        <ServiceCard text={"SEO"} imageSrc={seoImg} bgColor={"bg-green-950"} />
        <ServiceCard
          text={"Architecture Design"}
          imageSrc={architectureDesignImg}
          bgColor={"bg-pink-950"}
        />
        <ServiceCard
          text={"Social Media Marketing"}
          imageSrc={socialMediaMarketingImg}
          bgColor={"bg-yellow-800"}
        />
        <ServiceCard
          text={"Voice Over"}
          imageSrc={voiceOverImg}
          bgColor={"bg-red-800"}
        />
        <ServiceCard
          text={"Software Developer"}
          imageSrc={softwareDevelopmentImg}
          bgColor={"bg-green-950"}
        />
      </div>
    </div>
  )
}

export default UserHomePage
