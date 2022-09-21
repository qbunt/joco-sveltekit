const readableDate = (date: string): string => {
  return !date ? date : new Date(date).toLocaleString('en-US', {"month":"long", "year": "numeric", 'day':"numeric"})
}

export default readableDate
