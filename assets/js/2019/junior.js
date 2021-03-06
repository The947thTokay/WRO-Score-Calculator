'use strict'
let scores = [0,0,0,0,0,0,0,0,0,0]

function update () {
  scores = [0,0,0,0,0,0,0,0,0,0]
  // Smart lamps
  scores[0] = Number(document.getElementById('npc1').value)
  if (scores[0] !== 0) {
    scores[0] += Number(document.getElementById('s1').value)
    if (scores[0] === 20) {
      scores[0] += 5
    }
  }

  scores[1] = Number(document.getElementById('npc2').value)
  if (scores[1] !== 0) {
    scores[1] += Number(document.getElementById('s2').value)
    if (scores[1] === 20) {
      scores[1] += 5
    }
  }

  scores[2] = Number(document.getElementById('npc3').value)
  if (scores[2] !== 0) {
    scores[2] += Number(document.getElementById('s3').value)
    if (scores[2] === 20) {
      scores[2] += 5
    }
  }

  scores[3] = Number(document.getElementById('npc4').value)
  if (scores[3] !== 0) {
    scores[3] += Number(document.getElementById('s4').value)
    if (scores[3] === 20) {
      scores[3] += 5
    }
  }

  scores[4] = Number(document.getElementById('npc5').value)
  if (scores[4] !== 0) {
    scores[4] += Number(document.getElementById('s5').value)
    if (scores[4] === 20) {
      scores[4] += 5
    }
  }

  scores[5] = Number(document.getElementById('npc6').value)
  if (scores[5] !== 0) {
    scores[5] += Number(document.getElementById('s6').value)
    if (scores[5] === 20) {
      scores[5] += 5
    }
  }

  // Old lamps
  scores[6] = Number(document.getElementById('npc-b1').value)
  if (scores[6] === 10) {
    scores[6] += Number(document.getElementById('s-b1').value)
  }

  scores[7] = Number(document.getElementById('npc-b2').value)
  if (scores[7] === 10) {
    scores[7] += Number(document.getElementById('s-b2').value)
  }

  // Walls
  scores[8] = Number(document.getElementById('walls').value)
  
  // End position of robot
  let total = scores.reduce(function (partial_sum, a) { return partial_sum + a })
  if (total !== 0) {
    scores[9] = Number(document.getElementById('end').value)
    total += scores[9]
  }

  // Score can't be negative
  total = Math.max(total, 0)

  // Update table
  document.getElementById('result-1').innerHTML = String(scores[0])
  document.getElementById('result-2').innerHTML = String(scores[1])
  document.getElementById('result-3').innerHTML = String(scores[2])
  document.getElementById('result-4').innerHTML = String(scores[3])
  document.getElementById('result-5').innerHTML = String(scores[4])
  document.getElementById('result-6').innerHTML = String(scores[5])
  document.getElementById('result-b1').innerHTML = String(scores[6])
  document.getElementById('result-b2').innerHTML = String(scores[7])
  document.getElementById('result-walls').innerHTML = String(scores[8])
  document.getElementById('result-end').innerHTML = String(scores[9])
  document.getElementById('result').innerHTML = String(total)
}

function load() {
  let inputs = document.getElementsByClassName('input')

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', update, false)
  }

  document.getElementById('scoreForm').addEventListener('reset', update, false)

  update()
}

function resetForm() {
  document.getElementById('scoreForm').reset()
  setTimeout(update)
}

document.addEventListener('DOMContentLoaded', load, false)
