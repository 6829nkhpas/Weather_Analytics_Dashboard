import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'unit',
  initialState: { unit: 'metric' as 'metric' | 'imperial' },
  reducers: {
    setUnit(state, action: PayloadAction<'metric'|'imperial'>){ state.unit = action.payload; try{ localStorage.setItem('unit', action.payload) }catch(e){} }
  }
})

export const { setUnit } = slice.actions
export default slice.reducer
