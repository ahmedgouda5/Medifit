import CategoryShop from "@/components/Featuers/Home/CategoryShop";
import Clients from "@/components/Featuers/Home/Clients";
import CollectionStore from "@/components/Featuers/Home/collectionStore";
import Hero from "@/components/Featuers/Home/Hero";
import LatestProductCom from "@/components/Featuers/Home/LatestProductCom";
import SocialMedifit from "@/components/Featuers/Home/SocialMedifit";

import React from "react";

const Home = () => {
  return <>



    <main className="">
      <section className="border-b-3 pb-[50px]">
        <Hero />
      </section>
      <section>
        <CategoryShop />
      </section>
      <section className="pb-[100px]">
        <LatestProductCom />
      </section>
      <section className="bg-[#E8E6DE] pt-2 mt-[50px] rounded-2xl ">
        <div className="px-[20px] md:px-[80px]">
          <CollectionStore />
        </div>
      </section>
      <section className="mb-44 mt-[50px]">
        <Clients />
      </section>
      <section className="mb-44 mt-[50px]">
        <SocialMedifit />
      </section>
    </main>



  </>
};

export default Home;
