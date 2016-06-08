const Song = require('nesly-sound')
const song = Song()

const sq1 = song.square1
const sq2 = song.square2
const tri = song.triangle
const noi = song.noise

const time = 1 / 4
const drumTime = 1 / 8

function loop (n, fn) {
	if (n === 0) return fn()
	fn()
	return loop(n - 1, fn)
}

function randNum (min, max) {
	return (Math.floor(Math.random() * (max - min + 1)) + min) - 1
}

const notes = [
  'A2', 'C2', 'E2', 'rest',
  'A3', 'C3', 'E3', 'rest',
  'A4', 'C4', 'E4', 'rest',
  'A5', 'C5', 'E5', 'rest',
  'A6', 'C6', 'E6', 'rest',
  'C2', 'E2', 'G2', 'rest',
  'C3', 'E3', 'G3', 'rest',
  'C4', 'E4', 'G4', 'rest',
  'C5', 'E5', 'G5', 'rest',
  'C6', 'E6', 'G6', 'rest'
]

const drums = ['rest', '$00', '$02', '$04', 'rest', '$06', '$08', '$0A', 'rest', '$0C', '$0E', '$10', '$12', '$14', 'rest']

sq1(['rest']).duty(25).timing(time)
sq2(['rest']).duty(25).timing(time)
tri(['rest']).timing(time)

function one () {
  const n = randNum(1, notes.length)
  const n2 = randNum(1, notes.length)
  const n3 = randNum(1, notes.length)

  sq1([notes[n]])
  tri([notes[n2]])
  sq2([notes[n3]])

  sq1(['rest'])
  tri(['rest'])
  sq2(['rest'])

  const what = randNum(0, 3)
  if (what === 0) {
    two()
  }
}

function two () {
  const time = Date.now() / 1000 | 0
  const d = time.toString().split('')

  d.forEach((a) => {
    const num = parseInt(a, 10)
    if (drums[num]) {
      if (drums[num] === 'rest') {
        noi([drums[num]]).volumeEnvelope('ve_off')
      } else {
        noi([drums[num]]).volumeEnvelope('ve_drum_decay')
      }
    }
  })
}

loop(10, one)

sq1(['rest']).duty(50)

loop(10, one)

sq1(['rest']).duty(0)

loop(10, one)

sq1(['rest']).duty(-25)

loop(20, one)
loop(10, one)

song.write()
song.done()
