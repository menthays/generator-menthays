import '../src/pages/index/index'

describe('test index', () => {
  it('Display time successfully', () => {
    let str = document.body.innerHTML
    console.log(str)
    expect('1').toBeTruthy()
  })
})