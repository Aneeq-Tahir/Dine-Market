import Wrapper from "@/components/shared/Wrapper";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
   return (
      <Wrapper>
         <div className="flex justify-center items-center">
            <SignIn />
         </div>
      </Wrapper>
   );
};

export default Page;
