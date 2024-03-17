document.getElementById('info').innerText = `This app is using Chrome (v${version.chrome()}), NodeJS (v${version.node()}), and Electron (v${version.electron()}).`;

const func = async () => {
  const response = await window.version.ping();
  console.log(response);
}

func();
