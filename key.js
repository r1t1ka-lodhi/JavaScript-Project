const screen =document.getElementById('insert');

window.addEventListener('keydown',(e)=>{
  screen.innerHTML=`
    <div id="table">
    <table>
    <tr>
      <th>key</th>
      <th>keyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key===" "? "SPACE":e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>

    <h1>HERE YOU GOT ALL INFO OFF </h1>
    <h2>${e.key}</h2>
    `

})

