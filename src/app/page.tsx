import {Button} from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Header from "@/components/Header";

export default function Home() {
return(
          <>
          <Header />
          <section className="h-full mt-12">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">
            SoftWare Developer
          </span>
          <h1 className="h1 mb-6">Hello I am <br />
            <span className="text-accent-Default">

              Adithyan
            </span>
          </h1>
          <p>I Excel in the field of Software Development</p>
          <div className="flex flex-col xl:flex-row  items-center gap-8">

            <Button variant={'outline'} size="lg" className="Uppercase flex  items-center gap-2 hover:bg-accent-hover"><span>Download CV</span><FaDownload />
            </Button>
            <div className="mb-8 xl:mb-0 ">
              <Socials containerStyles='flex gap-6' IconStyles='w-9 h-9  border border-accent-Default p-2 rounded-full flex  justify-center items-center text-accent-Default test-base  hover:bg-accent-hover hover:text-primary hover:translation-all duration-500' />
            </div>
          </div>


        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>

      </div>

    </div>
  </section></>
)
}
