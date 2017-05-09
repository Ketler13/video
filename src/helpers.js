export const mapVideoResponse = vids => {
  return vids.map(vid => {
    return {
      id: vid.id.videoId,
      title: vid.snippet.title,
      img: vid.snippet.thumbnails.medium.url
    }
  })
}
