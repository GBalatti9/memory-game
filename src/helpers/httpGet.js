
export const apiGet = async (url) => {
    const response = await fetch(url);
    const { data } = await response.json();

    const imagesAndId = data.map((gif) => {
        let { url } = gif.images.downsized;
        let { id, title } = gif;
        return [
            {
                url,
                id,
                title
            }]
    })

    return imagesAndId;
}

// apiGet(URL);
