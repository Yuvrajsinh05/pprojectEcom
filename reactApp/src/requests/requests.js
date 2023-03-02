// export const getApiCall = async (url) =>{

//     try{
//         const response = await fetch(url);
//         const json = await response.json();
//         return await json;
//     }catch(err){
//         console.log("get api error")
//     }


// }

export async function getApiCall(url) {
    try {
      const requestType = {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control" : "no-cache, no-store, must-revalidate",
          "Pragma": "no-cache",
          "Expires": "0",
        },
      };
  
      const response = await fetch(url, requestType);
      const responseJson = await response.json();
      console.log(url, await responseJson);
      return await responseJson;
    } catch (error) {
      return false;
    }
  }
  