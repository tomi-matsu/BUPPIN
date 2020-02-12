import axios from 'axios'

export default {
  getItem(): Promise<any> {
    console.log(process.env)
    return axios.get(process.env.VUE_APP_GAS_URL)
  },
  updateItem(data: string): Promise<any> {
    // GASはpreflight (OPTION method) 非対応 -> form dataを送る
    return axios.post(process.env.VUE_APP_GAS_URL, data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
  },
}
