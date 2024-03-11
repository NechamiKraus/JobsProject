import { job } from "./job"

export class user{
    id : Number | null = null
    userName : string | null = null
    password : string | null = null
    jobSearchField : string |null = null
    CV : job[] | null = null
}