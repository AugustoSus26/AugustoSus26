### Bom dia, boa tarde, boa noite!

<!--
**AugustoSus26/AugustoSus26** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
function setup() {
  createCanvas(1500, 1500);
  background('aquamarine');
}

function draw() {

stroke('blue');
fill('yellow');
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}