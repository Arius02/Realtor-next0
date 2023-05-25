import Banner from "@/components/Banner";
import Property from "@/components/Property";
import getProperty, { baseUrl } from "@/utils/fetchAPI";
import Link from "next/link";
import { useRouter } from "next/router";

type props = {
  propertiesForSale: Hit[],
  propertiesForRent: Hit[]
}

const Home =  ({ propertiesForRent, propertiesForSale }: props) => {
  const router = useRouter()
  if (!propertiesForRent || !propertiesForSale) {
    return <div className='h-screen flex justify-center items-center flex-col'>
      <h2 className='text-3xl dark:text-white text-primary-900'>There&apos;s Some thing went wrong</h2>
      <button onClick={() => router.reload} className="text-sm mt-2">Try Again</button>
    </div>
  }

  return <div className='container mx-auto  max-w-[1200px] min-h-screen'>
    <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for Everyone'
      desc1=' Explore from Apartments, builder floors, villas and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    />
    <div className="grid grid-cols-12  lg:px-0 px-2 gap-6">
      {propertiesForRent.map((property) => <div className="lg:col-span-4 md:col-span-6 col-span-12 " key={property.id}>
        {<Property property={property}/>}
      </div>)}
    </div>
    <Banner
      purpose='BUY A HOME'
      title1=' Find, Buy & Own Your Dream Home'
      desc1=' Explore from Apartments, land, builder floors, villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />
    <div className="grid grid-cols-12  lg:px-0 px-2 gap-6">
      {propertiesForSale.map((property) => <div className="lg:col-span-4 md:col-span-6 col-span-12 " key={property.id}>
        {<Property property={property} />}
      </div>)}
    </div>
  </div>
}
export async function getStaticProps() {
  try {
    const propertyForSale = await getProperty(
      `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
    );
    const propertyForRent = await getProperty(
      `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
    );

    return {
      props: {
        propertiesForSale: propertyForSale?.hits || [],
        propertiesForRent: propertyForRent?.hits || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        propertiesForSale: [],
        propertiesForRent: [],
      },
    };
  }
}

export default Home;
