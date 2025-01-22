import Greeting from "@/modules/greeting/components/Greeting";
import Services from "@/modules/services/components/Services";
import Portfolio from "@/modules/portfolio/components/Portfolio";
import Banner from "@/modules/banner/components/Banner";
import WhyWe from "@/modules/why-we/components/WhyWe";
import About from "@/modules/about/components/About";
import FAQ from "@/modules/faq/components/FAQ";
import ContactForm from "@/modules/contact/components/Contact";

export default function Page() {
  return (
    <main className="d-x:w-[1920px] d-s:mx-auto">
      <Greeting></Greeting>
      <Services></Services>
      <Portfolio></Portfolio>
      <Banner></Banner>
      <WhyWe></WhyWe>
      <About></About>
      <FAQ></FAQ>
      <ContactForm></ContactForm>
    </main>
  );
}
