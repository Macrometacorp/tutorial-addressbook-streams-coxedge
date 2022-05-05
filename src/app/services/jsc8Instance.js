import jsC8 from "jsc8"
import { GDN_URL, FABRIC_NAME, API_KEY } from "../../util/constants"

let client

const initClient = (url = GDN_URL) => {
    client = new jsC8({
        url,
        fabricName: FABRIC_NAME,
        apiKey: API_KEY,
    })
}

const getInstance = () => {
    if (!client) {
        initClient()
    }

    return client
}

const reInitClient = (gdnUrl) => {
    initClient(gdnUrl)
}

export { getInstance, reInitClient }
