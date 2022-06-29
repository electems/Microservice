import { loadTrafficevoilators } from '../File2/file2'

describe('readfunction', () => {
  it('read file', async () => {
    let a = new loadTrafficevoilators()
    a.syncReadFilereadfile('./datefile.txt')
    let spy = jest
    spyOn(FileReader.prototype, 'onload').mockImplementation(() => null)
    wrapper.find('input[type="txt"]').simulate('change', event)
    expect(spy).toHaveBeenCalled()

    expect(wrapper.find('#preview').prop('src')).not.toBeNull()
  })
})
