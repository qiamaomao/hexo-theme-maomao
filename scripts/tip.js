// 'use strict'
//
// function poem (args, content) {
//   return `<div class="tip"><b>${content}<b></div>`
// }
//
// hexo.extend.tag.register('tip', tip, { ends: true })

'use strict'

function tip (args, content) {
  return `<div class="tip shadow"><i class="shadow" data-feather="${args.join(' ')}"></i>${hexo.render.renderSync({ text: content, engine: 'markdown' })}</div>`
}

hexo.extend.tag.register('tip',tip, { ends: true })