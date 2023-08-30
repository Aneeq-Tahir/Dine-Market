import Wrapper from "@/components/shared/Wrapper";
import { SignUp } from "@clerk/nextjs";

const Page = () => {
   return (
      <Wrapper>
         <div className="flex justify-center items-center">
            <SignUp />
         </div>
      </Wrapper>
   );
};

export default Page;
