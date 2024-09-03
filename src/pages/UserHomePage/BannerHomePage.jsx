import React from "react"
import WrapperSuggestJob from "../../components/Wrapper/WrapperSuggestJob"
import FormSeachProduct from "../../components/Form/FormSearchProduct"
import MetaIcon from "../../components/Icon/MetaIcon"
import GoogleIcon from "../../components/Icon/GoogleIcon"
import NetflixIcon from "../../components/Icon/NetflixIcon"
import PAndGIcon from "../../components/Icon/PAndGIcon"
import PayonneerIcon from "../../components/Icon/PayonneerIcon"
import PayPalIcon from "../../components/Icon/PayPalIcon"

const BannerHomePage = () => {
  return (
    <div>
      <div className="py-32 flex flex-col justify-center items-center gap-4 text-center bg-cover bg-center bg-no-repeat bg-[url('assets/images/home-banner.png')]">
        <h1 className="text-white text-6xl leading-normal">
          Scale your professional <br /> workforce with{" "}
          <span className="font-serif italic">freelancers</span>
        </h1>

        {/* Search bar */}
        <WrapperSuggestJob>
          <FormSeachProduct />
        </WrapperSuggestJob>

        {/* Logo */}
        <div className="flex justify-center items-center space-x-12 text-white opacity-50 mt-8">
          <p>Trusted by:</p>
          <MetaIcon />
          <GoogleIcon />
          <NetflixIcon />
          <PAndGIcon />
          <PayPalIcon />
          <PayonneerIcon />
        </div>
      </div>
    </div>
  )
}

export default BannerHomePage
