import ClientLayout from "./ClientLayout";
import Banner from "./component/Banner";
import Games from "./component/Games";

export default function Home() {
  return (
    <ClientLayout>
    <div className="md:px-28 gap-4 my-4 md:my-8">
      <Banner/>
      <Games/>
    </div>
    </ClientLayout>
  );
}
