interface SellerHistory {
  type: string
  date: Date
  product: string
  value: number
  sellerName: string
}

export interface SalesListFromApiDTO {
  sellerTable: SellerHistory[]
  total: number
}