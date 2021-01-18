import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home', () => {
  it('renders the correct page information', () => {
    const wrapper = mount(Home, {
      data() {
        return {
          message: 'Punk API Demo',
          username: ''
        }
      }
    })

    // see if the message renders
    expect(wrapper.find('.display-4').text()).toEqual('Punk API Demo')

    // assert the error is rendered
    //expect(wrapper.find('.error').exists()).toBeTruthy()

    // update the `username` and assert error is no longer rendered
    //wrapper.setData({ username: 'Lachlan' })
    //expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})