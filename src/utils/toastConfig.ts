import { ToastContainerProps } from 'react-toastify';

export const toastConfig: ToastContainerProps = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false, // Shows the progress bar
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored", // Applies a colored theme
};
