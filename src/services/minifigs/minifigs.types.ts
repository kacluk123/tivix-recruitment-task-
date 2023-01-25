export interface ServerResponseMinifigs {
  results: ServerResponseSingleMinifig[]
}

export interface ServerResponseSingleMinifig {
  set_num: string;
  name: string;
  num_parts: string;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}

export interface UIResponseMinifigs {
  results: UIResponseSingleMinifig[]
}

export interface UIResponseSingleMinifig {
  setNum: string;
  name: string;
  numParts: string;
  setImgUrl: string;
  setUrl: string;
  lastModifiedDt: string;
}

export interface GetMimifigsParams {
  page: string;
  pageSize: string;
  in_theme_id: string;
}

export interface ServerResponseMinifigParts {
  results: ServerResponseSingleMinifigPart[]
}

export interface ServerResponseSingleMinifigPart {
  part: {
    name: string;
    part_img_url: string;
    part_url: string;
    part_num: string;
  }
}

export interface UIResponseMinifigParts {
  results: UIResponseSingleMinifigPart[]
}

export interface UIResponseSingleMinifigPart {
  name: string;
  partImgUrl: string;
  partUrl: string;
  partNum: string;
}