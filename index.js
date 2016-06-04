const cssify = require('cssify')
cssify.byUrl('//cdn.rawgit.com/mblode/marx/master/css/marx.min.css')
require('./main.css')

const kushlash = require('kushlash')
const slides = require('./slides')

kushlash(slides)
