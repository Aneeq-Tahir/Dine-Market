import Header from "@/components/home/Header";
import Products from "@/components/home/Products";
import Promo from "@/components/home/Promo";
import Authentic from "@/components/home/Authentic";
import Newsletter from "@/components/home/Newsletter";
import Wrapper from "@/components/shared/Wrapper";

export default function Home() {
   return (
      <>
         <Wrapper>
            <Header />
            <Promo />
            <Products />
            <Authentic />
            <Newsletter />
         </Wrapper>
      </>
   );
}
