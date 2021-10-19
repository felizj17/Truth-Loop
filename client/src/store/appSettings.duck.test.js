import reducer, {
  APP_SETTINGS_UPDATE,
  DEFAULT_STATE
} from './appSettings.duck'

describe('appSettings reducer tests', () => {
  let state, initialState
  beforeEach(() => {
    initialState = {
      appTitle: '',
      topBar: {
        hasBack: false,
        hasSettings: false,
      },
	  filters:{
		  location:[''],
		  category:['']
	  }
    }
  })

  describe('when just updating the appTitle', () => {
    beforeEach(() => {
      state = reducer(initialState, {type: APP_SETTINGS_UPDATE, payload: {appTitle: 'the new title'}})
    })
    it('should update the title', () => {
      expect(state.appTitle).toEqual('the new title')
    })
    it('should not update topBar.hasBack', () => {
      expect(state.topBar.hasBack).toBeFalsy()
    })
    it('topBar.hasBack should be defined', () => {
      expect(state.topBar.hasBack).toBeDefined()
    })
    it('should not update topBar.hasSettings', () => {
      expect(state.topBar.hasSettings).toBeFalsy()
    })
    it('topBar.hasSettings should be defined', () => {
      expect(state.topBar.hasSettings).toBeDefined()
    })
	it('should not update filters.location', () => {
	expect(state.filters.location).toEqual([''])
	})
	it('filters.location should be defined', () => {
	expect(state.filters.location).toBeDefined()
	})
	it('should not update filters.category', () => {
		expect(state.filters.category).toEqual([''])
	})
	it('filters.category should be defined', () => {
		expect(state.filters.category).toBeDefined()
	})
  })

  describe('when appTitle is undefined', () => {
    beforeEach(() => {
      state = reducer(initialState, {type: APP_SETTINGS_UPDATE, payload: {appTitle: undefined}})
    })
    it('should not update the title', () => {
      expect(state.appTitle).toEqual('')
    })
  })

  describe('when updating topBar.hasBack', () => {
    beforeEach(() => {
      state = reducer(initialState, {type: APP_SETTINGS_UPDATE, payload: {topBar: {hasBack: true}}})
    })
    it('should update topBar.hasBack', () => {
      expect(state.topBar.hasBack).toBeTruthy()
    })
    it('topBar.hasBack should be defined', () => {
      expect(state.topBar.hasBack).toBeDefined()
    })
    it('should not update topBar.hasSettings', () => {
      expect(state.topBar.hasSettings).toBeFalsy()
    })
    it('topBar.hasSettings should be defined', () => {
      expect(state.topBar.hasSettings).toBeDefined()
    })
    it('should not update the title', () => {
      expect(state.appTitle).toEqual('')
    })
	it('should not update filters.location', () => {
	expect(state.filters.location).toEqual([''])
	})
	it('filters.location should be defined', () => {
	expect(state.filters.location).toBeDefined()
	})
	it('should not update filters.category', () => {
		expect(state.filters.category).toEqual([''])
	})
	it('filters.category should be defined', () => {
		expect(state.filters.category).toBeDefined()
	})
  })

  describe('when updating topBar.hasSettings', () => {
    beforeEach(() => {
      state = reducer(initialState, {type: APP_SETTINGS_UPDATE, payload: {topBar: {hasSettings: true}}})
    })
    it('should update topBar.hasSettings', () => {
      expect(state.topBar.hasSettings).toBeTruthy()
    })
    it('should not update topBar.hasBack', () => {
      expect(state.topBar.hasBack).toBeFalsy()
    })
    it('topBar.hasBack should be defined', () => {
      expect(state.topBar.hasBack).toBeDefined()
    })
    it('should not update the title', () => {
      expect(state.appTitle).toEqual('')
    })
	it('should not update filters.location', () => {
	expect(state.filters.location).toEqual([''])
	})
	it('filters.location should be defined', () => {
	expect(state.filters.location).toBeDefined()
	})
	it('should not update filters.category', () => {
		expect(state.filters.category).toEqual([''])
	})
	it('filters.category should be defined', () => {
		expect(state.filters.category).toBeDefined()
	})
  })

  describe('when topBar.hasBack is undefined', () => {
    beforeEach(() => {
      state = reducer(initialState, {type: APP_SETTINGS_UPDATE, payload: {topBar: {hasBack: undefined}}})
    })
    it('should not update topBar.hasBack', () => {
      expect(state.topBar.hasBack).toBeFalsy()
    })
    it('topBar.hasBack should be defined', () => {
      expect(state.topBar.hasBack).toBeDefined()
    })
    it('should not update topBar.hasSettings', () => {
      expect(state.topBar.hasSettings).toBeFalsy()
    })
    it('topBar.hasSettings should be defined', () => {
      expect(state.topBar.hasSettings).toBeDefined()
    })
    it('should not update the title', () => {
      expect(state.appTitle).toEqual('')
    })
	it('should not update filters.location', () => {
	expect(state.filters.location).toEqual([''])
	})
	it('filters.location should be defined', () => {
	expect(state.filters.location).toBeDefined()
	})
	it('should not update filters.category', () => {
		expect(state.filters.category).toEqual([''])
	})
	it('filters.category should be defined', () => {
		expect(state.filters.category).toBeDefined()
	})
  })

  describe('when topBar.hasSettings is undefined', () => {
    beforeEach(() => {
      state = reducer(initialState, {type: APP_SETTINGS_UPDATE, payload: {topBar: {hasSettings: undefined}}})
    })
    it('should not update topBar.hasSettings', () => {
      expect(state.topBar.hasSettings).toBeFalsy()
    })
    it('topBar.hasSettings should be defined', () => {
      expect(state.topBar.hasSettings).toBeDefined()
    })
    it('should not update topBar.hasBack', () => {
      expect(state.topBar.hasBack).toBeFalsy()
    })
    it('topBar.hasBack should be defined', () => {
      expect(state.topBar.hasBack).toBeDefined()
    })
    it('should not update the title', () => {
      expect(state.appTitle).toEqual('')
    })
	it('should not update filters.location', () => {
	expect(state.filters.location).toEqual([''])
	})
	it('filters.location should be defined', () => {
	expect(state.filters.location).toBeDefined()
	})
	it('should not update filters.category', () => {
		expect(state.filters.category).toEqual([''])
	})
	it('filters.category should be defined', () => {
		expect(state.filters.category).toBeDefined()
	})
  })
  
  describe('when updating filters.location', () => {
    beforeEach(() => {
      state = reducer(initialState, {type: APP_SETTINGS_UPDATE, payload: {filters: {location: ['bubbles', 'are', 'light']}}})
    })
    it('should update filters.location', () => {
      expect(state.filters.location).toBeTruthy()
    })
    it('filters.location should be defined', () => {
      expect(state.filters.location).toBeDefined()
    })
    it('should not update filters.category', () => {
      expect(state.filters.category).toEqual([''])
    })
    it('filters.category should be defined', () => {
      expect(state.filters.category).toBeDefined()
    })
	it('should not update topBar.hasBack', () => {
		expect(state.topBar.hasBack).toBeFalsy()
	})
	it('topBar.hasBack should be defined', () => {
	expect(state.topBar.hasBack).toBeDefined()
	})
	it('should not update topBar.hasSettings', () => {
	expect(state.topBar.hasSettings).toBeFalsy()
	})
	it('topBar.hasSettings should be defined', () => {
	expect(state.topBar.hasSettings).toBeDefined()
	})
	it('should not update the title', () => {
	expect(state.appTitle).toEqual('')
	})
  })

  describe('when updating filters.category', () => {
    beforeEach(() => {
      state = reducer(initialState, {type: APP_SETTINGS_UPDATE, payload: {filters: {category: ['bubbles', 'are', 'light']}}})
    })
    it('should update filters.category', () => {
      expect(state.filters.category).toBeTruthy()
    })
    it('filters.category should be defined', () => {
      expect(state.filters.category).toBeDefined()
    })
    it('should not update filters.location', () => {
      expect(state.filters.location).toEqual([''])
    })
    it('filters.location should be defined', () => {
      expect(state.filters.location).toBeDefined()
    })
	it('should not update topBar.hasBack', () => {
		expect(state.topBar.hasBack).toBeFalsy()
	})
	it('topBar.hasBack should be defined', () => {
	expect(state.topBar.hasBack).toBeDefined()
	})
	it('should not update topBar.hasSettings', () => {
	expect(state.topBar.hasSettings).toBeFalsy()
	})
	it('topBar.hasSettings should be defined', () => {
	expect(state.topBar.hasSettings).toBeDefined()
	})
	it('should not update the title', () => {
	expect(state.appTitle).toEqual('')
	})
  })

  describe('when no initial state exists', () => {
    it('should return the default state', () => {
      expect(reducer(undefined, {})).toEqual(DEFAULT_STATE)
    })
  })
})
