import { StaticImageData } from "next/image"

export type Card = {
  title: string
  content: string
  link: string
  image: StaticImageData,
}