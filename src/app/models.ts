export interface Demo {
    background_image: string;
    name: string;
    partners: string;
    website: string;
    description: string;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    brief_desc : string;
    screenshots: Array<Screenshots>;

  }
  
  export interface APIResponse<T> {
      results: Array<T>;
  }
  
  interface Genre {
    name: string;
  }
  
  interface ParentPlatform {
    platform: {
      name: string;
    };
  }
  
  interface Publishers {
    name: string;
  }
  
  interface Rating {
    id: number;
    count: number;
    title: string;
  }
  
  interface Screenshots {
    image: string;
  }
  
  interface Trailer {
    data: {
      max: string;
    };
  }
  