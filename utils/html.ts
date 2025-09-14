export const htmlStr = `
  <div id="hotToursContainer">
    <script src="https://ui.sletat.ru/module-4.0/core.js" charset="utf-8"></script>
    <script>
    console.log(window.sletat)
      window?.sletat?.FrameHot.$create({
        useCard: false,
        enabledCurrencies: ["RUB"]
      });
    </script>
    <span class="sletat-copyright">
      Идет загрузка модуля
      <a href="https://sletat.ru/" target="_blank">поиска туров</a>
      &hellip;
    </span>
  </div>
`;
