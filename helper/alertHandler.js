import { useAlert } from "react-alert";

export const alertMessage = (msg,type) => {
    console.log("ISI",msg,type)
    const alert = useAlert();
    switch (type) {
        case 'success':
            alert.success(msg);
            break;
        case 'error':
            alert.error(msg);
        break;
        default:
            alert.info(msg);
            break;
    }
}