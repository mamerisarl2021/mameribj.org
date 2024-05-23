

import axiosClient from "../helpers/axios"
import { ref } from 'vue'
import Swal from 'sweetalert2';

export default function useContactService() {
  const success = ref(false)
  const process = ref(false)
  const errors = ref([])
  
  const handleContactMessage = async data => {
    success.value = false
    process.value = true
    try {
    process.value = true

      const response = await axiosClient.post('/send-mail-message', data)
      if (response.data.success === true) {
        success.value = true
        process.value = false

        Swal.fire({
            title: 'Envoye de message',
            text: 'Message envoyé avec succès',
            icon: 'success',
            showCancelButton: false,
        })
      }
    } catch (error) {
      errors.value = error.response.data.errors
      success.value = false
      process.value = false


    }
  }
  return {
    handleContactMessage,
    errors,
    success,
    process,
  }
}
