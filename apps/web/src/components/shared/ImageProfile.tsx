import { ImgHTMLAttributes, useEffect, useState } from 'react'

type ImageProps = ImgHTMLAttributes<HTMLImageElement>

export default function ImageProfile({ alt, src = '', ...rest }: ImageProps) {
  const [imageSrc, setImageSrc] = useState('/profile.svg')

  const onError = () => {
    setImageSrc('/profile.svg')
  }

  useEffect(() => {
    setImageSrc(src)
  }, [src])

  return <img onError={onError} alt={alt} src={imageSrc} {...rest} />
}
