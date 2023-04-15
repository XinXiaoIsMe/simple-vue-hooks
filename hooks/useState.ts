import { Ref, UnwrapRef, ref } from 'vue'

type UseStateResponse<T = unknown> = [ Ref<UnwrapRef<T>>, (state: UnwrapRef<T>) => void ]

export default function useState<T = unknown> (value: T): UseStateResponse<T> {
  const state = ref(value)
  const setState = (newValue: UnwrapRef<T>) => state.value = newValue

  return [ state, setState ]
}
