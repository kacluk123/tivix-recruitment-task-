import { minifigPartsDto, minifigsDto } from "./minifigs.dto"
import { GetMimifigsParams, ServerResponseMinifigParts, ServerResponseMinifigs } from "./minifigs.types"

const HARRY_POTTER_THEME_ID = 246

class MinifigsService {
  private apiUrl: string = import.meta.env.VITE_MINIFIGS_API
  private authKey: string = import.meta.env.VITE_API_AUTHORIZATION_KEY

  async getMinifigs(params: GetMimifigsParams) {
    const url = new URL(`${this.apiUrl}/lego/minifigs/`)
    url.searchParams.append('page', params.page)
    url.searchParams.append('page_size', params.pageSize)
    url.searchParams.append('in_theme_id', params.inThemeId)

    const response = await fetch(url.href, {
      headers: {
        'Authorization': `key ${this.authKey}`
      }
    })
    const data: ServerResponseMinifigs = await response.json()
    return minifigsDto(data)
  }

  async getMinifigParts(minifigId: string) {
    const url = `${this.apiUrl}/lego/minifigs/${minifigId}/parts/`
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