<template>
    <form @submit.prevent="submitStep">
        <div class="row g-3 g-md-4">
            step9
            <div class="col-12 mt-0">
                <div class="container-fluid p-0">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <button type="submit" class="navBtn nextBtn mt-4 flex justify-center align-items-center">Étape suivante <img src="../assets/icons/arrow-next.svg" alt="suivant" class="ms-3 img-fluid"></button>
                        </div>
                        <div class="col-12 text-center">
                            <!-- <a class="backLink" onclick="goBack()"><img src="../assets/icons/back-arrow.svg" alt="back" class="img-fluid me-3"> Retour</a> -->
                        </div>
                    </div>
                </div>
            </div>
            <BonASavoir remarque="texte." />
        </div>
    </form>
  </template>
  
  <script setup>
    import BonASavoir from '../components/BonASavoir.vue';
    import { useFormStore } from '@/stores/useFormStore';
    const formStore = useFormStore();

    const formData = reactive({});
      function  submitStep() {
            formStore.updateStepData('step9', formData);
            formStore.nextStep();
        }
  </script>
  