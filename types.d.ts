// An interface for the geolocation object
interface Geolocation {
  lat: number;
  lng: number;
}

// An interface for the geography object
interface Geography extends Geolocation { }

// An interface for the location object
interface Location {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  name_l2: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  type?: string; // optional property
}

// An interface for the category object
interface Category {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  name_l2: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  nameSingular: string;
  nameSingular_l1: string;
  nameSingular_l2: string;
}

// An interface for the photo object
interface Photo {
  id: number;
  externalID: string;
  title: string | null; // optional property
  orderIndex: number;
  nimaScore?: number; // optional property
  url: string;
  main?: boolean; // optional property
}

// An interface for the phone number object
interface PhoneNumber {
  mobile?: string; // optional property
  phone?: string; // optional property
  whatsapp?: string; // optional property
  proxyPhone?: string; // optional property
  phoneNumbers?: Array<string>; // optional property
  mobileNumbers?: Array<string>; // optional property
}

// An interface for the license object
interface License {
  number: string;
  authority: string;
}

// An interface for the logo object
interface Logo {
  id: number;
  url: string;
}

// An interface for the agency object
interface Agency {
  id: number;
  objectID: number;
  name: string;
  name_l1: string;
  name_l2: string;
  externalID: string;
  product: string;
  productScore: number;
  licenses?: Array<License>; // optional property
  logo?: Logo; // optional property
  slug: string;
  slug_l1: string;
  slug_l2: string;
  tr: number;
  tier: number;
  roles?: Array<string>; // optional property
  active: boolean;
  createdAt?: Date; // optional property
}

// An interface for the verification object
interface Verification {
  updatedAt?: Date; // optional property
  eligible?: boolean; // optional property
  status?: "verified" | "unverified"; // optional property with union type of two possible values
  verifiedAt?: Date; // optional property 
}

// An interface for the owner agent object
interface OwnerAgent {
  externalID?: string; //optional property 
  name: string;
  name_l1: string;
  name_l2: string;
  user_image: string;
  user_image_id: number;
  isTruBroker: boolean;
}

// An interface for the hit object (the main one)
interface Hit {
  id: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: string;
  _geoloc?: Geolocation; //optional property 
  geography?: Geography; //optional property 
  purpose: string;
  price: number;
  product: string;
  productLabel: string;
  productScore: number;
  rentFrequency: string;
  referenceNumber: string;
  permitNumber?: string | null; //optional property that can be null 
  projectNumber?: string | null; //optional property that can be null  
  title: string;
  title_l1: string;
  title_l2: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  location: Array<Location>;
  category: Array<Category>;
  createdAt: number | Date; // a union type of two possible types  
  updatedAt: number | Date; // a union type of two possible types  
  reactivatedAt: number | Date; // a union type of two possible types  
  rooms: number | null; // a union type of two possible types  
  baths: number | null; // a union type of two possible types  
  area: number | null; // a union type of two possible types  
  score: number | null; // a union type of two possible types  
  score_l1: number | null; // a union type of two possible types  
  score_l2: number | null; // a union type of two possible types  
  coverPhoto?: Photo; //optional property  
  photoCount: number | null; // a union type of two possible types  
  videoCount: number | null; // a union type of two possible types  
  panoramaCount: number | null; // a union type of two possible types  
  phoneNumber?: PhoneNumber; //optional property  
  contactName: string | null; // a union type of two possible types  
  agency?: Agency; //optional property  
  hash: string | null; // a union type of two possible types  
  keywords: Array<string> | null; // a union type of two possible types  
  isVerified: boolean | null; // a union type of two possible types  
  verification?: Verification;//optional property   
  verifiedScore: number | null;// a union type of two possible types   
  completionStatus: "completed" | "incomplete" | "pending" | "rejected" | "expired" | "deleted" | "draft" | "archived" | "suspended"; floorPlanID: number | null;// a union type of two possible types   
  furnishingStatus: "furnished" | "unfurnished" | "partly-furnished";
  extraFields: any;// any type   
  type: "property";
  ownerAgent?: OwnerAgent;//optional property   
  amenities: Array<string>;// array of strings   
  cityLevelScore: number | null;// a union type of two possible types   
  indyScore: number | null;// a union type of two possible types   
  indyScore_l1: number | null;// a union type of two possible types   
  indyScore_l2: number | null;// a union type of two possible types   
  hasMatchingFloorPlans: boolean | null;// a union type of two possible types   
  photoIDs: Array<number>;// array of numbers   
  hidePrice: boolean | null;// a union type of two possible types   
  locationPurposeTier: number | null;// a union type of two possible types   
  objectID: string;//string  

}

interface PropertyDetails {
  propertyDetails:{ 
  price: number;
  rentFrequency: boolean;
  rooms: number;
  title: string
  baths: number
  area: number, agency: {
    name: string,
    logo: {
      id: number
      url: string
    }
  }; isVerified:boolean;
   description:string;
    type:string ;purpose:string;
  furnishingStatus:string; amenities:{
    amenities: {
      "text": string,
    }[]
  }[]; 
  photos:Photo[]
}
}

interface filterData {

  items: {
    name: string,
    value: string
  }[],
  placeholder: string,
  query: string,

}
interface filterValues {
  purpose?:string,
  rentFrequency?:string,
  categoryExternalID?:string,
  minPrice?:string,
  maxPrice?:string,
  areaMax?:string,
  roomsMin?:string,
  bathsMin?:string,
  sort?:string,
  locationExternalIDs?:string,
}
