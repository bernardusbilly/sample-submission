const Swal = require('sweetalert2');
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

export function addSwal(currencyCode) {
  Toast.fire({
    icon: 'success',
    title: `${currencyCode} currency added`
  })
}

export function addedSwal(currencyCode) {
  Toast.fire({
    icon: 'error',
    title: `${currencyCode} currency is already on your list`
  })
}

export function deletedSwal(currencyCode) {
  Toast.fire({
    icon: 'success',
    title: `${currencyCode} currency deleted from your list`
  })
}
