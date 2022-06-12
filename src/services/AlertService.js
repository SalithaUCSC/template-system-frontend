import Swal from "sweetalert2";

export const showAlert = (title, icon, message) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: message
    }).then(r => {});
}
