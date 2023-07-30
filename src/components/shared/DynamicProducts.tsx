import { Products } from "../home/Products";
import Card from "./Card";
import Wrapper from "./Wrapper";

const DynamicProducts = ({ products }: { products: Products[] }) => {
   return (
      <Wrapper>
         <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 py-10">
            {products.map((v) => (
               <Card key={v._id} img={v.img} price={v.price} name={v.name} />
            ))}
         </section>
      </Wrapper>
   );
};

export default DynamicProducts;
