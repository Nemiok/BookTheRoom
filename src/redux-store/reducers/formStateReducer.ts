import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DatePickerDateFormat } from '@vkontakte/vkui'

export interface IFormState {
  tower: string,
  floor: string,
  room: string,
  date: DatePickerDateFormat,
  startTime: {
    hours: string,
    minutes: string,
  },
  endTime: {
    hours: string,
    minutes: string,
  },
  comment: string,
  isAgree: boolean,
  errorList: string[]
}

const initialState: IFormState = {
  tower: '',
  floor: '',
  room: '',
  date: { day: 0, month: 0, year: 0 },
  startTime: { hours: '', minutes: '' },
  endTime: { hours: '', minutes: '' },
  comment: '',
  isAgree: false,
  errorList: []
}

export const formStateSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setBookDate(state, action: PayloadAction<DatePickerDateFormat>) {
      return { ...state, date: action.payload }
    },
    setComment(state, action: PayloadAction<string>) {
      return { ...state, comment: action.payload }
    },
    setTower(state, action: PayloadAction<string>) {
      return { ...state, tower: action.payload }
    },
    setFloor(state, action: PayloadAction<string>) {
      return { ...state, floor: action.payload }
    },
    setRoom(state, action: PayloadAction<string>) {
      return { ...state, room: action.payload }
    },
    setStartHours(state, action: PayloadAction<string>) {
      return { ...state, startTime: { ...state.startTime, hours: action.payload, } }
    },
    setStartMinutes(state, action: PayloadAction<string>) {
      return { ...state, startTime: { ...state.startTime, minutes: action.payload } }
    },
    setEndHours(state, action: PayloadAction<string>) {
      return { ...state, endTime: { ...state.endTime, hours: action.payload, } }
    },
    setEndMinutes(state, action: PayloadAction<string>) {
      return { ...state, endTime: { ...state.endTime, minutes: action.payload } }
    },
    setAgree(state, action: PayloadAction<boolean>) {
      return { ...state, isAgree: action.payload }
    },

    clearForm(state) {
      return {
        ...state,
        tower: '',
        floor: '',
        room: '',
        comment: '',
        endTime: { minutes: '', hours: '' },
        startTime: { minutes: '', hours: '' },
        errorList: []
      }
    },

    setFormStatus(state, action: PayloadAction<string[]>) {
      return { ...state, errorList: action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBookDate, setComment, setTower, setFloor, setRoom, setAgree, clearForm, setFormStatus, setEndHours, setEndMinutes, setStartHours, setStartMinutes } = formStateSlice.actions

export default formStateSlice.reducer