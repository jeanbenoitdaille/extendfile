function getExtension(filePath) {
    let chunks = filePath.split(".");
    return chunks[chunks.length - 1];
}
 
let resultat = getExtension("C:/Users/thibh/.env/application.exe");
