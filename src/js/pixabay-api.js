
export function searchImagesByQuery(query) {
    const URL = "https://pixabay.com/api/";
    const API_KEY = "45296804-0fb55f0e1381bd4cbf585a7a5";
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,  
    });

    return fetch(`${URL}?${params.toString()}`)
    .then((response)=> {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })

.catch(error => {
    console.error("Image Search Error:", error);
    throw error;
});
}