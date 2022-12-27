
interface FetchHookProps{
  url?: string;
  method: string;
  body?:{};
}

export default async function FetchHook(props:FetchHookProps){

    const response = await fetch( <any>props.url, {
        method: props.method, 
      
        body: JSON.stringify(props.body) 
      })
      .then((data) => {
        return data.json()
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      return response;

      

    }



