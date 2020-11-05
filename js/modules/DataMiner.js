async function fetchData(resource) {
    let resource = await fetch(resource).then(response => {
        // bang operator - means "does not equal" (or a false value)
        if (response.status !== 200) {
            throw new Error(`Danger Will Robinson! Error ${response.status}: ${errorCodes[response.status]}`);
        }

        return response;
    });

    // fetch uses the Promise API, so it'll return with the resource or return false

    // if we get sucsess, then we can return back our resource after we purse it into plain JS
    let dataset = await resource.json();

    return dataset[0]; 

    debugger;
   }

   async function postData(sourceURL) {
    // use fetch or Axios to post to a database here

    return "You are using the postData API endpoint";
}

   export { fetchData };