import Inputmask from 'inputmask';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('mask', {
    mounted: function (el, binding) {
      let input;

      // Проверяем, что инпут внутри элемента (если вешаем маску на компонент)
      input = el.getElementsByTagName('INPUT')[0];

      if (!input) {
        // Маску повесили на сам элемент input
        input = el;
      }

      if (input) {
        Inputmask(binding.value).mask(input);
      }
    },
  });
});
