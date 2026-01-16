const getImageSrc = (imgUrl) => {
    if (!imgUrl) return "";

    const driveFileRegex = /\/file\/d\/([^/]+)/;
    const openIdRegex = /[?&]id=([^&]+)/;

    let match = imgUrl.match(driveFileRegex);
    if (match && match[1]) {
        return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }

    match = imgUrl.match(openIdRegex);
    if (match && match[1]) {
        return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }

    return imgUrl; 
};

export default getImageSrc;
