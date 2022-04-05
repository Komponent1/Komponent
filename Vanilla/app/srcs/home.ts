const home = (app: HTMLElement) => {
  app.innerHTML = `
    <h1>HELLO! THIS IS KOMPONENT</h1>
    <p>Komponent는 Web개발에서 자주 사용되는 Component를 만들어보고 공유하는 플랫폼입니다.</p>
    <p>ver 0.1은 Vanilla와 React가 분리되지 않은 초기 테스트 버전입니다.</p>
    <code style={codestyle}>
        npm i @seolim/kompoent
    </code>
  `
};

export default home;
