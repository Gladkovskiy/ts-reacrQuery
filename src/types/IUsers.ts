export interface IAddress {
  street: string
  city: string
}

export interface IUsers {
  id: number
  username: string
  email: number
  address: IAddress
}

export interface IPosts {
  title: string
  body: string
  userId: number
}

export interface IPostsResp extends IPosts {
  id: number
}
