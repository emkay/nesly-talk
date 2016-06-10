const h = require('virtual-dom/h')
const slides = [
  intro,
  intro2,
  nes,
  nes2,
  nes3,
  nes4,
  software,
  software2,
  software3,
  diy,
  diy2,
  diy3,
  nesly,
  nesly2,
  nesly3,
  neslySplit,
  neslyMeld,
  neslySound,
  neslySound2,
  neslySound3,
  demos,
  future,
  future2,
  future3,
  future4
]

function intro (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [h('h1', 'This is a story about Nintendos and JavaScript')])
    ])
  ])
}

function intro2 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'This is a story about Nintendos and JavaScript, DIY, and mad science')
      ])
    ])
  ])
}

function nes (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'Today we are going to do some time travelin\''),
        h('img', {src: '/nes.jpg'})
      ])
    ])
  ])
}

function nes2 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'Today we are going to do some time travelin\''),
        h('img', {src: '/nes.jpg'}),
        h('h2', 'to the 80s')
      ])
    ])
  ])
}

function nes3 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'Nintendo Entertainment System'),
        h('ul', [
          h('li', '8 bit 6502 microprocessor'),
          h('li', '1985 in North America'),
          h('li', 'revitalized the industry after the crash of 1983'),
          h('li', 'Introduced the licensing business model of third-party devs working on consoles')
        ])
      ])
    ])
  ])
}

function nes4 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'Nintendo Entertainment System'),
        h('ul', [
          h('li', 'The CPU is a modified 8-bit 6502'),
          h('li', 'It has a total of 64kb of memory'),
          h('li', 'PPU is a custom chip that does the graphics display'),
          h('li', 'APU has five channels (square1/2, triangle, noise, DMC)')
        ])
      ])
    ])
  ])
}

function software (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'Software')
      ])
    ])
  ])
}

function software2 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'Software'),
        h('h2', 'When we think of Nintendo software we think of commercial software.'),
        h('img', {src: '/zelda.jpg'})
      ])
    ])
  ])
}

function software3 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'Software'),
        h('img', {src: '/star-versus.jpg'}),
        h('figcaption', 'Star Versus')
      ])
    ])
  ])
}

function diy (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'DIY')
      ])
    ])
  ])
}

function diy2 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'DIY'),
        h('blockquote', 'We had no idea how to make a record, so we just asked one of our friends who put out records at the time, ‘How do we do that?’ - Ian MacKaye')
      ])
    ])
  ])
}

function diy3 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'DIY'),
        h('blockquote', 'By hand, cut-and-folded, every one of those sleeves. That, my friends, is the record industry. The is the true record industry. It was incredible to sit with people — your friends — and make records together. It was an amazing experience. - Ian MacKaye')
      ])
    ])
  ])
}

function nesly (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'nesly'),
        h('h1', 'The goal with nesly was to be a programming language that compiled down to 6502.')
      ])
    ])
  ])
}

function nesly2 (state) {
  const code = `
header({prg: 1, chr: 1, map: 0, mir: 1});

reset();
vblankwait(1);
clrmem();
vblankwait(2);

palette();
loadSprites();

loadBg();
loadAttribute();

asm('\tLDA #%10010000');
asm('\tSTA $2000');
asm('\tLDA #%00011110');
asm('\tSTA $2001');
asm('Forever:');
asm('\tJMP Forever');
asm('NMI:');

setLowHighBytes();

joyInit();
joyRead({label: 'ReadA'});
joyRead({label: 'ReadB'});
joyRead({label: 'ReadSel'});
joyRead({label: 'ReadStart'});
joyRead({label: 'ReadUp', cb: moveUp});
joyRead({label: 'ReadDown', cb: moveDown});
joyRead({label: 'ReadLeft', cb: moveLeft});
joyRead({label: 'ReadRight', cb: moveRight, done: enableBg});
 `

  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'nesly'),
        h('h2', 'I got something working.'),
        h('pre', code)
      ])
    ])
  ])
}

function nesly3 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'nesly'),
        h('img', {src: 'https://camo.githubusercontent.com/17c2844e76d1e8e5c698ee6897c8fc790c8fba6f/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f3437363630322f6e65736c792d64656d6f2e706e67'})
      ])
    ])
  ])
}

function neslySplit (state) {
  const code = `
const neslySplit = require('nesly-split')
const fs = require('fs')
const s = fs.createWriteStream('mario.chr')

neslySplit('smb.nes', (err, data) => {
  if (!err) {
    s.write(data.chr)
  }
})
`

  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'nesly-split'),
        h('h2', 'split out the CHR and PRG of a NES ROM'),
        h('pre', code)
      ])
    ])
  ])
}

function neslyMeld (state) {
  const code = `
const meld = require('nesly-meld')
const fs = require('fs')

const file = fs.createWriteStream('new-smb.nes')

meld('smb.nes', 'new-smb.chr', (err, data) => {
  if (!err) file.write(data)
})
`
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'nesly-meld'),
        h('h2', 'Meld a CHR into an NES ROM'),
        h('pre', code)
      ])
    ])
  ])
}

function neslySound (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'nesly-sound')
      ])
    ])
  ])
}

function neslySound2 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'nesly-sound'),
        h('h2', 'js api to an NES sound engine')
      ])
    ])
  ])
}

function neslySound3 (state) {
  const code = `
  const song = require('nesly-sound')()

  song.square1(['C5', 'E5', 'G5', 'C6'])
    .timing(1/8)

  song.done()
  song.write()
`
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'nesly-sound'),
        h('h2', 'js api to an NES sound engine'),
        h('pre', code)
      ])
    ])
  ])
}

function demos (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'Demos')
      ])
    ])
  ])
}

function future (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'The Future')
      ])
    ])
  ])
}

function future2 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'The Future'),
        h('ul', [
          h('li', 'nesly-assembler: pure js 6502 assembler')
        ])
      ])
    ])
  ])
}

function future3 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'The Future'),
        h('ul', [
          h('li', 'nesly-assembler: pure js 6502 assembler'),
          h('li', 'web audio')
        ])
      ])
    ])
  ])
}

function future4 (state) {
  return h('main', [
    h('div.progressbar', [
      h('div', {style: `width: ${state.percent}%;`})
    ]),
    h('article', [
      h('section', [
        h('h1', 'The Future'),
        h('ul', [
          h('li', 'nesly-assembler: pure js 6502 assembler'),
          h('li', 'web audio'),
          h('li', 'midi')
        ])
      ])
    ])
  ])
}

module.exports = slides
