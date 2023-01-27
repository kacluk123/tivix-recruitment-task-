import { UIResponseMinifigParts, UIResponseMinifigs } from "."
import { HARRY_POTTER_THEME_ID } from "../../utils/consts"
import { getRandomArray } from "../../utils/get-random-array"
import { minifigPartsDto, minifigsDto, singleMinifigDto } from "./minifigs.dto"
import { 
  GetMimifigsParams, 
  ServerResponseMinifigParts, 
  ServerResponseMinifigs, 
  ServerResponseSingleMinifig,  
  UIResponseSingleMinifig
} from "./minifigs.types"

class MinifigsService {
  private apiUrl: string = import.meta.env.VITE_MINIFIGS_API
  private authKey: string = import.meta.env.VITE_API_AUTHORIZATION_KEY

  async getMinifigs(params: GetMimifigsParams) {
    const url = new URL(`${this.apiUrl}/lego/minifigs`)
    url.searchParams.append('in_theme_id', params.inThemeId)

    const response = await fetch(url.href, {
      headers: {
        'Authorization': `key ${this.authKey}`
      }
    })
    const data: ServerResponseMinifigs = await response.json()
    return minifigsDto(data)
  }

  async getRandomMinifigs(howMany: number): Promise<UIResponseMinifigs> {
    const data = await this.getMinifigs({ 
      inThemeId: HARRY_POTTER_THEME_ID 
    })
    return {
      results: getRandomArray<UIResponseSingleMinifig>(data.results, howMany)
    }
  }

  async getSingleMinifig(minifigId: string): Promise<UIResponseSingleMinifig> {
    const url = `${this.apiUrl}/lego/minifigs/${minifigId}`
    const response = await fetch(url, {
      headers: {
        'Authorization': `key ${this.authKey}`
      }
    })
    const data: ServerResponseSingleMinifig = await response.json()
    return singleMinifigDto(data)
  }

  async getMinifigParts(minifigId: string): Promise<UIResponseMinifigParts> {
    const url = `${this.apiUrl}/lego/minifigs/${minifigId}/parts`
    const response = await fetch(url, {
      headers: {
        'Authorization': `key ${this.authKey}`
      }
    })
    const data: ServerResponseMinifigParts = await response.json()
    return minifigPartsDto(data)
  }
}

export const minifigService = new MinifigsService()