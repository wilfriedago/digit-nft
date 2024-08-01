"use client"

import NextImage, { type ImageProps as NextImageProps, type StaticImageData } from "next/image"
import React from "react"

import { cx } from "@/utils/cx"

export type ImageProps = NextImageProps & {
  width: number | string
  height: number | string
}

export const Image = (props: Readonly<ImageProps>) => {
  const [errored, setErrored] = React.useState(false)

  const getPlaceholder = () => {
    if (typeof props.src !== "string") {
      return (props.src as StaticImageData).blurDataURL ? "blur" : props.placeholder
    }

    return props.placeholder
  }

  return (
    <NextImage
      {...props}
      placeholder={getPlaceholder()}
      decoding="async"
      className={cx("object-cover object-center", props.className)}
      loading={!props.priority ? "lazy" : undefined}
      onError={() => setErrored(true)}
      unoptimized={errored || props.unoptimized}
    />
  )
}
