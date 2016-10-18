function draw3()
{functionPlot({
  target: '#demo',
  data: [
    { fn: document.getElementById('eq3').value, color: 'blue' },
    { fn: document.getElementById('eq4').value, color: 'red' }
  ]
})
}


  document.getElementById('form3').onsubmit = function (event) {
    event.preventDefault();
    draw3();
  };
    
  draw3();
