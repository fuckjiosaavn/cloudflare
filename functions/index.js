export async function onRequestGet({ params }) {
    const res = await fetch(`https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&_format=json&cc=in&_marker=0%253F_marker=0&albumid=${params.id}`);
    const data = await res.json();
    const info = JSON.stringify(data, null, 4);
    return new Response(info);
}