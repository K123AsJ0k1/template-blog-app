import axios from 'axios'
const baseUrl = 'https://raw.githubusercontent.com/K123AsJ0k1/BDB/main/'

const getData = ({meta_file}) => {
    const request = axios.get(`${baseUrl}/Data/${meta_file}.json`)
    return request.then(response => response.data)
}

const getText = ({text_file}) => {
    const request = axios.get(`${baseUrl}/Texts/${text_file}.md`)
    return request.then(response => response.data)
}

export default { getData, getText }
