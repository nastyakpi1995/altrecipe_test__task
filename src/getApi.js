
export const getUser = async() => {
  const url = `http://167.71.4.155/user/lists`;
    const response = await fetch(`${url}`, {
      method: 'POST',
      
      headers: {
        'Access-Control-Allow-Origin':'http://localhost:3000/',
      }
    }
    );
    console.log(response)
  const data = response.json();
  
  return data;
};
