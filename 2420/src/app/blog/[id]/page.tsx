type paramsType = {

    id: string;

  };
  
  export async function generateStaticParams(): Promise<paramsType[]> {

    return [{ id: '1' }, { id: '2' }];

  }
  
  const page = ({ params }: { params: paramsType }) => {

    return <div>blog記事:その{params.id}</div>;

  };
  
  export default page;
  
  export const dynamicParams = false;