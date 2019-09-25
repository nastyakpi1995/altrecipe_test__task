
export const getUser = async() => {
  const url = `http://167.71.4.155/user/lists`;
    const response = await fetch(`${url}`);
  const data = await response.json();
  
  return data;
};


export const getLocation = async() => {
  const url = `http://167.71.4.155/location/lists`;
    const response = await fetch(`${url}`);
  const data = await response.json();
  
  return data;
};

export const getcreate = async(title) => {
  const url = `http://167.71.4.155/user/create`;
    const response = await fetch((`${url}`), {
      method: 'post',
      body: title,
      headers: {
        'content-type': 'application/json',
      }
    });
  
  return  response.json();
};

export const removePerson = async (id) => {
  const url = `http://167.71.4.155/user`;
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
  return response.json();
};

export const updatePerson = async (title, id) => {
  const url = `http://167.71.4.155/user/update`;
    const response = await fetch(`${url}/${id}`, {
      method: 'POST',
      body: title,
      headers: {
        'content-type': 'application/json',
      }
    });
  return response.json();
};

