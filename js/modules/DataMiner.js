async function fetchData(resource) {
    let resource = await fetch(resource).then(response => {
        // bang operator - means "does not equal" (or a false value)
        if (response.status !== 200) {
            throw new Error(`Danger Will Robinson! Here there be monsters! Error ${response.status}`);
        }

        return response;
    })

    // if we get sucsess, then we can return back our resource after we purse it into plain JS
    let dataset = await resource.json();

    return dataset; 
   }

   export { fetchData };