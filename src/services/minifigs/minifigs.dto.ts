import { ServerResponseMinifigParts, ServerResponseMinifigs, UIResponseMinifigParts, UIResponseMinifigs } from './minifigs.types'

export const minifigsDto = (minifigs: ServerResponseMinifigs): UIResponseMinifigs => ({
  results: minifigs.results.map(minifig => ({
    setNum: minifig.set_num,
    name: minifig.name,
    numParts: minifig.num_parts,
    setImgUrl: minifig.set_img_url,
    setUrl: minifig.set_url,
    lastModifiedDt: minifig.last_modified_dt
  }))
})

export const minifigPartsDto = (minifigParts: ServerResponseMinifigParts): UIResponseMinifigParts => ({
  results: minifigParts.results.map(minifigPart => ({
    name: minifigPart.part.name,
    partImgUrl: minifigPart.part.part_img_url,
    partUrl: minifigPart.part.part_url,
    partNum: minifigPart.part.part_num
  }))
})