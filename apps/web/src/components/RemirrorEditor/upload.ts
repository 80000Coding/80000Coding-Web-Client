import AWS from 'aws-sdk'

type ImagePaths = string[]
type ParsedDataUrl = {
  mimeType: string
  base64: string
  fileExtension: string
}

function parseDataUrl(dataUrl: string): ParsedDataUrl {
  const matches = dataUrl.match(/^data:image\/(.*?);base64,(.*)$/)
  if (matches && matches.length >= 3) {
    return {
      mimeType: 'image/' + matches[1],
      base64: matches[2],
      fileExtension: matches[1],
    }
  }
  throw new Error('Cannot parse data URL')
}

function base64ToBlob(base64: string, mimeType: string) {
  const byteCharacters = atob(base64)
  const byteArray = new Uint8Array(byteCharacters.length)

  for (let i = 0; i < byteCharacters.length; i++) {
    byteArray[i] = byteCharacters.charCodeAt(i)
  }

  return new Blob([byteArray], { type: mimeType })
}

function DataUrlToFile(dataUrl: string, filename: string): File {
  const parsedDataUrl = parseDataUrl(dataUrl)
  const blob = base64ToBlob(parsedDataUrl.base64, parsedDataUrl.mimeType)
  return new File([blob], filename, { type: parsedDataUrl.mimeType })
}

export async function upload(imagePaths: ImagePaths) {
  const region = 'ap-northeast-2'
  const bucket = '80000coding'

  AWS.config.update({
    region: region,
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  })

  for (const path of imagePaths) {
    try {
      // 파일 이름 어떻게 할지 고민해보기 (현재는 timestamp + file.name) -> timestamp는 우선 중복떄문에 넣어둠
      const file = DataUrlToFile(path, 'image.png')
      const timestamp = new Date().getTime()

      const manager = new AWS.S3.ManagedUpload({
        params: {
          Bucket: bucket, // 버킷 이름
          Key: timestamp + file.name, // 버킷에 저장될 파일 이름
          Body: file, // 파일 객체
        },
      })
      manager.promise().then(
        function (data) {
          console.log('upload success', data)
        },
        function (err) {
          console.log('upload error', err)
        },
      )
    } catch (error) {
      console.error('Error:', error)
    }
  }
}
