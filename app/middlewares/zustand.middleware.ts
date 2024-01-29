import { useContactStore } from 'stores/contact.store'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// Usage with a plain action store, it will log actions as "setState"
const usePlainStore = create(devtools(useContactStore))
// Usage with a redux store, it will log full action types
// const useReduxStore = create(devtools(redux(reducer, initialState)))