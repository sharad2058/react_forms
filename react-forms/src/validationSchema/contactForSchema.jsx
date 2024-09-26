import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object ({firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().min(20).max(200).required(),
})

export default schema;