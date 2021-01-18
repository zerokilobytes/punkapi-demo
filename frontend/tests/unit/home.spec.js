import { mount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Vuex from 'vuex';

let wrapper;
let store;
let actions;
let mutations;
let state;
const localVue = createLocalVue();
localVue.use(Vuex);

beforeEach(() => {
  actions = {

  };
  mutations = {

  };
  state = {
    key: {}
  };
  store = new Vuex.Store({
    actions,
    mutations,
    state,
  });

  wrapper = mount(Home, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Home', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('Home', () => {
  it('renders the correct page information', () => {
    // see if the title renders
    expect(wrapper.find('.display-4').text()).toEqual('Punk API Demo')
  })
})



test('Type a value into the search input', async () => {
  const wrapper = mount(Home)
  const input = wrapper.find('input')

  await input.setValue('Buzz')

  expect(input.element.value).toBe('Buzz')
})